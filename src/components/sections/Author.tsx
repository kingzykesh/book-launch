"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Crown,
  HeartHandshake,
  Quote,
  Sparkles,
} from "lucide-react";

const authorHighlights = [
  {
    title: "Sound Teaching",
    description:
      "Communicating biblical truth with clarity, depth, and practical relevance.",
    icon: BookOpen,
  },
  {
    title: "Servant Leadership",
    description:
      "Leading with humility, compassion, integrity, and a genuine commitment to people.",
    icon: HeartHandshake,
  },
  {
    title: "Godly Vision",
    description:
      "Inspiring hunger for God, purity, wisdom, and purposeful living among men.",
    icon: Crown,
  },
] as const;

export default function Author() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="author"
      className="relative scroll-mt-24 overflow-hidden bg-[#fcf8f3] text-[#260321]"
    >
      <AuthorTransition />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-32 size-[32rem] rounded-full bg-[#c98cbe]/15 blur-[130px]" />

        <div className="absolute -right-40 bottom-20 size-[35rem] rounded-full bg-[#d7b56d]/15 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(89,10,78,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(89,10,78,0.055) 1px, transparent 1px)",
            backgroundSize: "78px 78px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}
        />
      </div>

      <div className="container-shell relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -50,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <AuthorPortrait />
          </motion.div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 38,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#d7b56d]" />

              <p className="text-[0.65rem] font-bold uppercase tracking-[0.26em] text-[#8a217b]">
                About the author
              </p>
            </div>

            <h2 className="mt-7 max-w-3xl font-display text-[clamp(4rem,6.2vw,7rem)] font-semibold leading-[0.84] tracking-[-0.055em] text-[#260321]">
              Jeremiah I.
              <span className="mt-2 block italic text-[#590a4e]">
                Austin
              </span>
            </h2>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#590a4e]/10 bg-white/70 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-[#590a4e] shadow-sm backdrop-blur-md">
                Christian Leader
              </span>

              <span className="rounded-full border border-[#590a4e]/10 bg-white/70 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-[#590a4e] shadow-sm backdrop-blur-md">
                Teacher
              </span>

              <span className="rounded-full border border-[#590a4e]/10 bg-white/70 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-[#590a4e] shadow-sm backdrop-blur-md">
                Servant Leader
              </span>
            </div>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-[#675d65] sm:text-lg sm:leading-9">
              <p>
                Jeremiah I. Austin is a Christian leader who
                has made selfless sacrifices to see a deeper
                hunger for God and a sincere desire for purity
                rise among men.
              </p>

              <p>
                He continues to grow in wisdom and in the
                principles of servant leadership. He is not
                only spiritually grounded, but also committed
                to intellectual excellence and to making God
                visible through both his career and his divine
                assignment.
              </p>

              <p>
                A man of godly vision, Jeremiah believes that
                the surest guide to life and godliness is the
                Holy Scriptures. Through sound teaching,
                strategic insight, compassionate service, and
                unwavering integrity, his ministry and
                leadership have brought transformation to many
                lives.
              </p>

              <p>
                He attributes every insight, opportunity, and
                accomplishment to the sovereign grace of God,
                whom he seeks to honour in every endeavour.
              </p>
            </div>

            <motion.blockquote
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-[#590a4e]/10 bg-white/65 px-6 py-7 shadow-[0_20px_70px_rgba(89,10,78,0.08)] backdrop-blur-xl sm:px-8 sm:py-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-12 size-40 rounded-full bg-[#d7b56d]/15 blur-3xl"
              />

              <Quote
                size={30}
                strokeWidth={1.3}
                className="relative text-[#d7b56d]"
              />

              <p className="relative mt-4 max-w-2xl font-display text-2xl font-medium italic leading-snug text-[#390332] sm:text-3xl">
                “The surest guide to life and godliness is
                found in the truth of the Holy Scriptures.”
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        <AuthorHighlights />
      </div>
    </section>
  );
}

function AuthorTransition() {
  return (
    <div
      aria-hidden="true"
      className="relative h-24 overflow-hidden bg-[#fcf8f3] sm:h-32"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#160112] via-[#590a4e]/20 to-transparent" />

      <div className="absolute left-1/2 top-0 h-px w-[min(90%,74rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d7b56d]/60 to-transparent" />
    </div>
  );
}

function AuthorPortrait() {
  return (
    <div className="relative mx-auto max-w-[34rem] lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#c98cbe]/25 via-transparent to-[#d7b56d]/25 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#590a4e]/10 bg-[#eee2e9] p-3 shadow-[0_35px_100px_rgba(89,10,78,0.16)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e7d7e1]">
          <img
            src="/images/author/jeremiah-austin.webp"
            alt="Jeremiah I. Austin, author of Spiritual Maturity"
            draggable={false}
            className="h-full w-full object-cover object-top"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#260321]/75 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.25em] text-[#f2dcac]">
                  Author of
                </p>

                <p className="mt-2 font-display text-3xl font-semibold leading-none text-white sm:text-4xl">
                  Spiritual Maturity
                </p>
              </div>

              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-[#f2dcac] backdrop-blur-md">
                <Sparkles size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-5 top-[16%] hidden rounded-2xl border border-[#590a4e]/10 bg-white/80 px-5 py-4 shadow-[0_20px_50px_rgba(89,10,78,0.12)] backdrop-blur-xl sm:block lg:-right-10">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#8a217b]">
          Driven by
        </p>

        <p className="mt-1 font-display text-2xl font-semibold text-[#260321]">
          Godly vision
        </p>
      </div>

      <div className="absolute -bottom-7 left-7 hidden rounded-2xl border border-[#590a4e]/10 bg-[#590a4e] px-6 py-5 text-white shadow-[0_20px_55px_rgba(89,10,78,0.24)] sm:block">
        <p className="font-display text-2xl font-medium italic">
          Grace. Truth. Service.
        </p>
      </div>
    </div>
  );
}

function AuthorHighlights() {
  return (
    <div className="mt-24 border-t border-[#590a4e]/10 pt-12 sm:mt-32 sm:pt-16">
      <div className="grid gap-5 md:grid-cols-3">
        {authorHighlights.map((highlight, index) => {
          const Icon = highlight.icon;

          return (
            <motion.article
              key={highlight.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#590a4e]/10 bg-white/55 p-6 shadow-[0_15px_50px_rgba(89,10,78,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#d7b56d]/45 hover:bg-white/80 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-32 rounded-full bg-[#d7b56d]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between gap-6">
                <span className="grid size-12 place-items-center rounded-full bg-[#590a4e] text-[#f2dcac] shadow-[0_12px_30px_rgba(89,10,78,0.18)]">
                  <Icon size={20} strokeWidth={1.7} />
                </span>

                <span className="font-display text-3xl text-[#d7b56d]/70">
                  0{index + 1}
                </span>
              </div>

              <h3 className="relative mt-8 font-display text-3xl font-semibold tracking-[-0.03em] text-[#260321]">
                {highlight.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-[#746a72] sm:text-base sm:leading-8">
                {highlight.description}
              </p>

              <div className="relative mt-8 flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.19em] text-[#8a217b]">
                Learn through his work

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}