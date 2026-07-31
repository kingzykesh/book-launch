"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  LoaderCircle,
  LockKeyhole,
  Mail,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Flame,
  UserRound,
  FlameIcon,
} from "lucide-react";

import { bookConfig } from "@/config/book";
import { siteConfig } from "@/config/site";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  submit?: string;
}

const initialFormData: WaitlistFormData = {
  fullName: "",
  email: "",
  phone: "",
};

const waitlistBenefits = [
  "Receive immediate launch notification",
  "Get official purchase and access details",
  "Be among the first readers",
  "Receive important book updates",
] as const;

function calculateCountdown(
  targetDate: string,
): CountdownState {
  const targetTime = new Date(targetDate).getTime();
  const difference = targetTime - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  return {
    days: Math.floor(
      difference / (1000 * 60 * 60 * 24),
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),

    seconds: Math.floor(
      (difference / 1000) % 60,
    ),

    isComplete: false,
  };
}

export default function Launch() {
  const shouldReduceMotion = useReducedMotion();

  const initialCountdown = useMemo(
    () => calculateCountdown(bookConfig.launch.date),
    [],
  );

  const [countdown, setCountdown] =
    useState<CountdownState>(initialCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(
        calculateCountdown(bookConfig.launch.date),
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const isLaunchLive =
    bookConfig.launch.status === "live" ||
    countdown.isComplete;

  return (
    <section
      id="launch"
      className="relative scroll-mt-24 overflow-hidden bg-[#160112] text-white"
    >
      <LaunchBackground />

      <div className="container-shell relative z-10 py-28 sm:py-36 lg:py-44">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
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
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b56d]/25 bg-[#d7b56d]/10 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#f2dcac] backdrop-blur-lg">
            <FlameIcon size={14} />

            {isLaunchLive
              ? "The book is now available"
              : "The official book launch"}
          </div>

          <h2 className="mt-8 font-display text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.055em]">
            A new chapter begins

            <span className="gold-gradient-text mt-3 block italic">
              {bookConfig.launch.displayDate}.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
            {isLaunchLive
              ? `Spiritual Maturity is now available. Select your preferred format and begin your journey toward stronger spiritual foundations.`
              : `Join the launch list and be among the first to receive official access to ${bookConfig.title}: ${bookConfig.subtitle}.`}
          </p>
        </motion.div>

        <div className="mt-16 lg:mt-20">
          <LaunchCountdown
            countdown={countdown}
            isLaunchLive={isLaunchLive}
          />
        </div>

        <div className="mt-16 grid items-start gap-10 lg:mt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <LaunchInformation
            isLaunchLive={isLaunchLive}
          />

          {isLaunchLive ? (
            <PurchasePanel />
          ) : (
            <WaitlistPanel />
          )}
        </div>

        <BookFormats />
      </div>
    </section>
  );
}

function LaunchBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-44 top-[8%] size-[38rem] rounded-full bg-[#8a217b]/25 blur-[150px]" />

        <div className="absolute -right-40 top-[2%] size-[36rem] rounded-full bg-[#d7b56d]/10 blur-[150px]" />

        <div className="absolute bottom-[-15rem] left-[28%] size-[42rem] rounded-full bg-[#590a4e]/35 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 font-display text-[clamp(10rem,28vw,30rem)] font-semibold leading-none text-white/[0.018]"
      >
        02
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b56d]/50 to-transparent" />
    </>
  );
}

interface LaunchCountdownProps {
  countdown: CountdownState;
  isLaunchLive: boolean;
}

function LaunchCountdown({
  countdown,
  isLaunchLive,
}: LaunchCountdownProps) {
  if (isLaunchLive) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-[2rem] border border-[#d7b56d]/25 bg-[#d7b56d]/10 px-6 py-7 text-center backdrop-blur-xl sm:px-10"
      >
        <CheckCircle2
          size={26}
          className="shrink-0 text-[#d7b56d]"
        />

        <p className="font-display text-2xl font-medium text-white sm:text-3xl">
          The book is officially available.
        </p>
      </motion.div>
    );
  }

  const countdownItems = [
    {
      value: countdown.days,
      label: "Days",
    },
    {
      value: countdown.hours,
      label: "Hours",
    },
    {
      value: countdown.minutes,
      label: "Minutes",
    },
    {
      value: countdown.seconds,
      label: "Seconds",
    },
  ];

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
      {countdownItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] px-4 py-7 text-center backdrop-blur-xl sm:rounded-[2rem] sm:px-6 sm:py-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-10 size-28 rounded-full bg-[#d7b56d]/10 blur-2xl"
          />

          <span className="relative block font-display text-6xl font-medium leading-none text-[#f2dcac] sm:text-7xl lg:text-8xl">
            {String(item.value).padStart(2, "0")}
          </span>

          <span className="relative mt-4 block text-[0.6rem] font-bold uppercase tracking-[0.24em] text-white/40">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

interface LaunchInformationProps {
  isLaunchLive: boolean;
}

function LaunchInformation({
  isLaunchLive,
}: LaunchInformationProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#d7b56d]" />

        <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#f2dcac]">
          {isLaunchLive
            ? "Begin your journey"
            : "Reserve your place"}
        </p>
      </div>

      <h3 className="mt-7 max-w-xl font-display text-5xl font-medium leading-[0.92] tracking-[-0.045em] text-white sm:text-6xl">
        {isLaunchLive
          ? "Choose your preferred edition."
          : "Be among the first to know."}
      </h3>

      <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9">
        {isLaunchLive
          ? "Select the format that suits you and complete your purchase securely through Paystack."
          : "Enter your details to receive the official launch notification, purchase information, and important updates about the book."}
      </p>

      {!isLaunchLive && (
        <div className="mt-9 space-y-4">
          {waitlistBenefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#d7b56d]/20 bg-[#d7b56d]/10 text-[#f2dcac]">
                <Check size={14} strokeWidth={2.4} />
              </span>

              <p className="text-sm text-white/65 sm:text-base">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7 text-sm text-white/40">
        <Clock3
          size={17}
          className="shrink-0 text-[#d7b56d]"
        />

        <span>
          {bookConfig.launch.displayDate} ·{" "}
          {bookConfig.launch.timezone}
        </span>
      </div>
    </motion.div>
  );
}

function WaitlistPanel() {
  const [formData, setFormData] =
    useState<WaitlistFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSuccessful, setIsSuccessful] =
    useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
      submit: undefined,
    }));
  };

  const validateForm = (): boolean => {
    const validationErrors: FormErrors = {};

    if (formData.fullName.trim().length < 3) {
      validationErrors.fullName =
        "Please enter your full name.";
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      validationErrors.email =
        "Please enter a valid email address.";
    }

    const cleanedPhone = formData.phone.replace(
      /[\s()-]/g,
      "",
    );

    if (!/^\+?[0-9]{10,15}$/.test(cleanedPhone)) {
      validationErrors.phone =
        "Please enter a valid phone number.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(
        `${siteConfig.apiUrl}/api/v1/waitlist`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            full_name: formData.fullName.trim(),
            email: formData.email
              .trim()
              .toLowerCase(),
            phone: formData.phone.trim(),
            source: "book-launch-website",
          }),
        },
      );

      const result = (await response.json().catch(
        () => null,
      )) as
        | {
            success?: boolean;
            message?: string;
          }
        | null;

      if (!response.ok || result?.success === false) {
        throw new Error(
          result?.message ??
            "We could not add you to the waitlist.",
        );
      }

      setIsSuccessful(true);
      setFormData(initialFormData);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      setErrors({
        submit: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      id="waitlist"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_35px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-8 lg:p-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-20 size-72 rounded-full bg-[#d7b56d]/10 blur-[80px]"
      />

      <AnimatePresence mode="wait">
        {isSuccessful ? (
          <motion.div
            key="success"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="relative flex min-h-[32rem] flex-col items-center justify-center text-center"
          >
            <span className="grid size-20 place-items-center rounded-full border border-[#d7b56d]/25 bg-[#d7b56d]/10 text-[#f2dcac]">
              <CheckCircle2 size={36} />
            </span>

            <h3 className="mt-7 font-display text-4xl font-medium text-white sm:text-5xl">
              You are on the list.
            </h3>

            <p className="mt-5 max-w-md text-base leading-8 text-white/55">
              Thank you for joining. You will receive the
              official launch notification and purchase
              details when the book becomes available.
            </p>

            <button
              type="button"
              onClick={() => setIsSuccessful(false)}
              className="mt-8 text-sm font-bold text-[#f2dcac] transition hover:text-white"
            >
              Add another person
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="relative"
          >
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[#d7b56d]">
              Launch waitlist
            </p>

            <h3 className="mt-3 font-display text-4xl font-medium tracking-[-0.035em] text-white sm:text-5xl">
              Reserve your place.
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
              Complete the form and we will notify you as
              soon as the book becomes available.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-5"
            >
              <FormField
                id="fullName"
                name="fullName"
                label="Full name"
                placeholder="Enter your full name"
                value={formData.fullName}
                error={errors.fullName}
                icon={UserRound}
                onChange={handleChange}
                autoComplete="name"
              />

              <FormField
                id="email"
                name="email"
                type="email"
                label="Email address"
                placeholder="you@example.com"
                value={formData.email}
                error={errors.email}
                icon={Mail}
                onChange={handleChange}
                autoComplete="email"
              />

              <FormField
                id="phone"
                name="phone"
                type="tel"
                label="Phone number"
                placeholder="+234 800 000 0000"
                value={formData.phone}
                error={errors.phone}
                icon={Phone}
                onChange={handleChange}
                autoComplete="tel"
              />

              {errors.submit && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-100"
                >
                  {errors.submit}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-bold text-[#590a4e] shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#fdf6e5] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle
                      size={18}
                      className="animate-spin"
                    />
                    Joining waitlist
                  </>
                ) : (
                  <>
                    Join the Waitlist

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 flex items-start gap-3 text-xs leading-6 text-white/35">
              <LockKeyhole
                size={15}
                className="mt-1 shrink-0 text-[#d7b56d]"
              />

              <p>
                No spam. Your details will only be used for
                important updates about the book and its
                launch.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface FormFieldProps {
  id: string;
  name: keyof WaitlistFormData;
  type?: "text" | "email" | "tel";
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  autoComplete: string;
  icon: typeof UserRound;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
}

function FormField({
  id,
  name,
  type = "text",
  label,
  placeholder,
  value,
  error,
  autoComplete,
  icon: Icon,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/50"
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#d7b56d]"
        />

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${id}-error` : undefined
          }
          className={`min-h-14 w-full rounded-2xl border bg-white/[0.06] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:bg-white/[0.09] ${
            error
              ? "border-red-300/50 focus:border-red-300"
              : "border-white/10 focus:border-[#d7b56d]/55"
          }`}
        />
      </div>

      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs text-red-200"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function PurchasePanel() {
  return (
    <motion.div
      id="purchase"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_35px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-9"
    >
      <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[#d7b56d]">
        Now available
      </p>

      <h3 className="mt-4 font-display text-4xl font-medium text-white sm:text-5xl">
        Select your edition.
      </h3>

      <p className="mt-4 text-base leading-8 text-white/50">
        Choose the edition that works best for you. Secure
        payment will be handled through Paystack.
      </p>

      <div className="mt-8 space-y-4">
        <PurchaseOption
          title={bookConfig.formats.digital.name}
          description={
            bookConfig.formats.digital.description
          }
          icon={Download}
          href="/checkout?format=digital"
        />

        <PurchaseOption
          title={bookConfig.formats.hardCopy.name}
          description={
            bookConfig.formats.hardCopy.description
          }
          icon={Package}
          href="/checkout?format=hardcopy"
        />
      </div>

      <div className="mt-7 flex items-center gap-3 text-xs text-white/35">
        <ShieldCheck
          size={16}
          className="text-[#d7b56d]"
        />

        Secure checkout powered by Paystack.
      </div>
    </motion.div>
  );
}

interface PurchaseOptionProps {
  title: string;
  description: string;
  href: string;
  icon: typeof Download;
}

function PurchaseOption({
  title,
  description,
  href,
  icon: Icon,
}: PurchaseOptionProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d7b56d]/30 hover:bg-white/[0.09]"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#d7b56d]/10 text-[#f2dcac]">
        <Icon size={20} />
      </span>

      <span className="flex-1">
        <span className="block font-display text-2xl font-medium text-white">
          {title}
        </span>

        <span className="mt-1 block text-sm leading-6 text-white/45">
          {description}
        </span>
      </span>

      <ArrowRight
        size={19}
        className="text-[#d7b56d] transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

function BookFormats() {
  const formats = [
    {
      number: "01",
      title: bookConfig.formats.digital.name,
      description:
        bookConfig.formats.digital.description,
      icon: Download,
    },
    {
      number: "02",
      title: bookConfig.formats.hardCopy.name,
      description:
        bookConfig.formats.hardCopy.description,
      icon: BookOpen,
    },
  ];

  return (
    <div className="mt-24 border-t border-white/10 pt-12 sm:mt-32 sm:pt-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#d7b56d]">
            Available formats
          </p>

          <h3 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[0.95] text-white sm:text-5xl">
            Read it your way.
          </h3>
        </div>

        <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
          Digital and printed editions will be available,
          allowing every reader to choose the experience that
          suits them.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {formats.map((format, index) => {
          const Icon = format.icon;

          return (
            <motion.article
              key={format.title}
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
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-lg sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="grid size-13 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-[#f2dcac]">
                  <Icon size={21} />
                </span>

                <span className="font-display text-4xl text-[#d7b56d]/55">
                  {format.number}
                </span>
              </div>

              <h4 className="mt-8 font-display text-3xl font-medium text-white sm:text-4xl">
                {format.title}
              </h4>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                {format.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}