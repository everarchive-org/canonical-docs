import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'EverArchive',
  tagline: 'Civilizational Memory Infrastructure',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.everarchive.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domain, use '/'
  baseUrl: '/',
  
  // Trailing slash behavior for GitHub Pages
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'everarchive-org', // Usually your GitHub org/user name.
  projectName: 'canonical-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/everarchive-org/canonical-docs/tree/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EverArchive',
      // logo: {
      //   alt: 'EverArchive Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://everarchive.org',
          label: 'Main Site',
          position: 'left',
        },
        {
          href: 'https://github.com/everarchive-org/canonical-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Vision',
              to: '/docs/intro',
            },
            {
              label: 'Features',
              to: '/docs/features/features-overview',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Main Site',
              href: 'https://everarchive.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/everarchive-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EverArchive. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
