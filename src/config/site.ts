const defaultSiteUrl =
  "https://spiritual-maturity.vercel.app";

export const siteConfig = {
  name: "Spiritual Maturity",

  shortName: "Spiritual Maturity",

  title:
    "Spiritual Maturity — Foundations for Spiritual Growth",

  titleTemplate:
    "%s | Spiritual Maturity",

  description:
    "Discover Spiritual Maturity by Jeremiah I. Austin—a practical and biblically grounded guide for building strong spiritual foundations, deepening your walk with God, and growing into lasting Christian maturity.",

  shortDescription:
    "A practical and biblically grounded guide to lasting spiritual growth.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    defaultSiteUrl,

  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ??
    "https://booklaunchapi.ezirimkingdom.com.ng",

  locale: "en_NG",

  language: "en",

  themeColor: "#590A4E",

  backgroundColor: "#FCF8F3",

  ogImage:
    "/images/seo/spiritual-maturity-og.png",

  twitterImage:
    "/images/seo/spiritual-maturity-twitter.png",

  author: {
    name: "Jeremiah I. Austin",
    url: "/#author",
  },

  developer: {
    name: "Ezirim Kingdom",
    url: "https://ezirimkingdom.com.ng/#contact",
  },

  links: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    x: "#",
  },

  keywords: [
    "Spiritual Maturity",
    "Foundations for Spiritual Growth",
    "Jeremiah I Austin",
    "Jeremiah Austin",
    "Christian book",
    "Christian growth book",
    "spiritual growth",
    "spiritual maturity book",
    "Christian maturity",
    "biblical foundations",
    "Christian discipleship",
    "Christian devotional book",
    "prayer and fasting",
    "Holy Spirit",
    "Christian living",
    "Christian books Nigeria",
    "book launch",
  ],
} as const;

export function getAbsoluteUrl(
  path = "/",
): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const normalisedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${baseUrl}${normalisedPath}`;
}