"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Flame,
  Sparkles,
} from "lucide-react";

import { bookConfig } from "@/config/book";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const isLaunchLive =
    bookConfig.launch.status === "live";

  const primaryHref = isLaunchLive
    ? "#purchase"
    : "#waitlist";

  const primaryLabel = isLaunchLive
    ? "Order Your Copy"
    : "Join the Waitlist";

  return (
    <section className="relative overflow-hidden bg-[#fcf8f3] px-4 py-20 text-[#260321] sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-10 size-[34rem] rounded-full bg-[#c98cbe]/20 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 size-[38rem] rounded-full bg-[#d7b56d]/20 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(89,10,78,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(89,10,78,0.045) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        />
      </div>

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 40,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2.4rem] border border-[#590a4e]/10 bg-[#260321] shadow-[0_40px_120px_rgba(38,3,33,0.2)] sm:rounded-[3rem]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-28 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-[#8a217b]/35 blur-[120px]" />

          <div className="absolute -right-36 -top-36 size-[34rem] rounded-full bg-[#d7b56d]/15 blur-[130px]" />

          <div className="absolute bottom-[-18rem] left-[40%] size-[38rem] rounded-full bg-[#590a4e]/35 blur-[150px]" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative grid min-h-[42rem] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-24 xl:px-24">
          <div>
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -24,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#d7b56d]/25 bg-[#d7b56d]/10 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#f2dcac] backdrop-blur-xl"
            >
              <Flame size={14} />

              Your journey continues
            </motion.div>

            <h2 className="mt-8 max-w-4xl font-display text-[clamp(4rem,7vw,7.8rem)] font-medium leading-[0.84] tracking-[-0.055em] text-white">
              Your next season of growth begins with

              <span className="gold-gradient-text mt-3 block italic">
                one decision.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9">
              Take a deliberate step toward stronger
              foundations, deeper conviction, and a life that
              consistently reflects spiritual maturity.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={primaryHref}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#590a4e] shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#fdf6e5]"
              >
                {primaryLabel}

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#book"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.055] px-7 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d7b56d]/35 hover:bg-white/[0.09]"
              >
                <BookOpen
                  size={18}
                  className="text-[#d7b56d]"
                />

                Revisit the Book
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              <div>
                <p className="text-[0.57rem] font-bold uppercase tracking-[0.22em] text-white/30">
                  Written by
                </p>

                <p className="mt-2 font-display text-xl text-white">
                  {bookConfig.author}
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div>
                <p className="text-[0.57rem] font-bold uppercase tracking-[0.22em] text-white/30">
                  Launch date
                </p>

                <p className="mt-2 font-display text-xl text-white">
                  {bookConfig.launch.displayDate}
                </p>
              </div>
            </div>
          </div>

          <FinalBookVisual />
        </div>
      </motion.div>
    </section>
  );
}

function FinalBookVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: 50,
              rotate: 4,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto flex min-h-[28rem] w-full max-w-[30rem] items-center justify-center lg:min-h-[34rem]"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7b56d]/15 blur-[80px] sm:size-[27rem]"
      />

      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -13, 0],
                rotate: [-2, 1.5, -2],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-[68%] max-w-[20rem]"
      >
        <div className="absolute -inset-7 rounded-[2rem] bg-[#d7b56d]/10 blur-2xl" />

        <img
          src={bookConfig.cover.front}
          alt={`${bookConfig.title} by ${bookConfig.author}`}
          draggable={false}
          className="relative w-full rounded-[0.4rem] shadow-[30px_35px_80px_rgba(0,0,0,0.55)]"
        />

        <div className="absolute -bottom-10 left-1/2 h-14 w-[86%] -translate-x-1/2 rounded-full bg-black/35 blur-2xl" />
      </motion.div>

      <div className="absolute right-0 top-[18%] hidden rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:block">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#d7b56d]">
          A guide for
        </p>

        <p className="mt-1 font-display text-xl">
          Lasting growth
        </p>
      </div>
    </motion.div>
  );
}