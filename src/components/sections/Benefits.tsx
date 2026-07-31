"use client";

import {
  useRef,
  useState,
  type MouseEvent,
} from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  BookOpenCheck,
  Brain,
  Flame,
  HeartHandshake,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Understand Spiritual Maturity",
    description:
      "Gain a clear and practical understanding of what it means to grow beyond spiritual infancy into a stable, discerning, and responsible believer.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Build Strong Foundations",
    description:
      "Discover the convictions, biblical principles, and daily disciplines that sustain a healthy and enduring Christian life.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Deepen Your Walk With God",
    description:
      "Move beyond occasional spiritual experiences into a consistent, personal, and intentional relationship with God.",
    icon: Flame,
  },
  {
    number: "04",
    title: "Recognise Areas That Need Growth",
    description:
      "Reflect honestly on habits, attitudes, weaknesses, and beliefs that may be limiting your spiritual progress.",
    icon: BookOpenCheck,
  },
  {
    number: "05",
    title: "Develop Lasting Spiritual Discipline",
    description:
      "Strengthen your practice of prayer, Scripture, obedience, accountability, and other disciplines that support maturity.",
    icon: Sprout,
  },
  {
    number: "06",
    title: "Become Fruitful and Impactful",
    description:
      "Grow into a believer whose character reflects Christ and whose life positively influences families, communities, and future generations.",
    icon: HeartHandshake,
  },
] as const;

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-6%", "8%"],
  );

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative overflow-hidden bg-[#160112] text-white"
    >
      <motion.div
        aria-hidden="true"
        style={{
          y: backgroundY,
        }}
        className="pointer-events-none absolute inset-x-0 -top-[10%] h-[120%]"
      >
        <div className="absolute -left-40 top-[15%] size-[35rem] rounded-full bg-[#8a217b]/20 blur-[140px]" />

        <div className="absolute right-[-12rem] top-[5%] size-[34rem] rounded-full bg-[#d7b56d]/10 blur-[150px]" />

        <div className="absolute bottom-[-10rem] left-[35%] size-[32rem] rounded-full bg-[#590a4e]/30 blur-[150px]" />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 86%, transparent)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fcf8f3]/10 to-transparent" />

      <div className="container-shell relative z-10 py-28 sm:py-36 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:py-40">
        <div className="lg:relative">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
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
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#d7b56d]" />

                <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#f2dcac]">
                  What you will gain
                </p>
              </div>

              <h2 className="mt-7 max-w-xl font-display text-[clamp(3.6rem,5.7vw,6.6rem)] font-medium leading-[0.86] tracking-[-0.05em]">
                Growth that reaches
                <span className="gold-gradient-text mt-2 block italic">
                  beyond the final page.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
                Spiritual Maturity is designed not only to
                inform you, but to strengthen your walk with
                God and help you build a faith that remains
                firm through every season.
              </p>

              <div className="mt-10 hidden items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/35 lg:flex">
                <span className="grid size-9 place-items-center rounded-full border border-white/10 bg-white/[0.05]">
                  <ArrowDownRight
                    size={15}
                    className="text-[#d7b56d]"
                  />
                </span>

                Explore the outcomes
              </div>
            </motion.div>

            <div className="mt-14 hidden max-w-sm border-t border-white/10 pt-7 lg:block">
              <p className="font-display text-2xl leading-snug text-white/85">
                “Maturity is not measured only by what you
                know, but by what your life consistently
                reflects.”
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-5 lg:mt-0 lg:space-y-7">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.number}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="container-shell relative z-10 pb-28 sm:pb-36">
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
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
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] px-6 py-10 backdrop-blur-xl sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14"
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-16 size-56 rounded-full bg-[#d7b56d]/10 blur-3xl"
          />

          <div className="relative">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#d7b56d]">
              The transformation
            </p>

            <h3 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Read with an open heart.
              <span className="block italic text-[#f2dcac]">
                Leave with a stronger foundation.
              </span>
            </h3>
          </div>

          <a
            href="#inside-the-book"
            className="group relative mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#590a4e] transition duration-300 hover:-translate-y-1 hover:bg-[#fdf6e5] lg:mt-0"
          >
            See What Is Inside

            <ArrowDownRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  benefit: (typeof benefits)[number];
  index: number;
}

function BenefitCard({
  benefit,
  index,
}: BenefitCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    if (shouldReduceMotion || !cardRef.current) {
      return;
    }

    const bounds =
      cardRef.current.getBoundingClientRect();

    setSpotlight({
      x:
        ((event.clientX - bounds.left) /
          bounds.width) *
        100,
      y:
        ((event.clientY - bounds.top) /
          bounds.height) *
        100,
    });
  };

  const Icon = benefit.icon;

  return (
    <motion.article
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 48,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.22,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] px-5 py-6 backdrop-blur-lg transition duration-500 hover:-translate-y-1 hover:border-[#d7b56d]/30 hover:bg-white/[0.075] sm:px-7 sm:py-8 lg:rounded-[2rem] lg:px-9 lg:py-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            460px circle at ${spotlight.x}% ${spotlight.y}%,
            rgba(215, 181, 109, 0.15),
            transparent 42%
          )`,
        }}
      />

      <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex items-center justify-between sm:block">
          <span className="block font-display text-5xl leading-none text-[#d7b56d]/80 sm:text-6xl">
            {benefit.number}
          </span>

          <div className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-[#f2dcac] transition duration-500 group-hover:rotate-6 group-hover:border-[#d7b56d]/30 group-hover:bg-[#d7b56d]/10 sm:mt-7">
            <Icon size={20} strokeWidth={1.7} />
          </div>
        </div>

        <div className="flex-1 sm:pt-1">
          <h3 className="max-w-xl font-display text-3xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.7rem]">
            {benefit.title}
          </h3>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            {benefit.description}
          </p>

          <div className="mt-7 h-px w-full overflow-hidden bg-white/10">
            <div className="h-full w-0 bg-gradient-to-r from-[#d7b56d] to-[#c98cbe] transition-all duration-700 group-hover:w-full" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}