import Head from "next/head";

import {
  getAbsoluteUrl,
  siteConfig,
} from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export default function SEO({
  title = siteConfig.title,
  description = siteConfig.description,
  canonicalPath = "/",
  image = siteConfig.ogImage,
  imageAlt = "Spiritual Maturity by Jeremiah I. Austin",
  type = "website",
  noIndex = false,
}: SEOProps) {
  const canonicalUrl =
    getAbsoluteUrl(canonicalPath);

  const socialImageUrl = image.startsWith("http")
    ? image
    : getAbsoluteUrl(image);

  const pageTitle =
    title === siteConfig.title
      ? title
      : `${title} | ${siteConfig.name}`;

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={siteConfig.keywords.join(", ")}
      />

      <meta
        name="author"
        content={siteConfig.author.name}
      />

      <meta
        name="creator"
        content={siteConfig.author.name}
      />

      <meta
        name="publisher"
        content={siteConfig.author.name}
      />

      <meta
        name="application-name"
        content={siteConfig.name}
      />

      <meta
        name="theme-color"
        content={siteConfig.themeColor}
      />

      <meta
        name="color-scheme"
        content="light"
      />

      <meta
        name="format-detection"
        content="telephone=no"
      />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta
        name="googlebot"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <link
        rel="alternate"
        hrefLang="en-ng"
        href={canonicalUrl}
      />

      <link
        rel="alternate"
        hrefLang="x-default"
        href={canonicalUrl}
      />

      {/* Open Graph: WhatsApp, Facebook and LinkedIn */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={siteConfig.name}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:locale"
        content={siteConfig.locale}
      />

      <meta
        property="og:image"
        content={socialImageUrl}
      />

      <meta
        property="og:image:secure_url"
        content={socialImageUrl}
      />

      <meta
        property="og:image:type"
        content="image/jpeg"
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content={imageAlt}
      />

      {/* X / Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={socialImageUrl}
      />

      <meta
        name="twitter:image:alt"
        content={imageAlt}
      />
    </Head>
  );
}