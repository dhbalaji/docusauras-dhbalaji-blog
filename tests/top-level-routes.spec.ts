import { test, expect, type APIRequestContext, type Page } from '@playwright/test';

type RouteCase = {
  path: string;
  heading: string | RegExp;
  sections?: Array<string | RegExp>;
  minLocalImages?: number;
  links?: Array<{ name?: string | RegExp; href: string }>;
  textSnippets?: string[];
};

const routeCases: RouteCase[] = [
  {
    path: '/blog',
    heading: /Blog/i,
    sections: [/Recent posts/i],
    minLocalImages: 1,
    links: [
      { href: '/blog/page/2' },
      { name: /14 Years in Tech, 7 Years with One Company/i, href: '/blog/2025/7-years-with-one-employer' },
    ],
  },
  {
    path: '/my-reads',
    heading: /dhbalaji non-fiction reads & book talks/i,
    sections: [/Recent posts/i],
    minLocalImages: 1,
    links: [
      { href: '/my-reads/page/2' },
      { name: /Let's Talk Legacy/i, href: '/my-reads/20' },
    ],
  },
  {
    path: '/pr-corner',
    heading: 'PR Corner for dhbalaji',
    sections: [
      /Photos/i,
      /For Toastmasters/i,
      /For Tech Conferences/i,
      /For Office/i,
      /Fun Facts/i,
      /Long-Form Author Introduction/i,
    ],
    minLocalImages: 1,
    textSnippets: ['Perplexity.', 'Vibe coding.'],
  },
  {
    path: '/news',
    heading: 'Resources to keep you updated in frontend',
    sections: [/Frontend focussed Newsletters/i, /Podcasts/i, /Videos/i, /Tech Blogs/i],
    links: [
      { name: /Frontend Focus/i, href: 'https://frontendfoc.us/issues' },
      { name: /Syntax fm/i, href: 'https://syntax.fm/' },
    ],
  },
  {
    path: '/quotes',
    heading: 'Quotes Collection',
    textSnippets: [
      'Great things never came from comfort Zones.',
      'Self-discipline trumps IQ.',
      'The #1 productivity secret; wake up early.',
    ],
  },
  {
    path: '/docs/contact',
    heading: 'Contact Balaji!',
    links: [
      { href: '/files/dhbalaji-lead-frontend-lg-v23052023.pdf' },
      { href: '/files/dhbalaji-lead-frontend-sm-v23052023.pdf' },
      { href: 'https://linkedin.com/in/dhbalaji/' },
      { href: 'https://github.com/dhbalaji/' },
    ],
    textSnippets: ['balaji@dhbalaji.dev'],
  },
  {
    path: '/reading-goals/2024',
    heading: 'Reading Goals 2024',
    sections: [
      /Technologies Related to Frontend/i,
      /Design Patterns, Algorithms, and Internal Workings/i,
      /Core Topics like HTML, CSS, and JS/i,
      /App Development with Frameworks/i,
      /Server Side App Development with JS/i,
      /Other Foundational Topics/i,
      /Software Development Topics/i,
    ],
    textSnippets: ['To Study: 56 Books', 'Happy reading!'],
  },
  {
    path: '/tools-tech/2022',
    heading: 'Tools & Tech to build apps in 2022',
    sections: [/Frontend Technologies/i, /Backend Technologies/i, /Design Tools/i, /Infrastructure/i],
    textSnippets: ['Docusarus', 'Playwright', 'Google tag manager'],
  },
  {
    path: '/tools-tech/2023',
    heading: 'Tools & Tech to build apps in 2023',
    sections: [/Core/i, /Fundmental/i, /Advanced/i, /Watch list/i, /Skim/i],
    textSnippets: ['split the software practioner universe into 5 parts'],
  },
];

async function verifyLocalImages(page: Page, request: APIRequestContext, minLocalImages: number) {
  const images = page.locator('main img[src^="/"], article img[src^="/"]');
  await expect(images.first()).toBeVisible();

  const count = await images.count();
  expect(count).toBeGreaterThanOrEqual(minLocalImages);

  for (let index = 0; index < count; index++) {
    const image = images.nth(index);
    await expect(image).toBeVisible();
    const src = await image.getAttribute('src');
    expect(src).toBeTruthy();
    const response = await request.get(src!);
    expect(response.ok()).toBeTruthy();
  }
}

test.describe('Top-level route benchmark', () => {
  for (const routeCase of routeCases) {
    test(`${routeCase.path} renders its primary content correctly`, async ({ page, request }) => {
      await page.goto(routeCase.path);

      await expect(page).toHaveURL(new RegExp(`${routeCase.path.replace(/\//g, '\\/')}$`));
      await expect(page.getByRole('heading', { level: 1, name: routeCase.heading })).toBeVisible();

      for (const section of routeCase.sections ?? []) {
        await expect(page.getByText(section, { exact: false }).first()).toBeVisible();
      }

      for (const link of routeCase.links ?? []) {
        const locator = link.name
          ? page.getByRole('link', { name: link.name }).first()
          : page.locator(`a[href="${link.href}"]`).first();
        await expect(locator).toBeVisible();
        await expect(locator).toHaveAttribute('href', link.href);
      }

      for (const snippet of routeCase.textSnippets ?? []) {
        await expect(page.getByText(snippet, { exact: false })).toBeVisible();
      }

      if (routeCase.minLocalImages) {
        await verifyLocalImages(page, request, routeCase.minLocalImages);
      }
    });
  }
});
