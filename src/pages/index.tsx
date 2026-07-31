import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";

import Hero from "@/components/sections/Hero";
import BookStory from "@/components/sections/BookStory";
import Benefits from "@/components/sections/Benefits";
import Author from "@/components/sections/Author";
import Recommendation from "@/components/sections/Recommendation";
import Foreword from "@/components/sections/Foreword";
import Launch from "@/components/sections/Launch";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="Spiritual Maturity — Foundations for Spiritual Growth"
        description="Discover Spiritual Maturity by Jeremiah I. Austin—a practical, biblically grounded guide for building strong spiritual foundations, deepening your walk with God, and growing into lasting Christian maturity."
        canonicalPath="/"
        image="/images/seo/spiritual-maturity-og.jpg"
        imageAlt="Spiritual Maturity: Foundations for Spiritual Growth by Jeremiah I. Austin"
        type="website"
      />

      <StructuredData />

      <Navbar />

      <main>
        <Hero />
        <BookStory />
        <Benefits />
        <Author />
        <Recommendation />
        <Foreword />
        <Launch />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}