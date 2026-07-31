export const siteConfig = {
  name: "Book Launch",
  shortName: "Book Launch",

  title: "Book Title — A Transformative Book by Jeremiah I. Austin",

  description:
    "Discover a transformative new book by Jeremiah I. Austin, created to inspire clarity, purpose, leadership, and lasting impact.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://spiritual-maturity.vercel.app",

  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ??
    "https://booklaunchapi.ezirimkingdom.com.ng",

  author: {
    name: "Jeremiah I. Austin",
    url: "/author",
  },

  links: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    x: "#",
  },

  keywords: [
    "Jeremiah I Austin",
    "book launch",
    "leadership book",
    "purpose",
    "personal development",
    "transformational book",
    "African author",
  ],
} as const;