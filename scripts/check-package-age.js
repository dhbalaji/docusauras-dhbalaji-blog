#!/usr/bin/env node

/**
 * Script to check if packages in package.json/lock files are older than a week
 * Prevents installing freshly published packages that might have stability issues
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const MIN_AGE_DAYS = 7;
const MIN_AGE_MS = MIN_AGE_DAYS * 24 * 60 * 60 * 1000;

// Read package.json to get dependencies
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
  ...packageJson.optionalDependencies,
};

const tooYoungPackages = [];
let checkedCount = 0;
let processedCount = 0;

async function checkPackageAge(packageName, version) {
  return new Promise((resolve) => {
    https.get(`https://registry.npmjs.org/${packageName}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const packageInfo = JSON.parse(data);
          const publishedTime = packageInfo.time[version];
          
          if (publishedTime) {
            const publishDate = new Date(publishedTime);
            const ageMs = Date.now() - publishDate.getTime();
            
            if (ageMs < MIN_AGE_MS) {
              const ageDays = Math.floor(ageMs / (24 * 60 * 60 * 1000));
              tooYoungPackages.push({
                name: packageName,
                version,
                publishDate: publishDate.toISOString(),
                ageDays
              });
            }
          }
        } catch (e) {
          console.warn(`Warning: Could not parse package info for ${packageName}@${version}`);
        }
        resolve();
      });
    }).on('error', (err) => {
      console.warn(`Warning: Could not fetch info for ${packageName}: ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log(`Checking package ages (minimum ${MIN_AGE_DAYS} days)...`);
  
  const packageNames = Object.keys(allDeps);
  checkedCount = packageNames.length;
  
  // Check packages concurrently but limit to 5 at a time
  const batchSize = 5;
  for (let i = 0; i < packageNames.length; i += batchSize) {
    const batch = packageNames.slice(i, i + batchSize);
    await Promise.all(batch.map(name => {
      const version = allDeps[name].replace(/[\^~>=<]/g, '');
      return checkPackageAge(name, version);
    }));
    processedCount += batch.length;
    process.stdout.write(`\rChecked: ${processedCount}/${checkedCount}`);
  }
  
  console.log('\n');
  
  if (tooYoungPackages.length > 0) {
    console.error(`❌ Found ${tooYoungPackages.length} package(s) less than ${MIN_AGE_DAYS} days old:\n`);
    tooYoungPackages.forEach(pkg => {
      console.error(`  - ${pkg.name}@${pkg.version} (${pkg.ageDays} days old, published: ${pkg.publishDate})`);
    });
    console.error(`\nInstallation blocked. Please wait or update the package versions.\n`);
    process.exit(1);
  } else {
    console.log(`✅ All packages are older than ${MIN_AGE_DAYS} days. Safe to install!\n`);
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Error during package age check:', err);
  process.exit(1);
});
