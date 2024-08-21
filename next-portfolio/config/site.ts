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
    {
      label: "Raspberry",
      href: "/raspberry",
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
    {
      label: "Raspberry",
      href: "/raspberry",
    },
  ],
  links: {
    github: "https://github.com/CedricSanchezGithub",
    twitter: "https://twitter.com/getnextui",
    docs: "./docs/CV_Cédric.pdf",
    linkedin: "https://www.linkedin.com/in/c%C3%A9dric-sanchez-902257277/",
  },
};
