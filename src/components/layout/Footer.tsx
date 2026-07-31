import {
  ArrowUpRight,
  BookOpenText,
} from "lucide-react";

import { bookConfig } from "@/config/book";

const footerLinks = [
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
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#10000d] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 bottom-[-15rem] size-[32rem] rounded-full bg-[#590a4e]/25 blur-[140px]" />

        <div className="absolute -right-32 top-[-15rem] size-[30rem] rounded-full bg-[#d7b56d]/10 blur-[140px]" />
      </div>

      <div className="container-shell relative z-10">
        <div className="flex flex-col gap-10 border-b border-white/10 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#"
            aria-label={`${bookConfig.title} homepage`}
            className="group inline-flex items-center gap-4"
          >
            <span className="grid size-11 place-items-center rounded-full border border-[#d7b56d]/25 bg-[#d7b56d]/10 text-[#f2dcac] transition duration-300 group-hover:rotate-6 group-hover:border-[#d7b56d]/45">
              <BookOpenText size={19} />
            </span>

            <span>
              <span className="block font-display text-2xl font-semibold leading-none text-white">
                {bookConfig.title}
              </span>

              <span className="mt-1.5 block text-[0.54rem] font-bold uppercase tracking-[0.22em] text-white/35">
                {bookConfig.subtitle}
              </span>
            </span>
          </a>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/45 transition duration-300 hover:text-[#f2dcac]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-white/30">
            © {currentYear} {bookConfig.author}. All rights
            reserved.
          </p>

          <a
            href="https://ezirimkingdom.com.ng/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 text-xs text-white/35 transition duration-300 hover:text-white"
          >
            <span>Designed and developed by</span>

            <span className="font-semibold text-[#d7b56d]">
              Ezirim Kingdom
            </span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#d7b56d]/35 to-transparent" />
    </footer>
  );
}