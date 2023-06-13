// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Collab.Land Documentation',
  tagline:
    'Extend the limits of Collab.Land by contributing apps to the marketplace. Build with the Collab.Land API to create your own custom experiences.',
  url: 'https://dev.collab.land',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Abridged', // Usually your GitHub org/user name.
  projectName: 'CollabLand', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    {
      src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
      'data-website-id': '7d20e0b5-97d8-4081-94c5-62ecf4a19bdc',
      'data-project-name': 'Collab.Land',
      'data-project-color': '#9B9EFF',
      'data-project-logo':
        'https://res.cloudinary.com/kennyy/image/upload/v1686681959/Logo-Mark-Color_evjsgi.png',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/abridged/collabland-dev/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/abridged/collabland-dev/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: 'https://api.collab.land/openapi.yaml',
            route: '/apis/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  plugins: [
    [
      'content-docs',
      {
        id: 'proposals',
        path: 'proposals',
        routeBasePath: 'proposals',
        sidebarPath: require.resolve('./sidebars-proposals.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-TT8PTWXCK5',
        anonymizeIP: true,
      },
    ],
    [
      'content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./sidebars-tutorials.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: 'Collab.Land Documentation',
        logo: {
          alt: 'Collab.Land',
          src: 'img/logo1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/tutorials/introduction',
            label: 'Tutorials',
            activeBaseRegex: `/tutorials/`,
            position: 'left',
          },
        ],
      },
      algolia: {
        apiKey: process.env.API_KEY,
        indexName: 'collabland',
        appId: process.env.APPLICATION_ID,
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {},
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/intro',
              },
              {
                label: 'API docs',
                to: '/apis',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'https://collabland.freshdesk.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Collab_Land_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/abridged',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abridged, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
