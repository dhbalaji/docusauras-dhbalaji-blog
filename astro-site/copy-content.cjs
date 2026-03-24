const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const items = fs.readdirSync(src, { withFileTypes: true });
  for (const item of items) {
    const srcPath = path.join(src, item.name);
    const destPath = path.join(dest, item.name);
    if (item.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function clearDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
  fs.mkdirSync(dirPath, { recursive: true });
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: content };

  const data = {};
  const lines = match[1].split(/\r?\n/);
  let currentKey = null;

  for (const line of lines) {
    const arrayMatch = line.match(/^\s*-\s+(.*)$/);
    if (arrayMatch && currentKey) {
      if (!Array.isArray(data[currentKey])) data[currentKey] = [];
      data[currentKey].push(arrayMatch[1].trim().replace(/^["']|["']$/g, ''));
      continue;
    }

    const kvMatch = line.match(/^([\w-]+):\s*(.*)$/);
    if (!kvMatch) continue;

    const [, key, rawValue] = kvMatch;
    currentKey = key;
    const value = rawValue.trim();
    if (value === '') {
      data[key] = [];
      continue;
    }
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      continue;
    }
    data[key] = value.replace(/^["']|["']$/g, '');
  }

  return { data, body: content.slice(match[0].length).trimStart() };
}

function stringifyFrontmatter(data) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null || value === '') continue;
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const item of value) {
        lines.push(`  - ${JSON.stringify(String(item))}`);
      }
      continue;
    }
    lines.push(`${key}: ${JSON.stringify(String(value))}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

function walkFiles(dir, extensions) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...walkFiles(fullPath, extensions));
      continue;
    }
    if (extensions.includes(path.extname(item.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

function toPosix(value) {
  return value.replace(/\\/g, '/');
}

function routeFromPagePath(relativePath) {
  const withoutExtension = relativePath.replace(/\.(md|mdx)$/, '');
  const route = withoutExtension.replace(/\/index$/, '');
  return `/${route}`;
}

function routeFromDoc(relativePath, frontmatter) {
  const parsed = path.posix.parse(relativePath);
  const directory = parsed.dir;
  const baseName = parsed.name;
  const slug = frontmatter.slug ? String(frontmatter.slug).replace(/^\/+/, '') : '';

  if (slug) {
    return `/docs/${[directory, slug].filter(Boolean).join('/')}`;
  }

  if (baseName === 'index') {
    return `/docs/${directory}`;
  }

  return `/docs/${[directory, baseName].filter(Boolean).join('/')}`;
}

function replaceResumeLinks(content) {
  return content.replace(
    />\s*<ResumeDownloadLinks[^>]*\/>/g,
    '> Download [Detailed resume](/files/dhbalaji-lead-frontend-lg-v23052023.pdf) or [One page resume](/files/dhbalaji-lead-frontend-sm-v23052023.pdf) pdf.',
  ).replace(
    /<ResumeDownloadLinks[^>]*\/>/g,
    'Download [Detailed resume](/files/dhbalaji-lead-frontend-lg-v23052023.pdf) or [One page resume](/files/dhbalaji-lead-frontend-sm-v23052023.pdf) pdf.',
  );
}

function replaceDocusaurusImageTags(content) {
  let nextContent = content.replace(/^\s*import\s+.+$/gm, '');
  nextContent = nextContent.replace(/^\{\s*" "\s*\}\s*$/gm, '');
  nextContent = nextContent.replace(
    /<Image\s+img=\{require\("([^"]+)"\)\}\s*\/>/g,
    (_, imagePath) => `![](${normalizeStaticAssetPath(imagePath)})`,
  );
  nextContent = nextContent.replace(
    /<Image\s+img=\{require\("([^"]+)"\)\}\s*>[\s\S]*?<\/Image>/g,
    (_, imagePath) => `![](${normalizeStaticAssetPath(imagePath)})`,
  );
  nextContent = nextContent.replace(
    /<Image[\s\S]*?img=\{require\("([^"]+)"\)\}[\s\S]*?\/>/g,
    (_, imagePath) => `![](${normalizeStaticAssetPath(imagePath)})`,
  );
  return nextContent;
}

function normalizeStaticAssetPath(value) {
  return value
    .replace(/^(\.\.\/)+static\//, '/')
    .replace(/^\.\/static\//, '/')
    .replace(/^static\//, '/');
}

function normalizeDocAssetPath(relativeDocPath, value) {
  if (/^https?:\/\//i.test(value) || value.startsWith('/')) return value;

  if (value.includes('static/')) {
    return normalizeStaticAssetPath(value);
  }

  const docDir = path.posix.dirname(relativeDocPath);
  const absoluteDocAsset = path.posix.normalize(path.posix.join(docDir, value));
  return `/docs-assets/${absoluteDocAsset}`;
}

function sanitizeMarkdownLinks(content, routeByDocFile, currentRelativePath) {
  let nextContent = content;

  nextContent = nextContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    const normalized = normalizeDocAssetPath(currentRelativePath, url.trim());
    return `![${alt}](${normalized})`;
  });

  nextContent = nextContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
    const trimmedUrl = url.trim();
    if (trimmedUrl.startsWith('#')) return match;
    if (/^https?:\/\//i.test(trimmedUrl) || trimmedUrl.startsWith('mailto:') || trimmedUrl.startsWith('/')) {
      return match;
    }

    if (/\.(md|mdx)$/.test(trimmedUrl)) {
      const currentDir = path.posix.dirname(currentRelativePath);
      const targetFile = path.posix.normalize(path.posix.join(currentDir, trimmedUrl));
      const targetRoute = routeByDocFile.get(targetFile);
      if (targetRoute) {
        return `[${label}](${targetRoute})`;
      }
    }

    if (trimmedUrl.startsWith('./assets/') || trimmedUrl.startsWith('../assets/')) {
      return `[${label}](${normalizeDocAssetPath(currentRelativePath, trimmedUrl)})`;
    }

    return match;
  });

  return nextContent;
}

function sanitizeDocBody(relativePath, body, routeByDocFile) {
  let nextBody = body;
  nextBody = replaceResumeLinks(nextBody);
  nextBody = replaceDocusaurusImageTags(nextBody);
  nextBody = sanitizeMarkdownLinks(nextBody, routeByDocFile, relativePath);
  return nextBody.trimStart();
}

function sanitizePageBody(relativePath, body) {
  let nextBody = body;
  nextBody = replaceResumeLinks(nextBody);
  nextBody = replaceDocusaurusImageTags(nextBody);
  nextBody = nextBody.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
    if (url.startsWith('/')) return match;
    if (url.includes('static/')) return `![${alt}](${normalizeStaticAssetPath(url)})`;
    return match;
  });
  return nextBody.trimStart();
}

function writeGeneratedMarkdown(destinationPath, frontmatter, body) {
  ensureDir(path.dirname(destinationPath));
  const output = `${stringifyFrontmatter(frontmatter)}${body.trim()}\n`;
  fs.writeFileSync(destinationPath, output);
}

const rootDir = path.resolve(__dirname, '..');
const astroDir = __dirname;

const postsDir = path.join(astroDir, 'src', 'content', 'posts');
const readsDir = path.join(astroDir, 'src', 'content', 'reads');
const docsDir = path.join(astroDir, 'src', 'content', 'docs-pages');
const pagesDir = path.join(astroDir, 'src', 'content', 'site-pages');
const publicDir = path.join(astroDir, 'public');

clearDir(postsDir);
clearDir(readsDir);
clearDir(docsDir);
clearDir(pagesDir);
clearDir(publicDir);

console.log('Copying blog content...');
copyDir(path.join(rootDir, 'blog'), postsDir);

console.log('Copying my-reads content...');
copyDir(path.join(rootDir, 'my-reads'), readsDir);

console.log('Copying static assets...');
copyDir(path.join(rootDir, 'static'), publicDir);

const downloadsSrc = path.join(rootDir, 'blog', 'downloads');
if (fs.existsSync(downloadsSrc)) {
  console.log('Copying downloads...');
  copyDir(downloadsSrc, path.join(publicDir, 'blog', 'downloads'));
}

const blogAssetsSrc = path.join(rootDir, 'blog', 'assets');
if (fs.existsSync(blogAssetsSrc)) {
  console.log('Copying blog assets to public/assets/...');
  copyDir(blogAssetsSrc, path.join(publicDir, 'assets'));
}

for (const year of ['2022', '2023', '2024']) {
  const readsAssetsSrc = path.join(rootDir, 'my-reads', year, 'assets');
  if (fs.existsSync(readsAssetsSrc)) {
    copyDir(readsAssetsSrc, path.join(publicDir, 'my-reads-assets', year));
  }
}

console.log('Copying docs-local assets...');
for (const docsAssetDir of walkFiles(path.join(rootDir, 'docs'), ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'])) {
  if (!toPosix(docsAssetDir).includes('/assets/')) continue;
  const relativeAsset = toPosix(path.relative(path.join(rootDir, 'docs'), docsAssetDir));
  const destination = path.join(publicDir, 'docs-assets', relativeAsset);
  ensureDir(path.dirname(destination));
  fs.copyFileSync(docsAssetDir, destination);
}

const docsSourceDir = path.join(rootDir, 'docs');
const docFiles = walkFiles(docsSourceDir, ['.md', '.mdx']);
const routeByDocFile = new Map();

for (const absolutePath of docFiles) {
  const relativePath = toPosix(path.relative(docsSourceDir, absolutePath));
  const { data } = parseFrontmatter(fs.readFileSync(absolutePath, 'utf-8'));
  routeByDocFile.set(relativePath, routeFromDoc(relativePath, data));
}

console.log('Generating docs content...');
for (const absolutePath of docFiles) {
  const relativePath = toPosix(path.relative(docsSourceDir, absolutePath));
  const { data, body } = parseFrontmatter(fs.readFileSync(absolutePath, 'utf-8'));
  const route = routeByDocFile.get(relativePath);
  const image = data.image ? normalizeDocAssetPath(relativePath, String(data.image)) : undefined;

  writeGeneratedMarkdown(
    path.join(docsDir, relativePath.replace(/\.(md|mdx)$/, '.md')),
    {
      title: data.title || path.parse(relativePath).name,
      description: data.description,
      image,
      keywords: Array.isArray(data.keywords) ? data.keywords : undefined,
      route,
    },
    sanitizeDocBody(relativePath, body, routeByDocFile),
  );
}

console.log('Generating top-level page content...');
const rootPagesDir = path.join(rootDir, 'src', 'pages');
const pageFiles = walkFiles(rootPagesDir, ['.md', '.mdx']);
for (const absolutePath of pageFiles) {
  const relativePath = toPosix(path.relative(rootPagesDir, absolutePath));
  const { data, body } = parseFrontmatter(fs.readFileSync(absolutePath, 'utf-8'));
  const route = routeFromPagePath(relativePath);

  writeGeneratedMarkdown(
    path.join(pagesDir, relativePath.replace(/\.(md|mdx)$/, '.md')),
    {
      title: data.title || path.parse(relativePath).name,
      description: data.description,
      image: data.image,
      keywords: Array.isArray(data.keywords) ? data.keywords : undefined,
      route,
    },
    sanitizePageBody(relativePath, body),
  );
}

console.log('Content copy complete!');
