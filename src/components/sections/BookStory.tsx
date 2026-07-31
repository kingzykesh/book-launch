"use client";

import {
  useRef,
  type CSSProperties,
} from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowDown,
  BookMarked,
  Compass,
  FireExtinguisher,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import { bookConfig } from "@/config/book";

interface StoryChapter {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof Compass;
}

const storyChapters: StoryChapter[] = [
  {
    number: "01",
    eyebrow: "A BOOK FOR THIS MOMENT",
    title: "Practical & Actionable",
    description:
      "Move beyond theory with practical principles and reflections that can be applied to everyday Christian living.",
    icon: Compass,
  },
  {
    number: "02",
    eyebrow: "Spiritually Transformative",
    title: "Build a stronger and more enduring spiritual foundation.",
    description:
      "Develop habits, convictions, and disciplines that nurture lasting spiritual growth and deeper intimacy with God.",
    icon: Lightbulb,
  },
  {
    number: "03",
    eyebrow: "For Every Believer",
    title: "The final page is not the end. It is a new beginning.",
    description:
      "Whether you're a new believer, a church leader, or someone longing for a deeper walk with Christ, this book offers guidance for every stage of your spiritual journey.",
    icon: BookMarked,
  },
];

export default function BookStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const bookRotateY = useTransform(
    smoothProgress,
    [0, 0.44, 1],
    [-28, 12, 152],
  );

  const bookRotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-6, 4, -5],
  );

  const bookTranslateY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [16, -24, 10],
  );

  const bookScale = useTransform(
    smoothProgress,
    [0, 0.48, 1],
    [0.9, 1.03, 0.93],
  );

  const glowScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [0.82, 1.15, 0.88],
  );

  const glowOpacity = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [0.35, 0.68, 0.4],
  );

  const backgroundX = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "-15%"],
  );

  const progressWidth = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <section
      ref={sectionRef}
      id="book"
      className="relative scroll-mt-24 bg-[#fcf8f3] text-[#260321]"
    >
      <SectionTransition />

      <div className="relative lg:h-[340vh]">
        <div className="relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
          <motion.div
            aria-hidden="true"
            style={{
              x: shouldReduceMotion ? 0 : backgroundX,
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[130%]"
          >
            <div className="absolute -left-[15%] top-[8%] size-[32rem] rounded-full bg-[#c98cbe]/20 blur-[120px]" />

            <div className="absolute right-[10%] top-[4%] size-[26rem] rounded-full bg-[#d7b56d]/15 blur-[120px]" />

            <div className="absolute bottom-[-12rem] left-[34%] size-[38rem] rounded-full bg-[#590a4e]/10 blur-[140px]" />
          </motion.div>

          <BackgroundGrid />

          <div className="container-shell relative z-10 py-16 sm:py-20 lg:grid lg:h-full lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-0">
            <div className="relative">
              <div className="mb-14 lg:hidden">
                <SectionIntroduction />
              </div>

              <BookVisual
                bookRotateY={bookRotateY}
                bookRotateX={bookRotateX}
                bookTranslateY={bookTranslateY}
                bookScale={bookScale}
                glowScale={glowScale}
                glowOpacity={glowOpacity}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>

            <div className="hidden h-full lg:block">
              <DesktopStoryContent
                progressWidth={progressWidth}
                scrollYProgress={smoothProgress}
              />
            </div>

            <div className="space-y-24 pb-28 pt-24 lg:hidden">
              {storyChapters.map((chapter, index) => (
                <MobileStoryChapter
                  key={chapter.number}
                  chapter={chapter}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#fcf8f3] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

function SectionTransition() {
  return (
    <div
      aria-hidden="true"
      className="relative h-24 overflow-hidden bg-[#fcf8f3] sm:h-32 lg:h-36"
    >
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#260321]/10 via-[#590a4e]/5 to-transparent" />

      <div className="absolute left-1/2 top-0 h-px w-[min(90%,72rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d7b56d]/55 to-transparent" />

      <div className="absolute left-[15%] top-8 size-32 rounded-full bg-[#c98cbe]/10 blur-3xl" />

      <div className="absolute right-[12%] top-5 size-36 rounded-full bg-[#d7b56d]/10 blur-3xl" />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.28]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(89,10,78,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(89,10,78,0.07) 1px, transparent 1px)",
        backgroundSize: "76px 76px",
        maskImage:
          "linear-gradient(to right, black, transparent 68%)",
        WebkitMaskImage:
          "linear-gradient(to right, black, transparent 68%)",
      }}
    />
  );
}

function SectionIntroduction() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-[#d7b56d]" />

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a217b]">
          Discover the book
        </p>
      </div>

      <h2 className="max-w-[47rem] font-display text-[clamp(3.5rem,5.7vw,6.2rem)] font-semibold leading-[0.88] tracking-[-0.05em] text-[#260321]">
        More than a book.

        <span className="mt-2 block italic text-[#590a4e]">
          A Guide to Spiritual Growth.
        </span>
      </h2>

      <p className="mt-8 max-w-[39rem] text-base leading-8 text-[#746a72] xl:text-lg xl:leading-9">
        Every believer desires to grow in their walk with God, yet spiritual maturity is not achieved by good intentions alone. It is cultivated through a life built on biblical truth, intentional discipleship, and consistent spiritual discipline.
      </p>
    </div>
  );
}

interface BookVisualProps {
  bookRotateY: MotionValue<number>;
  bookRotateX: MotionValue<number>;
  bookTranslateY: MotionValue<number>;
  bookScale: MotionValue<number>;
  glowScale: MotionValue<number>;
  glowOpacity: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

function BookVisual({
  bookRotateY,
  bookRotateX,
  bookTranslateY,
  bookScale,
  glowScale,
  glowOpacity,
  shouldReduceMotion,
}: BookVisualProps) {
  return (
    <div className="relative mx-auto flex min-h-[31rem] items-center justify-center sm:min-h-[38rem] lg:min-h-0">
      <motion.div
        aria-hidden="true"
        style={{
          scale: shouldReduceMotion ? 1 : glowScale,
          opacity: shouldReduceMotion
            ? 0.48
            : glowOpacity,
        }}
        className="absolute left-1/2 top-1/2 h-[72%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,181,109,0.5)_0%,rgba(201,140,190,0.26)_38%,transparent_72%)] blur-2xl"
      />

      <div
        className="relative h-[27rem] w-[19rem] sm:h-[34rem] sm:w-[24rem] lg:h-[35rem] lg:w-[24.6rem]"
        style={{
          perspective: "1800px",
        }}
      >
        <motion.div
          style={{
            rotateY: shouldReduceMotion
              ? -22
              : bookRotateY,
            rotateX: shouldReduceMotion
              ? -5
              : bookRotateX,
            y: shouldReduceMotion
              ? 0
              : bookTranslateY,
            scale: shouldReduceMotion
              ? 1
              : bookScale,
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0"
        >
          <BookModel />
        </motion.div>

        <div className="absolute -bottom-12 left-1/2 h-10 w-[75%] -translate-x-1/2 rounded-[100%] bg-[#260321]/25 blur-2xl" />
      </div>

      <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-[#590a4e]/10 bg-white/65 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#590a4e]/55 shadow-sm backdrop-blur-xl sm:bottom-0 lg:bottom-7">
        <ArrowDown size={13} />
        Scroll to turn the story
      </div>
    </div>
  );
}

interface DesktopStoryContentProps {
  progressWidth: MotionValue<string>;
  scrollYProgress: MotionValue<number>;
}

function DesktopStoryContent({
  progressWidth,
  scrollYProgress,
}: DesktopStoryContentProps) {
  return (
    <div className="relative flex h-full items-center">
      <div className="w-full">
        <SectionIntroduction />

        <div className="relative mt-6 min-h-[18rem] lg:min-h-[16rem]">
          {storyChapters.map((chapter, index) => (
            <DesktopStoryChapter
              key={chapter.number}
              chapter={chapter}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-5">
          <div className="relative h-1 w-44 overflow-hidden rounded-full bg-[#590a4e]/10">
            <motion.div
              style={{
                width: progressWidth,
              }}
              className="absolute inset-y-0 left-0 rounded-full bg-[#590a4e]"
            />
          </div>

          <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#590a4e]/45">
            Keep scrolling
          </span>
        </div>
      </div>
    </div>
  );
}

interface DesktopStoryChapterProps {
  chapter: StoryChapter;
  index: number;
  scrollYProgress: MotionValue<number>;
}

function DesktopStoryChapter({
  chapter,
  index,
  scrollYProgress,
}: DesktopStoryChapterProps) {
  const animationRanges = [
    {
      input: [0, 0.08, 0.27, 0.38],
      opacity: [1, 1, 1, 0],
      y: [0, 0, 0, -28],
    },
    {
      input: [0.24, 0.36, 0.59, 0.72],
      opacity: [0, 1, 1, 0],
      y: [30, 0, 0, -28],
    },
    {
      input: [0.6, 0.73, 0.94, 1],
      opacity: [0, 1, 1, 1],
      y: [30, 0, 0, 0],
    },
  ];

  const range = animationRanges[index];

  const opacity = useTransform(
    scrollYProgress,
    range.input,
    range.opacity,
  );

  const y = useTransform(
    scrollYProgress,
    range.input,
    range.y,
  );

  const Icon = chapter.icon;

  return (
    <motion.article
      style={{
        opacity,
        y,
        pointerEvents: index === 0 ? "auto" : "none",
      }}
      className="absolute inset-x-0 top-0"
    >
      <div className="flex items-start gap-6">
        <span className="min-w-[4.2rem] font-display text-6xl font-medium leading-none text-[#d7b56d]/75">
          {chapter.number}
        </span>

        <div className="pt-1">
          <div className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#8a217b]">
            <Icon size={15} />
            {chapter.eyebrow}
          </div>

          <h3 className="mt-6 max-w-[43rem] font-display text-[clamp(2.7rem,3.7vw,4.15rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#260321]">
            {chapter.title}
          </h3>

          <p className="mt-7 max-w-[38rem] text-base leading-8 text-[#746a72]">
            {chapter.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

interface MobileStoryChapterProps {
  chapter: StoryChapter;
  index: number;
}

function MobileStoryChapter({
  chapter,
  index,
}: MobileStoryChapterProps) {
  const Icon = chapter.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t border-[#590a4e]/10 pt-8"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-5xl text-[#d7b56d]">
          {chapter.number}
        </span>

        <span className="grid size-11 place-items-center rounded-full bg-[#590a4e] text-white shadow-[0_10px_30px_rgba(89,10,78,0.2)]">
          <Icon size={18} />
        </span>
      </div>

      <p className="mt-7 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#8a217b]">
        {chapter.eyebrow}
      </p>

      <h3 className="mt-4 font-display text-4xl font-semibold leading-[0.96] tracking-[-0.035em] text-[#260321] sm:text-5xl">
        {chapter.title}
      </h3>

      <p className="mt-6 text-base leading-8 text-[#746a72]">
        {chapter.description}
      </p>
    </motion.article>
  );
}

function BookModel() {
  const depth = 44;

  const surfaceStyle: CSSProperties = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      className="relative h-full w-full"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Front cover */}
      <div
        className="absolute inset-0 overflow-hidden rounded-l-[0.3rem] rounded-r-xl bg-[#590a4e] shadow-[0_38px_100px_rgba(38,3,33,0.38)]"
        style={{
          ...surfaceStyle,
          transform: `translateZ(${depth / 2}px)`,
        }}
      >
        <img
          src={bookConfig.cover.front}
          alt={`Front cover of ${bookConfig.title}`}
          draggable={false}
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/10" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/35 to-transparent" />
      </div>

      {/* Back cover */}
      <div
        className="absolute inset-0 overflow-hidden rounded-l-xl rounded-r-[0.3rem] bg-[#3c0635]"
        style={{
          ...surfaceStyle,
          transform: `rotateY(180deg) translateZ(${depth / 2}px)`,
        }}
      >
        <img
          src={bookConfig.cover.back}
          alt={`Back cover of ${bookConfig.title}`}
          draggable={false}
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-white/10" />
      </div>

      {/* Spine */}
      <div
        className="absolute left-0 top-0 h-full overflow-hidden bg-[#3a0533]"
        style={{
          ...surfaceStyle,
          width: `${depth}px`,
          transform: `rotateY(-90deg) translateZ(${depth / 2}px)`,
          transformOrigin: "left center",
        }}
      >
        <img
          src={bookConfig.cover.spine}
          alt={`Spine of ${bookConfig.title}`}
          draggable={false}
          className="h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-white/10" />
      </div>

      {/* Page edge */}
      <div
        className="absolute right-0 top-[1.6%] h-[96.8%]"
        style={{
          ...surfaceStyle,
          width: `${depth}px`,
          transform: `rotateY(90deg) translateZ(${depth / 2}px)`,
          transformOrigin: "right center",
          backgroundColor: "#efe6d7",
          backgroundImage:
            "repeating-linear-gradient(to bottom, #faf5eb 0px, #faf5eb 2px, #d9cfbe 3px)",
        }}
      >
        <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/15 to-transparent" />
      </div>

      {/* Top pages */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          ...surfaceStyle,
          height: `${depth}px`,
          transform: `rotateX(90deg) translateZ(${depth / 2}px)`,
          transformOrigin: "top center",
          backgroundColor: "#efe5d3",
          backgroundImage:
            "repeating-linear-gradient(to right, #faf5eb 0px, #faf5eb 3px, #d8cdbc 4px)",
        }}
      />

      {/* Bottom pages */}
      <div
        className="absolute bottom-0 left-0 w-full bg-[#d8cbb8]"
        style={{
          ...surfaceStyle,
          height: `${depth}px`,
          transform: `rotateX(-90deg) translateZ(${depth / 2}px)`,
          transformOrigin: "bottom center",
        }}
      />

      {/* Bookmark */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-2.8rem] right-[18%] h-16 w-4 bg-[#d7b56d] shadow-md"
        style={{
          transform: `translateZ(${depth / 2 - 3}px)`,
        }}
      >
        <div className="absolute -bottom-1 left-0 size-3 rotate-45 bg-[#d7b56d]" />
      </div>
    </div>
  );
}