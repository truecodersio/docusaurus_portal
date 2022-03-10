/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "TrueCoders Docs",
  tagline: "Learn to Code",
  url: "https://docs.truecoders.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/alt-favicon.png",
  organizationName: "truecoders", // Usually your GitHub org/user name.
  projectName: "docusaurus_portal", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "TrueCoders Logo",
        src: "img/TrueCodersLogo_Inline.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://collab-two.vercel.app/",
          label: "Collab↗",
          position: "left",
        },
        {
          href: "https://github.com/truecodersio",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      // respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "🌙",

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "☀️",

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Lectures",
              to: "docs/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Schedule 1-on-1",
              href: "https://truecoders.io/one-on-one-fswd",
            },
            {
              label: "Support Email",
              href: "mailto:support@truecoders.io",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/truecodersio",
            },
            {
              label: "Collab↗",
              href: "https://collab-two.vercel.app/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TrueCoders, LLC.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/Bryantellius/docusaurus_portal/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/Bryantellius/docusaurus_portal/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
