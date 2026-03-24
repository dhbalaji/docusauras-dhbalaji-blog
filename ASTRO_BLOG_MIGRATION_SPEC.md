# Astro Full-Site Migration Spec

## Objective

Migrate the current site from Docusaurus to Astro with the following non-negotiable constraints:

- Preserve existing public URL patterns for all migrated routes.
- Avoid side effects on current production behavior during development and rollout.
- Maintain existing SEO signals, metadata, and crawlability.
- Keep the migration reversible until final cutover.

This spec now covers the full public site surface, including blog, `my-reads`, top-level markdown pages, homepage, and docs-derived routes.

## Additional Product Requirements

The migrated Astro site must also include these intentional behavior changes on the blog surface:

- Remove tag display and tag navigation from below blog posts.
- Remove author profile display on blog posts, since the site has a single author.
- Add built-in social sharing metadata support so that writing a post automatically produces the required social preview tags without additional manual work after publishing.

## Current Scope in This Repository

Primary content and behavior relevant to this migration:

- Main blog content: `blog/`
- Secondary reading blog: `my-reads/`
- Top-level markdown pages: `src/pages/`
- Docs and portfolio content: `docs/`
- Static assets: `static/`
- Homepage and shared UI: `src/pages/`, `src/components/`
- Site configuration and route definitions: `docusaurus.config.js`
- Existing regression tests: `tests/`

Still out of scope unless explicitly approved:

- Redesign of homepage content or visual identity
- Changing analytics vendor, search vendor, or feed URLs
- Rewriting article content for style or SEO

## Success Criteria

The migration is successful only if all of the following are true:

1. Existing blog post URLs continue to resolve with the same path shape.
2. Existing `my-reads` URLs continue to resolve with the same path shape.
3. Existing top-level routes continue to resolve with the same path shape.
4. Existing docs and portfolio URLs continue to resolve with the same path shape.
5. Existing asset URLs referenced by migrated content continue to work, or are redirected transparently.
6. Metadata remains equivalent for title, description, canonical URL, OG image, and publish date.
7. RSS/feed behavior remains available at the agreed endpoint.
8. Analytics and search continue to function after cutover.
9. No production traffic is switched until parity checks pass.
10. The legacy Docusaurus site remains runnable until Astro cutover is complete.
11. Blog post pages no longer render author profile blocks.
12. Blog post pages no longer render tag UI below the post body.
13. Social sharing metadata is generated automatically from post frontmatter and site defaults.

## Non-Negotiable Safety Rules

1. Do not replace the Docusaurus app in place at the start of the work.
2. Do not rename, move, or delete current content directories during initial implementation.
3. Do not change public route slugs unless a redirect plan is explicitly documented and approved.
4. Do not change feed path, canonical domain, or base URL during migration.
5. Do not alter existing article markdown body text except for path normalization or encoding fixes.
6. Do not change current production deployment until parity validation is complete.
7. Keep the migration branch isolated and reversible.
8. Any intentional UX removals must be explicitly preserved in the Astro implementation and covered by tests.

## URL Preservation Rules

The Astro implementation must preserve these route families:

- `/blog`
- `/blog/<existing-post-slug>`
- `/my-reads`
- `/my-reads/<existing-post-slug-or-path>`
- `/pr-corner`
- `/news`
- `/quotes`
- `/reading-goals/<year>`
- `/tools-tech/<year>`
- `/docs/<existing-docs-path>`
- `/`

Rules:

1. Preserve current slug values from frontmatter where present.
2. If a slug is absent, preserve the path-derived slug exactly as Docusaurus currently exposes it.
3. Preserve nested year-based path structures where they influence current URLs.
4. Preserve trailing slash behavior currently configured by the site.
5. Preserve asset URLs referenced as absolute paths where possible.

Before coding each route family, generate a route inventory from existing content and treat it as the source of truth for parity testing.

## Side-Effect Prevention Strategy

To avoid unintended impact, migration must follow a parallel-build strategy:

1. Create Astro app structure alongside the existing Docusaurus codebase.
2. Reuse content from current directories without destructive moves.
3. Validate Astro output locally and in preview environments only.
4. Compare generated route inventory, metadata, and assets against the current site.
5. Cut over only when parity checks are green.

This is a "shadow migration", not a "rewrite and switch blindly".

## Target Astro Architecture

Recommended structure:

- `astro/` or repo-root Astro app if approved after parity phase
- `src/content/posts/` for blog content
- `src/content/reads/` for `my-reads`
- `src/content/site-pages/` for top-level markdown pages
- `src/content/docs-pages/` for docs-derived routes
- `src/layouts/`
- `src/components/`
- `src/pages/blog/`
- `src/pages/my-reads/`
- `src/pages/docs/`
- `public/`

Recommended Astro concepts:

- Content collections for posts and reads
- Shared article layout for metadata and SEO
- Shared list layout for pagination and card rendering
- Optional React islands only for truly interactive parts

## Required Deliverables

1. Astro project scaffold with isolated build and dev commands
2. Content ingestion strategy for `blog/`, `my-reads/`, `src/pages/`, and `docs/`
3. Route inventory file for current URLs
4. Frontmatter and route mapping specification
5. URL parity test coverage
6. Metadata parity checklist
7. Cutover and rollback procedure

## Implementation Sequence

### Phase 1: Baseline and Inventory

Goal: capture current behavior before changing anything.

Tasks:

1. Inventory all current blog URLs from `blog/` and `my-reads/`.
2. Inventory all current top-level routes from `src/pages/`.
3. Inventory all current docs routes from `docs/`.
4. Inventory metadata per page:
   - title
   - description
   - date
   - slug
   - image
   - tags
   - authors
5. Inventory asset references used by markdown and MDX files.
6. Inventory current feed URL and blog index pagination behavior.
7. Inventory route settings from `docusaurus.config.js`:
   - `baseUrl`
   - `trailingSlash`
   - `blog.path`
   - `blog.routeBasePath`
   - second blog plugin `routeBasePath`
8. Save outputs as migration artifacts committed to the repo.

Acceptance criteria:

- We have a machine-readable route list.
- We know which URLs must not change.
- We have a complete content parity checklist before implementation starts.

### Phase 2: Astro Scaffold Without Cutover

Goal: create an isolated Astro app without affecting the current site.

Tasks:

1. Add Astro dependencies and scripts without removing Docusaurus dependencies.
2. Create an Astro app in an isolated location.
3. Configure Astro site URL and trailing slash behavior to match the current site.
4. Add placeholder routes for:
   - `/blog`
   - `/blog/[...slug]`
   - `/my-reads`
   - `/my-reads/[...slug]`
   - `/docs/[...slug]`
   - top-level route handlers for markdown pages
5. Ensure Astro can run locally on a separate port.

Acceptance criteria:

- Docusaurus still runs unchanged.
- Astro runs independently.
- No production config is switched.

### Phase 3: Content Model and Frontmatter Mapping

Goal: ingest existing content into Astro without changing URL shape.

Tasks:

1. Define content collection schemas for `posts`, `reads`, `site-pages`, and `docs-pages`.
2. Map Docusaurus frontmatter fields to Astro equivalents.
3. Preserve custom fields when they matter to SEO or rendering:
   - `authors`
   - `image`
   - `keywords`
   - `og-title`
   - `og-image`
4. Treat `authors` and `authors.yml` as migration inputs only, not as UI requirements for the final Astro post layout.
5. Preserve docs/frontmatter slugs and route semantics from nested docs paths.
6. Convert Docusaurus-only MDX constructs into Astro-compatible rendering primitives without changing route meaning.
7. Exclude draft content from production output using explicit draft handling.
8. Normalize encoding issues without changing article meaning.
9. Define automatic fallbacks for social metadata:
   - use post title for `og:title` when no custom override exists
   - use post description for `og:description`
   - use post image for `og:image` and `twitter:image`
   - use canonical post URL for `og:url`
   - use a site-level default image when a post image is absent

Acceptance criteria:

- Every published source file can be parsed.
- Draft behavior is explicit.
- No post loses metadata during import.
- Social metadata rules are automatic and do not require per-post manual setup beyond normal frontmatter.

### Phase 4: Asset and Markdown Compatibility

Goal: make sure migrated markdown renders correctly with no broken images or downloads.

Tasks:

1. Audit relative image references in blog markdown.
2. Audit relative image references in top-level pages and docs content.
3. Choose one asset strategy and apply consistently:
   - preserve existing public asset URLs
   - or copy assets into Astro `public/` with exact matching paths
4. Validate download links and PDF links still work.
5. Add checks for broken markdown asset references.
6. Preserve hero/cover images used in metadata cards.

Acceptance criteria:

- No broken images in migrated posts.
- No broken download links.
- OG and feed images still resolve.

### Phase 5: Route-Parity Implementation

Goal: implement Astro routing that reproduces current public URLs.

Tasks:

1. Generate Astro static paths from the baseline route inventory.
2. Use frontmatter slug when present.
3. Use path-derived slug when frontmatter slug is absent.
4. Preserve nested path segments where required.
5. Keep index pages at `/blog` and `/my-reads`.
6. Implement route generation for top-level markdown pages.
7. Implement route generation for docs-derived pages.
8. Keep pagination behavior aligned with the current site or document any approved difference.

Acceptance criteria:

- Route inventory generated from Astro matches the baseline inventory.
- No migrated route returns 404 locally.

### Phase 6: Layout and Metadata Parity

Goal: match the important behavior of the current pages across the site.

Tasks:

1. Build a shared article layout for post pages.
2. Preserve:
   - page title
   - meta description
   - canonical URL
   - OG title
   - OG image
   - published date
3. Do not render author profile UI on final blog post pages.
4. Do not render tag UI below final blog post pages.
5. Recreate blog listing pages for posts and reads.
6. Recreate homepage, nav, and footer behavior.
7. Preserve RSS/feed generation.
8. Preserve syntax highlighting behavior for code blocks.

Acceptance criteria:

- Metadata snapshots are equivalent for sampled posts.
- Feed endpoint is available and valid.
- Social preview tags are present automatically for sampled posts.
- Author block is absent on final post pages.
- Tag UI below posts is absent on final post pages.

### Phase 7: Integration Parity

Goal: keep non-content behavior consistent.

Tasks:

1. Re-add analytics scripts in Astro with the same IDs.
2. Re-add search only after route parity is stable.
3. Re-add any required external scripts carefully, including Dialogflow only if still needed for migrated surfaces.
4. Verify favicon, CNAME, and static site artifacts remain intact.
5. Preserve homepage links into docs and contact surfaces.

Acceptance criteria:

- Analytics identifiers match current production behavior.
- Search migration does not block the initial blog cutover if temporarily staged separately.

### Phase 8: Regression Testing

Goal: prove no harmful side effects before cutover.

Tasks:

1. Extend Playwright tests to run against Astro preview.
2. Add parity tests for:
   - route resolution
   - index page rendering
   - article rendering
   - metadata presence
   - image presence
   - no obvious console errors
   - absence of author block on post pages
   - absence of tag list below posts
   - presence of OG and Twitter social tags
   - top-level route rendering
   - docs route rendering
3. Add broken-link checks for internal blog navigation.
4. Add a route-diff check between Docusaurus inventory and Astro inventory.

Acceptance criteria:

- All critical parity tests pass.
- Route diff is empty for in-scope migrated routes.

### Phase 9: Preview Validation

Goal: validate the site in a safe environment before production.

Tasks:

1. Deploy Astro to preview only.
2. Manually review a representative sample of routes:
   - old post
   - recent post
   - post with local images
   - post with downloads
   - `my-reads` sample
   - top-level informational page
   - docs/contact
   - docs/experience/portfolio
3. Confirm metadata using browser inspection.
4. Confirm feed and static assets resolve.

Acceptance criteria:

- Preview behaves as expected.
- No unresolved blockers remain for the in-scope routes.

### Phase 10: Controlled Cutover and Rollback

Goal: switch safely and recover quickly if needed.

Tasks:

1. Keep the Docusaurus implementation available until post-cutover validation finishes.
2. Switch deployment only after tests and preview checks pass.
3. Run a production smoke suite immediately after deployment.
4. Monitor for 404s, asset failures, and metadata regressions.
5. If critical regressions appear, roll back to the Docusaurus deployment.

Acceptance criteria:

- Production cutover is controlled and reversible.
- Rollback path is documented and tested.

## Required Checklists

### Route Parity Checklist

- `/` works
- `/blog` works
- `/my-reads` works
- Every published `blog/` post resolves
- Every published `my-reads/` post resolves
- Every published top-level page resolves
- Every published docs page resolves
- No unexpected trailing slash changes
- No slug drift

### Metadata Checklist

- Title present
- Description present
- Canonical URL correct
- OG image resolves
- OG title present
- OG description present
- OG URL present
- Twitter card present
- Twitter image present
- Publish date correct
- Tag pages or tag rendering preserved if in scope

### Asset Checklist

- Inline markdown images resolve
- Cover images resolve
- Download links resolve
- Favicons and shared images resolve

### Safety Checklist

- Docusaurus build still works during migration
- Astro build works independently
- No destructive content moves were made
- Rollback instructions are current
- Intentional removals are verified:
  - no author profile block
  - no tag list below posts

## Recommended Working Rules for Implementation

1. Prefer additive changes over in-place replacement.
2. Commit by migration phase so rollback is simple.
3. Keep generated inventories and parity artifacts in version control.
4. Test a representative sample after each phase, not only at the end.
5. Treat URL changes as bugs unless explicitly approved.
6. Treat missing metadata or broken assets as release blockers.

## Risks to Watch Closely

1. Relative image paths in markdown may not behave the same in Astro.
2. Frontmatter differences can silently change canonical URLs or social cards.
3. Docusaurus path generation may differ from Astro for nested content.
4. Search integration may depend on current crawl assumptions.
5. Encoding issues in source markdown can surface more visibly after migration.
6. Removing author and tag UI must not accidentally remove needed metadata generation.

## Explicit No-Side-Effect Definition

For this migration, "no side effects" means:

- no broken existing blog URLs
- no broken `my-reads` URLs
- no broken top-level routes
- no broken docs routes
- no silent slug changes
- no loss of metadata
- no broken static asset references
- no immediate removal of Docusaurus
- no production cutover before parity validation
- no manual post-publish work required to get correct social sharing metadata

## Final Approval Gate

The migration may move to production only when all of the following are true:

1. Route inventory matches expected URLs.
2. Critical Playwright coverage passes.
3. Preview validation passes.
4. Feed, metadata, and assets are verified.
5. Rollback steps are documented and ready.
