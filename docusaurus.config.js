// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "dhbalaji, the frontend consultant",
  tagline: "Sponsored by dhbalaji.dev",
  url: "https://dhbalaji.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dhbalaji", // Usually your GitHub org/user name.
  projectName: "docusauras-dhbalaji-blog", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: {
          path: 'blog',
          postsPerPage: 8,
          showReadingTime: true,
          blogSidebarCount: 8,
          feedOptions: {
            type: "rss",
            title: "dhbalaji.dev feed"
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: 'G-SVE5EZKFD4',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        hideOnScroll: true,
        title: "dhbalaji.dev",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Projects",
          },
          {
            to: "/blog",
            label: "Tech Blog",
            position: "right",
          },
          {
            to: "/my-reads",
            label: "My Reads",
            position: "left"
          },
          {
            href: "https://github.com/dhbalaji",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} dhbalaji.dev`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'second-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'my-reads',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './my-reads',
      },
    ],
  ],
};

module.exports = config;
