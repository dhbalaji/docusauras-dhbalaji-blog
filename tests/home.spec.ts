import { test, expect } from '@playwright/test';

test.describe('Homepage benchmark', () => {
  test('renders homepage content, navigation, and key CTAs', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/$/);
    await expect(page).toHaveTitle(/dhbalaji/i);
    await expect(page.getByRole('heading', { level: 1, name: "Hi, I'm Balaji" })).toBeVisible();
    await expect(page.getByText('Simple UI, Intelligent Frontend.')).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Portfolio' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Contact me' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /AI-Powered Audio Summary/i })).toBeVisible();

    const heroPhoto = page.locator('img[src="/img/dhbalaji.jpg"]');
    await expect(heroPhoto).toBeVisible();
    await expect(heroPhoto).toHaveAttribute('src', '/img/dhbalaji.jpg');

    const audioSummaryFrame = page.locator('iframe[title="The Art of Felicitation: A Toastmasters Tale"]');
    await expect(audioSummaryFrame).toBeVisible();

    const portfolioLinks = page.getByRole('link', { name: /portfolio/i });
    await expect(portfolioLinks.first()).toHaveAttribute('href', '/docs/experience/portfolio');
    await expect(page.getByRole('link', { name: 'Online Presence' })).toHaveAttribute(
      'href',
      '/docs/experience/portfolio/online-presence',
    );
    await expect(page.getByRole('link', { name: 'Pursuits' })).toHaveAttribute(
      'href',
      '/docs/experience/portfolio/side-projects',
    );
    await expect(page.getByRole('link', { name: 'Soft Skills' })).toHaveAttribute(
      'href',
      '/docs/experience/portfolio/soft-skills',
    );

    await expect(page.getByRole('link', { name: 'Descriptive Resume' })).toHaveAttribute(
      'href',
      '/files/dhbalaji-lead-frontend-lg-v23052023.pdf',
    );
    await expect(page.getByRole('link', { name: 'One Page Resume' })).toHaveAttribute(
      'href',
      '/files/dhbalaji-lead-frontend-sm-v23052023.pdf',
    );

    const navbar = page.locator('nav[aria-label="Main"]');
    await expect(navbar).toBeVisible();
    await expect(navbar.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/blog');
    await expect(navbar.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/docs/contact');

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByRole('link', { name: 'PR Corner' })).toHaveAttribute('href', '/pr-corner');
    await expect(footer.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:balaji@dhbalaji.dev');
  });
});
