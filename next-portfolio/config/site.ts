export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cédric Sanchez - Between Montpellier & Nîmes",
  description: "Welcome in my portfolio :)",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Intro",
      href: "/introduction",
    },
    {
      label: "Projets",
      href: "/projects",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Intro",
      href: "/introduction",
    },
    {
      label: "Projets",
      href: "/projects",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/CedricSanchezGithub",
    twitter: "https://twitter.com/getnextui",
    docs: "./docs/CV_Cédric.pdf",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
