# Cutover and Rollback

## Cutover Preconditions

1. Astro preview passes URL parity checks for `/blog` and `/my-reads`.
2. Feed URLs resolve:
   - `/blog/rss.xml`
   - `/my-reads/rss.xml`
3. Metadata checks pass on sampled pages:
   - canonical
   - OG tags
   - Twitter card tags
4. Author and tag UI removal verified on migrated post pages.
5. Docusaurus deployment path is still available for immediate rollback.

## Cutover Steps

1. Build Astro app from `astro-site/`.
2. Deploy Astro output to preview.
3. Run route and metadata smoke checks against preview.
4. Switch production hosting from Docusaurus output to Astro output.
5. Monitor:
   - 404s
   - feed errors
   - image failures
   - SEO/social meta regressions

## Rollback Steps

1. Re-point deployment to last known good Docusaurus build/artifact.
2. Purge cache/CDN if necessary.
3. Re-run production smoke checks for:
   - `/blog`
   - representative blog post URL
   - `/my-reads`
   - representative read URL
4. Keep Astro branch and logs for post-incident fixes.

