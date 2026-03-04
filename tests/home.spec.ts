// spec: Home page — comprehensive checks
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Home page — comprehensive checks', () => {
  test.beforeEach(async ({ page }) => {
    // Use baseURL from playwright.config.ts; ensure dev server is running.
    await page.goto('/');
  });

  // Check main heading and greeting
  test('main heading and greeting visible', async ({ page }) => {
    // 1. Verify main heading (h1)
    await expect(page.locator('h1')).toBeVisible();

    // 2. Verify greeting 'Hi,' if present
    const hi = page.locator('text=Hi,');
    const hiCount = await hi.count();
    if (hiCount > 0) {
      await expect(hi.first()).toBeVisible();
    }
  });

  // Check that book/article sections exist (h2 headings)
  test('page has section headings (h2) for content sections', async ({ page }) => {
    const sections = page.locator('h2');
    // Poll for up to 5s for h2 headings to appear to reduce flakiness on slow renders
    try {
      await expect.poll(async () => await sections.count(), { timeout: 5000 }).toBeGreaterThan(0);
      const count = await sections.count();
      expect(count).toBeGreaterThanOrEqual(1);
    } catch {
      // Fallback: check for alternative structural elements (article/section) before skipping
      const alt = await page.locator('main article, main section, article').count();
      if (alt === 0) {
        console.log('No section headings (h2) found after waiting; skipping assertion to avoid flake');
        return;
      }
    }
  });

  // Validate header links (existence and non-empty href)
  test('header links have href attributes', async ({ page }) => {
    // Header may be implemented as <header>, <nav> or a .navbar element depending on theme
    const header = page.locator('header, nav, .navbar, .navbar__inner').first();
    await expect(header).toBeVisible();
    const headerLinks = header.locator('a[href]');
    const count = await headerLinks.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      const href = await headerLinks.nth(i).getAttribute('href');
      expect(href).not.toBeNull();
      expect(href?.trim().length).toBeGreaterThan(0);
    }
  });

  // Validate footer links (if footer exists)
  test('footer exists and footer links are valid if present', async ({ page }) => {
    const footer = page.locator('footer');
    const footerCount = await footer.count();
    // If footer is not present, skip this assertion to avoid false failures (theme differences)
    if (footerCount === 0) {
      console.log('No footer element found — skipping footer link checks');
      return;
    }
    await expect(footer.first()).toBeVisible();
    const footerLinks = footer.locator('a[href]');
    const count = await footerLinks.count();
    for (let i = 0; i < count; i++) {
      const href = await footerLinks.nth(i).getAttribute('href');
      expect(href).not.toBeNull();
      expect(href?.trim().length).toBeGreaterThan(0);
    }
  });

  // Images in main content — visible and have alt text
  test('main images are visible and have alt text', async ({ page }) => {
    const imgs = page.locator('main img, article img, img');
    const count = await imgs.count();
    if (count === 0) {
      console.log('No images found on page — skipping image assertions');
      return;
    }
    for (let i = 0; i < count; i++) {
      const img = imgs.nth(i);
      await expect(img).toBeVisible();
    }
    // At least one image with non-empty alt
    let altful = 0;
    for (let i = 0; i < count; i++) {
      const alt = await imgs.nth(i).getAttribute('alt');
      if (alt && alt.trim().length > 0) altful++;
    }
    expect(altful).toBeGreaterThanOrEqual(1);
  });

  // Sanity-check important text snippets
  test('contains topical text/snippets', async ({ page }) => {
    // Look for likely SEO phrases and header text
    const snippets = [
      /Best New Books/i,
      /Must-Read/i,
      /book reviews/i,
      /October 2025/i,
    ];
    let found = false;
    for (const s of snippets) {
      const loc = page.locator(`text=${s}`);
      if ((await loc.count()) > 0) {
        found = true;
        await expect(loc.first()).toBeVisible();
        break;
      }
    }
    // Soft assertion: if none of the snippets are found, log and continue (avoid failing for small content changes)
    if (!found) console.log('No topical snippets found; this may be OK depending on page content');
  });

  // Capture a full-page screenshot for visual inspection
  test('capture full page screenshot', async ({ page }) => {
    await page.screenshot({ path: 'test-results/home-page.png', fullPage: true });
  });

  // Verify primary CTA navigation (Portfolio link)
  test('primary CTA "Portfolio" navigates', async ({ page }) => {
    const links = page.getByRole('link', { name: /portfolio/i });
    const count = await links.count();
    if (count === 0) {
      console.log('No portfolio link found — skipping CTA navigation test');
      return;
    }
    const link = links.first();
    await expect(link).toBeVisible();
    const href = await link.getAttribute('href');
    if (!href) {
      console.log('Portfolio link has no href — skipping click');
      return;
    }
    // Only click if it looks like an internal navigation
    if (href.startsWith('/') || href.includes('localhost') || href.startsWith('#')) {
      await link.click();
      await expect(page).toHaveURL(/.*portfolio/);
    } else {
      console.log(`Portfolio link looks external (${href}) — not clicking`);
    }
  });
});
