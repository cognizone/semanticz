import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'SemantiCZ',
    tagline: 'Semantic components by Cognizone',
    favicon: 'img/favicon-32x32.png',

    // Set the production url of your site here
    url: 'https://semanticz.github.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'cognizone', // Usually your GitHub org/user name.
    projectName: 'semanticz', // Usually your repo name.

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
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/semantic.svg',
        navbar: {
            title: 'SemantiCZ',
            logo: {
                alt: 'SemantiCZ Logo',
                src: 'img/semantic-color.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'componentsSidebar',
                    position: 'left',
                    label: 'Components',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
            ],
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://cogni.zone">cognizone</a>. Built with Docusaurus</a>.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
