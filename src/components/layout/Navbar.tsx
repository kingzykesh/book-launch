"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

const navigation = [
  {
    label: "The Book",
    href: "#book",
  },
  {
    label: "Benefits",
    href: "#benefits",
  },
  {
    label: "Author",
    href: "#author",
  },
  {
    label: "Launch",
    href: "#launch",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -22,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
      >
        <nav
          className={`container-shell flex h-16 items-center justify-between rounded-full px-4 transition-all duration-500 md:h-[4.5rem] md:px-6 ${
            isScrolled
              ? "glass-border bg-[#160112]/75 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Return to homepage"
          >
            <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/10 text-[#f2dcac] backdrop-blur-md transition group-hover:rotate-6 group-hover:bg-white/15">
              <BookOpen size={18} strokeWidth={1.7} />
            </span>

            <span className="hidden sm:block">
              <span className="block font-display text-xl font-semibold leading-none text-white">
                Spiritual Maturity
              </span>

              <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/50">
                Foundation for Spiritual Growth
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#waitlist"
              className="group hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#590a4e] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#fdf6e5] md:flex"
            >
              Join the Waitlist

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md lg:hidden"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
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
            className="fixed inset-0 z-40 bg-[#160112]/96 px-5 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 18,
              }}
              transition={{
                delay: 0.08,
              }}
              className="flex h-full flex-col justify-between"
            >
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{
                      opacity: 0,
                      x: -18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-display text-4xl font-medium text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={20}
                      className="text-[#d7b56d]"
                    />
                  </motion.a>
                ))}
              </div>

              <a
                href="#waitlist"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-[#590a4e]"
              >
                Join the Waitlist
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}