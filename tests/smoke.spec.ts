import { test, expect } from '@playwright/test';

test.describe('Home page — smoke and navigation checks', () => {
  test.beforeEach(async ({ page }) => {
    // Visit the local dev site. Ensure the dev server is running at http://localhost:3000
    await page.goto('http://localhost:3000/');
  });

  test('home loads and shows main heading and greeting', async ({ page }) => {
    // Check the main heading is visible
    await expect(page.locator('h1')).toBeVisible();

    // Check greeting text 'Hi,' is present (matches existing smoke test)
    await expect(page.locator('text=Hi,')).toBeVisible();
  });

  test('hero image or main visual is present', async ({ page }) => {
    // Look for a visible image that likely represents the hero/feature image.
    // Matches typical static asset src paths (assets or img).
    const hero = page.locator('img[src*="assets"], img[src*="/img"], img[src*="assets"]');
    await expect(hero.first()).toBeVisible();
  });

  test('primary CTA "Portfolio" navigates to /portfolio', async ({ page }) => {
    // Click the primary portfolio link in the header or page
    await page.getByRole('link', { name: /portfolio/i }).first().click();
    await expect(page).toHaveURL(/.*portfolio/);
  });
});