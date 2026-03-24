import { getCollection, type CollectionEntry } from 'astro:content';
import routeInventory from '../../route-inventory.json';

type RouteInventoryItem = {
  file: string;
  slug: string;
  url: string;
};

type RouteInventory = {
  blog: RouteInventoryItem[];
  reads: RouteInventoryItem[];
};

const inventory = routeInventory as RouteInventory;

const blogSlugByFile = new Map<string, string>();
const readsSlugByFile = new Map<string, string>();

for (const item of inventory.blog) {
  blogSlugByFile.set(normalizeInventoryFile(item.file), item.slug);
}

for (const item of inventory.reads) {
  readsSlugByFile.set(normalizeInventoryFile(item.file), item.slug);
}

function normalizeInventoryFile(file: string): string {
  return file.replace(/\\/g, '/').replace(/\.md$/, '');
}

export type PostEntry = CollectionEntry<'posts'>;
export type ReadEntry = CollectionEntry<'reads'>;
export type DocPageEntry = CollectionEntry<'docsPages'>;
export type SitePageEntry = CollectionEntry<'sitePages'>;

export async function getPublishedPosts(): Promise<PostEntry[]> {
  const entries = await getCollection('posts', (entry) => !entry.data.draft);
  return sortEntriesByDateDesc(entries);
}

export async function getPublishedReads(): Promise<ReadEntry[]> {
  const entries = await getCollection('reads', (entry) => !entry.data.draft);
  return sortEntriesByDateDesc(entries);
}

export async function getDocsPages(): Promise<DocPageEntry[]> {
  const entries = await getCollection('docsPages');
  return sortDocumentsByRoute(entries);
}

export async function getSitePages(): Promise<SitePageEntry[]> {
  const entries = await getCollection('sitePages');
  return sortDocumentsByRoute(entries);
}

export function resolvePostSlug(entry: PostEntry): string {
  const fromInventory = blogSlugByFile.get(entry.id);
  if (fromInventory) return fromInventory;
  if (entry.data.slug !== undefined) return String(entry.data.slug).replace(/^\//, '');
  return entry.id;
}

export function resolveReadSlug(entry: ReadEntry): string {
  const fromInventory = readsSlugByFile.get(entry.id);
  if (fromInventory) return fromInventory;
  if (entry.data.slug !== undefined) return String(entry.data.slug).replace(/^\//, '');
  return entry.id;
}

export function getPostUrl(entry: PostEntry): string {
  return `/blog/${resolvePostSlug(entry)}`;
}

export function getReadUrl(entry: ReadEntry): string {
  return `/my-reads/${resolveReadSlug(entry)}`;
}

export function getDocPageUrl(entry: DocPageEntry): string {
  return entry.data.route;
}

export function getSitePageUrl(entry: SitePageEntry): string {
  return entry.data.route;
}

export function getEntryDate(
  entry: Pick<PostEntry, 'data'> | Pick<ReadEntry, 'data'>,
): Date | null {
  if (!entry.data.date) return null;
  const candidate = entry.data.date instanceof Date ? entry.data.date : new Date(entry.data.date);
  if (Number.isNaN(candidate.getTime())) return null;
  return candidate;
}

export function formatDate(date: Date | null): string {
  if (!date) return '';
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function resolvePostImage(entry: PostEntry): string | undefined {
  return resolvePublicImagePath(entry.data['og-image'] ?? entry.data.image, entry.id, 'posts');
}

export function resolveReadImage(entry: ReadEntry): string | undefined {
  return resolvePublicImagePath(entry.data['og-image'] ?? entry.data.image, entry.id, 'reads');
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  return {
    page: currentPage,
    perPage,
    totalItems: items.length,
    totalPages,
    items: items.slice(start, end),
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
    prevPage: currentPage - 1,
    nextPage: currentPage + 1,
  };
}

function sortEntriesByDateDesc<T extends Pick<PostEntry, 'data'> | Pick<ReadEntry, 'data'>>(
  entries: T[],
): T[] {
  return [...entries].sort((left, right) => {
    const leftDate = getEntryDate(left);
    const rightDate = getEntryDate(right);
    const leftTime = leftDate ? leftDate.getTime() : 0;
    const rightTime = rightDate ? rightDate.getTime() : 0;
    return rightTime - leftTime;
  });
}

function sortDocumentsByRoute<T extends Pick<DocPageEntry, 'data'> | Pick<SitePageEntry, 'data'>>(
  entries: T[],
): T[] {
  return [...entries].sort((left, right) => left.data.route.localeCompare(right.data.route));
}

function resolvePublicImagePath(
  value: string | undefined,
  entryId: string,
  collection: 'posts' | 'reads',
): string | undefined {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith('/')) return value;

  const cleaned = value.replace(/^(\.\/|\.\.\/)+/, '');
  if (!cleaned.startsWith('assets/')) return value;

  const fileName = cleaned.replace(/^assets\//, '');
  if (collection === 'posts') return `/assets/${fileName}`;

  const year = entryId.split('/')[0];
  if (/^\d{4}$/.test(year)) return `/my-reads-assets/${year}/${fileName}`;
  return `/my-reads-assets/${fileName}`;
}
