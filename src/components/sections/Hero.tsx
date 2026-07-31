"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import { bookConfig } from "@/config/book";

import InteractiveBook from "@/components/book/InteractiveBook";
import Countdown from "@/components/ui/Countdown";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="top"
      className="hero-background relative min-h-screen overflow-hidden text-white"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-noise pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute -left-28 top-24 size-[22rem] rounded-full bg-[#8a217b]/15 blur-[100px]" />

      <div className="pointer-events-none absolute -right-36 bottom-0 size-[30rem] rounded-full bg-[#d7b56d]/8 blur-[120px]" />

      <div className="container-shell relative z-10 grid min-h-screen items-center gap-8 pb-16 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-4 lg:pb-12 lg:pt-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
          className="relative z-20"
        >
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7b56d]/25 bg-[#d7b56d]/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.23em] text-[#f2dcac] backdrop-blur-lg"
          >
            <Sparkles size={14} />
            {bookConfig.eyebrow}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-balance font-display text-[clamp(4rem,8vw,7.7rem)] font-medium leading-[0.79] tracking-[-0.055em]"
          >
            <span className="block text-white">
              {bookConfig.headline.firstLine}
            </span>

            <span className="gold-gradient-text mt-2 block italic">
              {bookConfig.headline.emphasizedLine}
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#d7b56d]" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              By {bookConfig.author}
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-xl text-balance text-base leading-8 text-white/65 sm:text-lg"
          >
            {bookConfig.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#waitlist"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#590a4e] shadow-[0_18px_55px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#fdf6e5]"
            >
              Join the Early Reader List

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#book"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.065] px-7 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
            >
              <BookOpenText
                size={18}
                className="text-[#d7b56d]"
              />

              Explore the Book
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 border-t border-white/10 pt-6"
          >
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-white/55">
              <CalendarDays
                size={16}
                className="text-[#d7b56d]"
              />

             {bookConfig.launch.displayDate}
            </div>

           <Countdown targetDate={bookConfig.launch.date} />
          </motion.div>
        </motion.div>

        <div className="relative -mx-4 lg:mx-0">
          <InteractiveBook />
        </div>
      </div>

      <motion.a
        href="#book"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.6,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-white/35 xl:flex"
        aria-label="Scroll to explore the book"
      >
        Scroll to discover

        <span className="relative h-8 w-[1.15rem] rounded-full border border-white/20">
          <span className="scroll-indicator-dot absolute left-1/2 top-1.5 size-1 -translate-x-1/2 rounded-full bg-[#d7b56d]" />
        </span>

        <ArrowDown size={12} />
      </motion.a>
    </section>
  );
}