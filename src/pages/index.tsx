import { bookConfig } from "@/config/book";
import { siteConfig } from "@/config/site";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BookStory from "@/components/sections/BookStory";
import Benefits from "@/components/sections/Benefits";
import Author from "@/components/sections/Author";
import Launch from "@/components/sections/Launch";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",

    name: bookConfig.title,

    author: {
      "@type": "Person",
      name: bookConfig.author,
    },

    image: `${siteConfig.url}${bookConfig.cover.front}`,

    description: bookConfig.description,

    inLanguage: "en",

    datePublished: "2026-08-02",

    bookFormat: [
      "https://schema.org/EBook",
      "https://schema.org/Hardcover",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookSchema),
        }}
      />

      <Navbar />

      <main>
        <Hero />

        <BookStory />
        <Benefits />
         <Author />
          <Launch />
          <FinalCTA />
      </main>
      <Footer />
    </>
  );
}