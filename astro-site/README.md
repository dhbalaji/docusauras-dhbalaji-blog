# Astro Blog Migration App

This app is the parallel Astro implementation for `dhbalaji.dev` blog migration.

## What Is Implemented

- Route parity for:
  - `/blog`
  - `/blog/<slug>`
  - `/blog/page/<n>`
  - `/my-reads`
  - `/my-reads/<slug>`
  - `/my-reads/page/<n>`
- Feed endpoints:
  - `/blog/rss.xml`
  - `/my-reads/rss.xml`
  - `/my-reads/atom.xml`
- Social metadata generated automatically from frontmatter + defaults.
- Author profile UI removed from post pages.
- Tag UI below post pages removed.
- URL mapping driven by `route-inventory.json`.

## Commands

From `astro-site/`:

- `npm run sync:content`
- `npm run generate:inventory`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Content Sync Notes

`sync:content` copies source content from the parent repo:

- `../blog` -> `src/content/posts`
- `../my-reads` -> `src/content/reads`
- `../static` -> `public`

It also copies:

- `../blog/downloads` -> `public/blog/downloads`
- `../blog/assets` -> `public/assets`
- `../my-reads/<year>/assets` -> `public/my-reads-assets/<year>`

## Routing Notes

Dynamic post routes resolve slugs in this order:

1. `route-inventory.json` slug (source-of-truth for URL parity)
2. frontmatter `slug`
3. fallback to entry id

This prevents accidental slug drift during migration.

