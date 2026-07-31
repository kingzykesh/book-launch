"use client";

import { useEffect, useMemo, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculateTimeRemaining(
  targetDate: string,
): TimeRemaining {
  const difference =
    new Date(targetDate).getTime() - Date.now();

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
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24,
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60,
    ),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: false,
  };
}

export default function Countdown({
  targetDate,
}: CountdownProps) {
  const initialState = useMemo(
    () => calculateTimeRemaining(targetDate),
    [targetDate],
  );

  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemaining>(initialState);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeRemaining(
        calculateTimeRemaining(targetDate),
      );
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [targetDate]);

  if (timeRemaining.isComplete) {
    return (
      <div className="inline-flex items-center gap-3 rounded-full border border-[#d7b56d]/30 bg-[#d7b56d]/10 px-4 py-2 text-sm font-semibold text-[#f2dcac]">
        <span className="size-2 animate-pulse rounded-full bg-[#d7b56d]" />
        The book is now available
      </div>
    );
  }

  const countdownItems = [
    {
      label: "Days",
      value: timeRemaining.days,
    },
    {
      label: "Hours",
      value: timeRemaining.hours,
    },
    {
      label: "Minutes",
      value: timeRemaining.minutes,
    },
    {
      label: "Seconds",
      value: timeRemaining.seconds,
    },
  ];

  return (
    <div
      className="flex flex-wrap items-center gap-2 sm:gap-3"
      aria-label="Countdown to book launch"
    >
      {countdownItems.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="min-w-[3.5rem] rounded-2xl border border-white/10 bg-white/[0.065] px-2 py-2.5 text-center backdrop-blur-md sm:min-w-[4.25rem] sm:px-3 sm:py-3">
            <span className="block font-display text-2xl font-semibold leading-none text-white sm:text-3xl">
              {String(item.value).padStart(2, "0")}
            </span>

            <span className="mt-1 block text-[0.52rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:text-[0.58rem]">
              {item.label}
            </span>
          </div>

          {index < countdownItems.length - 1 && (
            <span className="hidden font-display text-xl text-[#d7b56d]/60 sm:block">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}