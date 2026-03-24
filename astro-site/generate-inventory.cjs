const fs = require('fs');
const path = require('path');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
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
    data[key] = value.replace(/^["']|["']$/g, '');
  }

  return data;
}

function walkFiles(dir, extensions, shouldSkip = () => false) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (shouldSkip(item, fullPath)) continue;
    if (item.isDirectory()) {
      results = results.concat(walkFiles(fullPath, extensions, shouldSkip));
    } else if (extensions.includes(path.extname(item.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

function toPosix(value) {
  return value.replace(/\\/g, '/');
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

function routeFromPage(relativePath) {
  const withoutExtension = relativePath.replace(/\.(md|mdx)$/, '');
  return `/${withoutExtension.replace(/\/index$/, '')}`;
}

function getMarkdownFiles(dir, baseDir, skipDirectories = []) {
  return walkFiles(
    dir,
    ['.md'],
    (item) =>
      item.isDirectory() &&
      (skipDirectories.includes(item.name) || item.name === 'node_modules'),
  ).map((fullPath) => ({
    fullPath,
    relPath: toPosix(path.relative(baseDir, fullPath)),
  }));
}

const rootDir = path.resolve(__dirname, '..');

const blogFiles = getMarkdownFiles(path.join(rootDir, 'blog'), path.join(rootDir, 'blog'), [
  'assets',
  'downloads',
]);
const readsFiles = getMarkdownFiles(path.join(rootDir, 'my-reads'), path.join(rootDir, 'my-reads'), [
  'assets',
]);

const docsFiles = walkFiles(path.join(rootDir, 'docs'), ['.md', '.mdx']).map((fullPath) => ({
  fullPath,
  relPath: toPosix(path.relative(path.join(rootDir, 'docs'), fullPath)),
}));

const sitePageFiles = walkFiles(path.join(rootDir, 'src', 'pages'), ['.md', '.mdx']).map((fullPath) => ({
  fullPath,
  relPath: toPosix(path.relative(path.join(rootDir, 'src', 'pages'), fullPath)),
}));

const blogInventory = blogFiles.map(({ fullPath, relPath }) => {
  const data = parseFrontmatter(fs.readFileSync(fullPath, 'utf-8'));
  const slug = data.slug ? String(data.slug).replace(/^\//, '') : relPath.replace(/\.md$/, '');
  return {
    file: relPath,
    slug,
    url: `/blog/${slug}`,
    title: data.title || '',
    date: data.date || '',
    hasDescription: Boolean(data.description),
    hasImage: Boolean(data.image),
    hasTags: Boolean(data.tags && data.tags.length),
    hasSlug: Boolean(data.slug),
  };
});

const readsInventory = readsFiles.map(({ fullPath, relPath }) => {
  const data = parseFrontmatter(fs.readFileSync(fullPath, 'utf-8'));
  const slug = data.slug ? String(data.slug).replace(/^\//, '') : relPath.replace(/\.md$/, '');
  return {
    file: relPath,
    slug,
    url: `/my-reads/${slug}`,
    title: data.title || '',
    date: data.date || '',
    hasDescription: Boolean(data.description),
    hasOgTitle: Boolean(data['og-title']),
    hasOgImage: Boolean(data['og-image']),
    hasSlug: Boolean(data.slug),
  };
});

const docsInventory = docsFiles.map(({ fullPath, relPath }) => {
  const data = parseFrontmatter(fs.readFileSync(fullPath, 'utf-8'));
  return {
    file: relPath,
    url: routeFromDoc(relPath, data),
    title: data.title || path.parse(relPath).name,
    hasDescription: Boolean(data.description),
    hasImage: Boolean(data.image),
    hasSlug: Boolean(data.slug),
  };
});

const pagesInventory = sitePageFiles.map(({ fullPath, relPath }) => {
  const data = parseFrontmatter(fs.readFileSync(fullPath, 'utf-8'));
  return {
    file: relPath,
    url: routeFromPage(relPath),
    title: data.title || path.parse(relPath).name,
    hasDescription: Boolean(data.description),
    hasImage: Boolean(data.image),
  };
});

const inventory = {
  blog: blogInventory,
  reads: readsInventory,
  docs: docsInventory,
  pages: pagesInventory,
};

fs.writeFileSync(path.join(__dirname, 'route-inventory.json'), JSON.stringify(inventory, null, 2));

console.log('Blog posts:', blogInventory.length);
console.log('Reads:', readsInventory.length);
console.log('Docs pages:', docsInventory.length);
console.log('Site pages:', pagesInventory.length);
