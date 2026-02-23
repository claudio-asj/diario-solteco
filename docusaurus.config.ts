import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Meu Diário Solteco",
  tagline:
    "Este site tem como objetivo simples organizar muito daquilo que venho aprendendo durante meu tempo no TICDeMoS (SOLTEC), ou seja minhas aventuras dentro da extensão universitária voltado para TI.",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://claudio-asj.github.io",
  baseUrl: "/diario-solteco/",

  organizationName: "claudio-asj",
  projectName: "diario-solteco",
  deploymentBranch: "main",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/claudio-asj/diario-solteco/blob/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/claudio-asj/diario-solteco/blob/main",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Diario Solteco",
      logo: {
        alt: "Logo Diario Solteco",
        src: "img/logo.png",
        width: 36,
        height: 36,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/claudio-asj",
          label: "GitHub @claudio-asj",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Conteudo",
          items: [
            {
              label: "Introducao",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Projeto",
          items: [
            {
              label: "Repositorio",
              href: "https://github.com/claudio-asj/diario-solteco",
            },
            {
              label: "Perfil GitHub",
              href: "https://github.com/claudio-asj",
            },
            {
              label: "Pages",
              href: "https://claudio-asj.github.io/diario-solteco/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Claudio Alves. Feito com Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
