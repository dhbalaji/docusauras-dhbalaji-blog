# Frontmatter Mapping (Docusaurus -> Astro)

## Core Fields

- `title` -> page title and heading
- `date` -> publish date and feed date
- `description` -> meta description and post excerpt
- `slug` -> URL path override
- `image` -> default social image

## Extended SEO/Social Fields

- `og-title` -> overrides `title` for social meta title
- `og-image` -> overrides `image` for social cards
- `keywords` -> `meta[name="keywords"]`

## Optional Fields Preserved as Inputs

- `tags` -> kept in content data, not rendered in post UI
- `authors` -> kept in content data, not rendered in post UI

## Automatic Social Fallback Logic

If a specific social field is missing:

1. `og:title` falls back to `title`
2. `og:description` falls back to `description`
3. `og:image` and `twitter:image` fall back to:
   - `og-image`
   - else `image`
   - else site default `/img/dhbalaji.jpg`
4. `og:url` and canonical are computed from site URL + route path

This ensures no manual post-publish meta work is required.

