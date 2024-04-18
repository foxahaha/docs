// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AegisVPN',
  tagline: 'AegisVPN',
  favicon: 'https://aegisvpn.me/static/images/icons/favicon.ico',

  // Set the production url of your site here
  url: 'https://aegisvpn.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AegisVPN', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
            routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AegisVPN',
        logo: {
          alt: 'AegisVPN Logo',
          src: 'https://aegisvpn.me/static/images/icons/favicon.ico',
          href: 'https://aegisvpn.me/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },

          {
            href: 'https://github.com/facebook/docusaurus',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Главная',
                to: '/',
              },
              {
                label: 'Выбор устройства',
                to: '/category/выбор-устройства',
              },
            ],
          },
          {
            title: 'Контакты',
            items: [
              {
                label: '24/7 Поддержка',
                href: 'https://t.me/aegissupport',
              },
            ],
          },
          {
            title: 'Больше',
            items: [
              {
                label: 'Сайт',
                href: 'https://aegisvpn.me/',
              },
              {
                label: 'Оставить отзыв',
                href: 'https://aegisvpn.me/reviews/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AegisVPN`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
