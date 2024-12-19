import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-vue";
import type { Pair } from "~/@app";
export type SiteConfig = typeof siteConfig;

const OG_IMAGE =
  "https://res.cloudinary.com/dvczya1oj/image/upload/v1734539993/frontendcrumbs/uexohqokcf8xgudeewvp.png";
const META_TITLE = "Amicoder | All about frontend engineering";
const META_DESCRIPTION =
  "Frontend focused tips and trick for frontend engineers";

export const siteConfig = {
  name: "FrontendCrumbs",
  meta: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: process.env.NUXT_PUBLIC_APP_URL,
    img: OG_IMAGE,
  },
  og: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: process.env.NUXT_PUBLIC_APP_URL,
    image: OG_IMAGE,
    type: "website",
  },
  x: {
    title: META_TITLE,
    card: "summary_large_image",
    description: META_DESCRIPTION,
    image: OG_IMAGE,
  },
  domain: "frontendcrumbs.com",
  // bio: "Hi, You look pretty good today. :)",

  navItems: [
    {
      key: "articles",
      label: "Articles",
    },
    /* {
        key: "home",
        label: "Home",
      }, */
    /* {
      key: "crafts",
      label: "Crafts",
      Icon: MdOutlineDesignServices,
    },
    {
      key: "series",
      label: "Series",
      Icon: MdOutlineLayers,
    },
    {
      key: "store",
      label: "Store",
      Icon: MdOutlineStorefront,
    },
    {
      key: "about",
      label: "About",
      Icon: MdOutlinePerson3,
    }, */
  ] as Pair[],
  footerMenu: [
    /* {
    key: "about",
    label: "About",
  },
  {
    key: "contact",
    label: "Contact",
  },
  {
    key: "terms",
    label: "Terms",
  },
  {
    key: "privacy",
    label: "Privacy",
  }, */
  ],

  socials: [
    {
      label: "Twitter / X",
      Icon: IconBrandTwitter,
      href: "https://go.alwaisy.dev/twitter-dev",
    },
    {
      label: "Github",
      Icon: IconBrandGithub,
      href: "https://go.alwaisy.dev/github",
    },
    {
      label: "Linkedin",
      Icon: IconBrandLinkedin,
      href: "https://go.alwaisy.dev/linkedin",
    },
  ],
};
