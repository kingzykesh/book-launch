"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  BookOpenText,
  Feather,
  Quote,
} from "lucide-react";

const forewordParagraphs = [
  `It is a great privilege to commend this timely and spiritually enriching book, Foundations for Spiritual Growth. This work comes as a sincere call to every believer who desires a deeper walk with God and a more consistent Christian life. At a time when many are exposed to spiritual confusion, doctrinal instability, and distracted devotion, this book points us back to the essentials of the faith: purity of heart, personal intimacy with God, surrender to His will, and growth into the likeness of Christ.`,

  `The central burden of this book is both clear and necessary: a believer cannot grow healthily without the right foundation. The author carefully presents the believer’s journey as one that must begin with purity, because a holy life is the doorway to divine fellowship and spiritual strength. From there, the book moves into the secret place, where intimacy with God is formed through prayer, the Word, and fellowship with the Holy Spirit.`,

  `One of the most valuable strengths of this book is its balanced treatment of spiritual formation. It does not merely call for zeal but shows the reader how to sustain spiritual life through surrender, consecration, fasting, wisdom, forgiveness, and love. It also exposes the subtle dangers that hinder growth, such as condemnation, doubt, unforgiveness, distraction, and besetting sin.`,

  `This book reminds believers that spiritual maturity is not measured by age, position, or religious activity, but by Christlikeness, commitment, and consistent obedience. It challenges the reader to examine the state of the heart, pursue holiness without compromise, and live with a sincere desire to please God in all things.`,

  `I have had the privilege of knowing Jeremiah as a son in the faith and a young man with a sincere passion for God and spiritual growth. Over the years, I have witnessed his humility, teachability, and commitment to seeking God’s will. This book is a reflection of the burden God has placed upon his heart and his desire to see believers firmly established in their walk with Christ.`,

  `I therefore commend this book to pastors, ministers, students, young believers, and all who hunger for a more grounded and victorious Christian life. May the Lord use it to awaken fresh hunger, restore fading devotion, and establish many hearts in truth, holiness, and spiritual maturity. My prayer is that every reader will not only read these pages but also experience the grace to live them out.`,
] as const;

export default function Foreword() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="foreword"
      className="relative scroll-mt-24 overflow-hidden bg-[#260321] text-white"
    >
      <ForewordBackground />

      <div className="container-shell relative z-10 py-24 sm:py-32 lg:py-40">
        <motion.div
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
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#d7b56d]" />

            <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#f2dcac]">
              From the foreword
            </p>

            <span className="h-px w-10 bg-[#d7b56d]" />
          </div>

          <h2 className="mt-7 font-display text-[clamp(4rem,7vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
            A word before

            <span className="gold-gradient-text mt-2 block italic">
              the journey begins.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9">
            A thoughtful commendation of the book’s message,
            spiritual burden, and relevance to believers in
            this generation.
          </p>
        </motion.div>

        <motion.article
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.95,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] px-6 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:mt-18 sm:rounded-[2.75rem] sm:px-12 sm:py-14 lg:px-20 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -left-32 -top-32 size-80 rounded-full bg-[#8a217b]/30 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-28 size-80 rounded-full bg-[#d7b56d]/12 blur-[120px]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <span className="grid size-16 place-items-center rounded-full border border-[#d7b56d]/25 bg-[#d7b56d]/10 text-[#f2dcac]">
                <Quote size={28} strokeWidth={1.4} />
              </span>

              <p className="mt-8 font-display text-3xl font-medium italic leading-[1.18] text-white sm:text-4xl">
                “A believer cannot grow healthily without the
                right foundation.”
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#d7b56d]">
                  Foreword by
                </p>

                <h3 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
                  Dr. Samuel Ifeanyichukwu Okoro
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/35">
                  <Feather
                    size={15}
                    className="text-[#d7b56d]"
                  />

                  Spiritual leader and mentor
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6 text-base leading-8 text-white/58 sm:text-lg sm:leading-9">
                {forewordParagraphs
                  .slice(0, isExpanded ? forewordParagraphs.length : 2)
                  .map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.04,
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
              </div>

              <AnimatePresence>
                {!isExpanded && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="pointer-events-none relative -mt-28 h-32 bg-gradient-to-t from-[#32102d] via-[#32102d]/95 to-transparent"
                  />
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setIsExpanded((current) => !current)}
                aria-expanded={isExpanded}
                className="group mt-8 inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-6 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#d7b56d]/35 hover:bg-white/[0.1]"
              >
                <BookOpenText
                  size={17}
                  className="text-[#d7b56d]"
                />

                {isExpanded
                  ? "Show Less"
                  : "Read the Full Foreword"}

                <ArrowDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="relative mt-14 border-t border-white/10 pt-9 sm:mt-16">
            <p className="mx-auto max-w-4xl text-center font-display text-2xl font-medium italic leading-relaxed text-[#f2dcac] sm:text-3xl">
              “May the Lord use this work to awaken fresh
              hunger, restore fading devotion, and establish
              many hearts in truth, holiness, and spiritual
              maturity.”
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function ForewordBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute -left-44 top-20 size-[36rem] rounded-full bg-[#8a217b]/25 blur-[150px]" />

      <div className="absolute -right-40 bottom-[-8rem] size-[38rem] rounded-full bg-[#d7b56d]/10 blur-[160px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b56d]/40 to-transparent" />
    </div>
  );
}