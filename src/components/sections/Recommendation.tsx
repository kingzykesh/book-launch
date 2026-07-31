"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpenText,
  Pen,
  Quote,
  Sparkles,
} from "lucide-react";

const recommendation = {
  title: "An essential companion for every believer.",

  body:
    "Spiritual Maturity combines sound biblical teaching with practical application, making it a valuable guide for new believers and mature Christians alike. It is a resource that will strengthen faith, deepen devotion, and inspire a lifetime of faithful Christian living.",

  name: "Dr. Favour Samuel-Okoro",

  designation: "Early Reader",
} as const;

export default function Recommendation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="recommendation"
      className="relative scroll-mt-24 overflow-hidden bg-[#fcf8f3] text-[#260321]"
    >
      <RecommendationBackground />

      <div className="container-shell relative z-10 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#d7b56d]" />

            <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#8a217b]">
              Early endorsement
            </p>

            <span className="h-px w-10 bg-[#d7b56d]" />
          </div>

          <h2 className="mt-7 font-display text-[clamp(3.8rem,6.8vw,7rem)] font-medium leading-[0.88] tracking-[-0.05em] text-[#260321]">
            Words that affirm

            <span className="mt-2 block italic text-[#590a4e]">
              the journey.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#736971] sm:text-lg sm:leading-9">
            A reflection from an early reader encouraged by
            the message and spiritual value of the book.
          </p>
        </motion.div>

        <motion.article
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 45,
                  scale: 0.98,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.95,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-[#590a4e]/10 bg-white/75 px-6 py-10 shadow-[0_35px_100px_rgba(89,10,78,0.1)] backdrop-blur-xl sm:mt-18 sm:rounded-[2.75rem] sm:px-12 sm:py-14 lg:px-20 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -left-28 -top-28 size-72 rounded-full bg-[#c98cbe]/20 blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-24 size-80 rounded-full bg-[#d7b56d]/20 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b56d]/75 to-transparent"
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-5">
              <span className="grid size-14 place-items-center rounded-full border border-[#590a4e]/10 bg-[#590a4e] text-[#f2dcac] shadow-[0_15px_40px_rgba(89,10,78,0.18)] sm:size-16">
                <Quote
                  size={26}
                  strokeWidth={1.5}
                />
              </span>

              <div className="hidden items-center gap-2 rounded-full border border-[#590a4e]/10 bg-[#fcf8f3]/80 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#8a217b] sm:flex">
                <Pen size={13} />

                Recommended reading
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">
              <h3 className="font-display text-3xl font-medium italic leading-[1.05] tracking-[-0.035em] text-[#590a4e] sm:text-4xl lg:text-5xl">
                “{recommendation.title}”
              </h3>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#675d65] sm:text-lg sm:leading-9 lg:text-xl lg:leading-10">
                {recommendation.body}
              </p>

              <div className="mx-auto mt-10 h-px w-16 bg-[#d7b56d]" />

              <div className="mt-7">
                <p className="font-display text-2xl font-semibold text-[#260321] sm:text-3xl">
                  {recommendation.name}
                </p>

                <div className="mt-3 flex items-center justify-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#8a217b]">
                  <BookOpenText size={14} />

                  {recommendation.designation}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function RecommendationBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute -left-48 top-20 size-[36rem] rounded-full bg-[#c98cbe]/15 blur-[150px]" />

      <div className="absolute -right-48 bottom-0 size-[38rem] rounded-full bg-[#d7b56d]/15 blur-[160px]" />

      <div
        className="absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(89,10,78,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(89,10,78,0.045) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#590a4e]/15 to-transparent" />
    </div>
  );
}