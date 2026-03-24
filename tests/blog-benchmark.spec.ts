import { test, expect } from '@playwright/test';

const mainBlogPost = {
  path: '/blog/2025/7-years-with-one-employer',
  title: '14 Years in Tech, 7 Years with One Company: Notes from the Edge of Impermanence',
  description:
    'After 14 years in techâ€”including 7 years with one companyâ€”this is not a celebration post.',
  canonical: 'https://dhbalaji.dev/blog/2025/7-years-with-one-employer',
  publishedAt: '2025-07-30T10:00:00.000Z',
  tagPath: '/blog/tags/career',
  adjacentPostPath: '/blog/2025/react-nexus-2025-3-day-summary-in-25-points',
};

const myReadsPost = {
  path: '/my-reads/20',
  title: "Let's Talk Legacy A Financial Planner for Your Loved Ones by Monika Halan",
  description: "Book talk on Let's Talk Legacy A Financial Planner for Your Loved Ones by Monika Halan",
  canonical: 'https://dhbalaji.dev/my-reads/20',
  publishedAt: '2024-12-15T15:30:00.000Z',
  olderPostPath: '/my-reads/19',
};

test.describe('Blog migration benchmark', () => {
  test('blog index keeps the existing route pattern and exposes pagination', async ({ page }) => {
    await page.goto('/blog');

    await expect(page).toHaveURL(/\/blog$/);
    await expect(page.getByRole('main')).toContainText('14 Years in Tech, 7 Years with One Company');
    await expect(page.locator('a[href="/blog/page/2"]').first()).toBeVisible();
  });

  test('main blog post preserves URL, metadata, tags, and image rendering', async ({ page, request }) => {
    await page.goto(mainBlogPost.path);

    await expect(page).toHaveURL(new RegExp(`${mainBlogPost.path.replace(/\//g, '\\/')}$`));
    await expect(page.getByRole('heading', { level: 1, name: mainBlogPost.title })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', mainBlogPost.canonical);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      new RegExp(mainBlogPost.description.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    );
    await expect(page.locator(`time[datetime="${mainBlogPost.publishedAt}"]`)).toBeVisible();
    await expect(page.locator(`a[href="${mainBlogPost.tagPath}"]`).first()).toBeVisible();
    await expect(page.locator(`a[href="${mainBlogPost.adjacentPostPath}"]`).first()).toBeVisible();

    const articleImage = page.locator('main article img').first();
    await expect(articleImage).toBeVisible();
    const imageSrc = await articleImage.getAttribute('src');
    expect(imageSrc).toBeTruthy();
    expect(imageSrc).toContain('/assets/images/');

    const imageResponse = await request.get(imageSrc!);
    expect(imageResponse.ok()).toBeTruthy();
    expect(imageResponse.headers()['content-type']).toContain('image/');
  });

  test('my-reads post preserves numeric slug, canonical URL, toc, and older-post navigation', async ({
    page,
    request,
  }) => {
    await page.goto(myReadsPost.path);

    await expect(page).toHaveURL(/\/my-reads\/20$/);
    await expect(page.getByRole('heading', { level: 1, name: myReadsPost.title })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', myReadsPost.canonical);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', myReadsPost.description);
    await expect(page.locator(`time[datetime="${myReadsPost.publishedAt}"]`)).toBeVisible();
    await expect(page.locator(`a[href="${myReadsPost.olderPostPath}"]`).first()).toBeVisible();
    await expect(page.locator('a[href="#summary"]')).toBeVisible();

    const articleImage = page.locator('main article img').first();
    await expect(articleImage).toBeVisible();
    const imageSrc = await articleImage.getAttribute('src');
    expect(imageSrc).toBeTruthy();
    expect(imageSrc).toContain('/assets/images/');

    const imageResponse = await request.get(imageSrc!);
    expect(imageResponse.ok()).toBeTruthy();
    expect(imageResponse.headers()['content-type']).toContain('image/');
  });

  test('feeds, pagination pages, and tag routes stay healthy', async ({ request }) => {
    const blogFeed = await request.get('/blog/rss.xml');
    expect(blogFeed.ok()).toBeTruthy();
    expect(blogFeed.headers()['content-type']).toContain('xml');
    await expect(blogFeed.text()).resolves.toContain('/blog/2025/7-years-with-one-employer');

    const readsFeed = await request.get('/my-reads/rss.xml');
    expect(readsFeed.ok()).toBeTruthy();
    expect(readsFeed.headers()['content-type']).toContain('xml');
    await expect(readsFeed.text()).resolves.toContain('/my-reads/20');

    const paginatedBlog = await request.get('/blog/page/2');
    expect(paginatedBlog.ok()).toBeTruthy();
    expect(paginatedBlog.headers()['content-type']).toContain('text/html');

    const tagPage = await request.get('/blog/tags/career');
    expect(tagPage.ok()).toBeTruthy();
    expect(tagPage.headers()['content-type']).toContain('text/html');
  });
});
