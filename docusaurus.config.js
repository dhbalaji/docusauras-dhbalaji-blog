// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require("prism-react-renderer");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "dhbalaji, lead frontend engineer at Sabre",
  tagline: "Sponsored by dhbalaji.dev",
  url: "https://dhbalaji.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

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
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          path: "blog",
          postsPerPage: 8,
          showReadingTime: true,
          blogSidebarCount: 8,
          feedOptions: {
            type: "rss",
            title: "dhbalaji.dev feed",
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: "GTM-5T8W8LD",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        hideOnScroll: true,
        title: "Home",
        items: [
          {
            type: "doc",
            docId: "experience/intro",
            position: "right",
            label: "Portfolio",
          },
          {
            to: "/my-reads",
            label: "Reads",
            position: "right",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Technical",
            items: [
              {
                label: "Portfolio",
                to: "docs/experience/portfolio",
              },
            ],
          },
          {
            title: "Non Technical",
            items: [
              {
                label: "Reads",
                to: "my-reads",
              },
              {
                label: "Blog",
                to: "blog",
              },
            ],
          },
          {
            title: "Contact me",
            items: [
              {
                label: "Email",
                href: "mailto:balaji@dhbalaji.dev",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/dhbalaji/",
              },
              {
                label: "Github",
                href: "https://www.github.com/dhbalaji/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dhbalaji.dev`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      algolia: {
        appId: "9TX3UC8FQ4",
        apiKey: "e9a6c8006bc03be4f3e58123b0293e8a",
        indexName: "dhbalaji",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: false,
        disableUserPersonalization: true,
        placeholder: "Search Site",
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "second-blog",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "my-reads",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./my-reads",
        blogTitle: "dhbalaji non-fiction reads & book talks",
        blogSidebarCount: 8,
        showReadingTime: true,
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-VGQ399LJC8",
      },
    ],
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  customFields: {
    // Put your custom environment here
    detailedResume: "/files/dhbalaji-lead-frontend-lg-v23052023.pdf",
    singlePageResume: "/files/dhbalaji-lead-frontend-sm-v23052023.pdf",
  },
};

module.exports = config;
