export const bookConfig = {
  title: "Spiritual Maturity",
  subtitle: "Foundations for Spiritual Growth",
  shortTitle: "Spiritual Maturity",

  eyebrow: "A TRANSFORMATIVE NEW BOOK",

  headline: {
    firstLine: "The Courage to",
    emphasizedLine: "Become More.",
  },

  description:
    "A practical and spiritually grounded guide created to help believers strengthen their foundations, deepen their walk with God, and grow into lasting spiritual maturity.",

  author: "Jeremiah I. Austin",
  forewordBy: "Dr Samuel I. Okoro",

  launch: {
    status: "prelaunch" as
      | "prelaunch"
      | "live"
      | "closed",

    date: "2026-08-02T12:00:00+01:00",
    displayDate: "August 2, 2026",
    timezone: "West Africa Time",
  },

  cover: {
    front: "/images/book/front.png",
    back: "/images/book/back.png",
    spine: "/images/book/spine.png",
    pages: "/images/book/pages.png",
  },

  formats: {
    digital: {
      name: "Digital Edition",
      description:
        "Read instantly on your phone, tablet, or computer.",
      price: 0,
      available: true,
    },

    hardCopy: {
      name: "Hard Copy",
      description:
        "Own the beautifully printed physical edition.",
      price: 0,
      available: true,
    },
  },

  currency: "NGN",
} as const;