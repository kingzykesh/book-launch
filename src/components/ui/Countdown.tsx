"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

const initialTimeLeft: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isComplete: false,
};

function calculateTimeLeft(
  targetDate: string,
): TimeLeft {
  const targetTime = new Date(targetDate).getTime();
  const difference = targetTime - Date.now();

  if (
    Number.isNaN(targetTime) ||
    difference <= 0
  ) {
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

export default function Countdown({
  targetDate,
  className = "",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>(initialTimeLeft);

  const [hasMounted, setHasMounted] =
    useState(false);

  useEffect(() => {
    setHasMounted(true);

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft(targetDate));
    };

    updateCountdown();

    const timer = window.setInterval(
      updateCountdown,
      1000,
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [targetDate]);

  const countdownItems = [
    {
      label: "Days",
      value: timeLeft.days,
    },
    {
      label: "Hours",
      value: timeLeft.hours,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  if (hasMounted && timeLeft.isComplete) {
    return (
      <div
        className={`rounded-2xl border border-[#d7b56d]/25 bg-[#d7b56d]/10 px-5 py-4 text-center backdrop-blur-xl ${className}`}
      >
        <p className="font-display text-xl font-semibold text-[#f2dcac] sm:text-2xl">
          The book is officially available.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-4 gap-2 sm:gap-3 ${className}`}
      aria-label="Countdown to the book launch"
    >
      {countdownItems.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-white/10 bg-white/[0.045] px-2 py-3 text-center backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-4"
        >
          <span className="block font-display text-2xl font-semibold leading-none text-white sm:text-3xl">
            {hasMounted
              ? String(item.value).padStart(2, "0")
              : "--"}
          </span>

          <span className="mt-2 block text-[0.48rem] font-bold uppercase tracking-[0.14em] text-white/35 sm:text-[0.55rem] sm:tracking-[0.18em]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}