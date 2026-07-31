import Script from "next/script";

import { bookConfig } from "@/config/book";
import {
  getAbsoluteUrl,
  siteConfig,
} from "@/config/site";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: bookConfig.subtitle,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-NG",
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: bookConfig.title,
  alternateName: `${bookConfig.title}: ${bookConfig.subtitle}`,
  headline: `${bookConfig.title}: ${bookConfig.subtitle}`,
  description: siteConfig.description,
  image: getAbsoluteUrl(bookConfig.cover.front),
  url: siteConfig.url,
  inLanguage: "en",
  bookFormat: [
    "https://schema.org/EBook",
    "https://schema.org/Hardcover",
  ],
  datePublished: "2026-08-02",
  author: {
    "@type": "Person",
    name: bookConfig.author,
    url: getAbsoluteUrl("/#author"),
  },
  contributor: {
    "@type": "Person",
    name: "Dr. Samuel Ifeanyichukwu Okoro",
    description: "Foreword writer",
  },
  publisher: {
    "@type": "Person",
    name: bookConfig.author,
  },
  genre: [
    "Christian Living",
    "Spiritual Growth",
    "Christian Discipleship",
  ],
  keywords: siteConfig.keywords.join(", "),
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: bookConfig.author,
  url: getAbsoluteUrl("/#author"),
  image: getAbsoluteUrl(
    "/images/author/jeremiah-austin.webp",
  ),
  description:
    "Christian author, teacher and servant leader committed to helping believers grow in spiritual maturity.",
  knowsAbout: [
    "Christian spiritual growth",
    "Biblical teaching",
    "Christian discipleship",
    "Servant leadership",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: bookConfig.title,
      item: getAbsoluteUrl("/#book"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Book Launch",
      item: getAbsoluteUrl("/#launch"),
    },
  ],
};

export default function StructuredData() {
  const schemas = [
    websiteSchema,
    bookSchema,
    authorSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}