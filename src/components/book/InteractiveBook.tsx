"use client";

import {
  MouseEvent,
  PointerEvent,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Move3D } from "lucide-react";

import { bookConfig } from "@/config/book";

interface Rotation {
  x: number;
  y: number;
}

export default function InteractiveBook() {
  const shouldReduceMotion = useReducedMotion();

  const sceneRef = useRef<HTMLDivElement>(null);

  const pointerStartRef = useRef<{
    x: number;
    y: number;
    rotationX: number;
    rotationY: number;
  } | null>(null);

  const [rotation, setRotation] = useState<Rotation>({
    x: -7,
    y: -22,
  });

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (
      shouldReduceMotion ||
      isDragging ||
      !sceneRef.current
    ) {
      return;
    }

    const bounds =
      sceneRef.current.getBoundingClientRect();

    const relativeX =
      (event.clientX - bounds.left) / bounds.width;

    const relativeY =
      (event.clientY - bounds.top) / bounds.height;

    setRotation({
      x: (0.5 - relativeY) * 16 - 5,
      y: (relativeX - 0.5) * 30 - 18,
    });
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      return;
    }

    setRotation({
      x: -7,
      y: -22,
    });
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.setPointerCapture(
      event.pointerId,
    );

    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      rotationX: rotation.x,
      rotationY: rotation.y,
    };

    setIsDragging(true);
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (!pointerStartRef.current || !isDragging) {
      return;
    }

    const deltaX =
      event.clientX - pointerStartRef.current.x;

    const deltaY =
      event.clientY - pointerStartRef.current.y;

    setRotation({
      x: Math.max(
        -35,
        Math.min(
          28,
          pointerStartRef.current.rotationX -
            deltaY * 0.18,
        ),
      ),

      y:
        pointerStartRef.current.rotationY +
        deltaX * 0.25,
    });
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId,
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }

    pointerStartRef.current = null;
    setIsDragging(false);
  };

  return (
    <div className="relative flex min-h-[31rem] w-full items-center justify-center lg:min-h-[42rem]">
      <div className="book-glow animate-pulse-soft absolute left-1/2 top-1/2 h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.72,
                y: 70,
                rotate: 5,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
        }}
        transition={{
          duration: 1.3,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full"
      >
        <div
          ref={sceneRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative mx-auto h-[24rem] w-[17rem] touch-none select-none sm:h-[31rem] sm:w-[22rem] lg:h-[35rem] lg:w-[25rem] ${
            isDragging
              ? "cursor-grabbing"
              : "cursor-grab"
          }`}
          style={{
            perspective: "1600px",
          }}
          aria-label="Interactive 3D book. Drag to rotate."
        >
          <motion.div
            animate={{
              y: shouldReduceMotion
                ? 0
                : [0, -10, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <div
              className="relative h-full w-full transition-transform duration-200 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            >
              <div
                className="absolute inset-0 overflow-hidden rounded-r-[0.7rem] rounded-l-[0.28rem] bg-[#590a4e] shadow-[0_35px_80px_rgba(0,0,0,0.48)]"
                style={{
                  transform:
                    "translateZ(22px)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={bookConfig.cover.front}
                  alt={`Front cover of ${bookConfig.title}`}
                  draggable={false}
                  className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/20" />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-black/35 to-transparent" />
              </div>

              <div
                className="absolute inset-0 overflow-hidden rounded-l-[0.7rem] rounded-r-[0.28rem] bg-[#3b0635]"
                style={{
                  transform:
                    "rotateY(180deg) translateZ(22px)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={bookConfig.cover.back}
                  alt={`Back cover of ${bookConfig.title}`}
                  draggable={false}
                  className="h-full w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/10 via-transparent to-black/20" />
              </div>

              <div
                className="absolute left-0 top-0 h-full overflow-hidden bg-[#3d0636]"
                style={{
                  width: "44px",
                  transform:
                    "rotateY(-90deg) translateZ(22px)",
                  transformOrigin: "left center",
                }}
              >
                <img
                  src={bookConfig.cover.spine}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="absolute right-0 top-[2%] h-[96%] bg-[#efe6d4]"
                style={{
                  width: "44px",
                  transform:
                    "rotateY(90deg) translateZ(22px)",
                  transformOrigin: "right center",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, #f6f0e4 0px, #f6f0e4 2px, #d7ccba 3px)",
                }}
              />

              <div
                className="absolute left-0 top-0 w-full bg-[#eee3cf]"
                style={{
                  height: "44px",
                  transform:
                    "rotateX(90deg) translateZ(22px)",
                  transformOrigin: "top center",
                  backgroundImage:
                    "repeating-linear-gradient(to right, #f8f2e7 0px, #f8f2e7 3px, #d7ccba 4px)",
                }}
              />

              <div
                className="absolute bottom-0 left-0 w-full bg-[#d9cdb9]"
                style={{
                  height: "44px",
                  transform:
                    "rotateX(-90deg) translateZ(22px)",
                  transformOrigin: "bottom center",
                }}
              />
            </div>
          </motion.div>

          <div className="absolute -bottom-12 left-1/2 h-8 w-[75%] -translate-x-1/2 rounded-[100%] bg-black/55 blur-xl" />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.35,
            duration: 0.7,
          }}
          className="mx-auto mt-16 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/55 backdrop-blur-md"
        >
          <Move3D
            size={14}
            className="text-[#d7b56d]"
          />

          Drag to explore
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute right-[7%] top-[12%] hidden size-24 rounded-full border border-[#d7b56d]/15 lg:block" />

      <div className="pointer-events-none absolute right-[12%] top-[18%] hidden size-2 rounded-full bg-[#d7b56d] shadow-[0_0_25px_6px_rgba(215,181,109,0.32)] lg:block" />

      <div className="pointer-events-none absolute bottom-[17%] left-[4%] hidden h-px w-28 bg-gradient-to-r from-transparent via-[#d7b56d]/60 to-transparent lg:block" />
    </div>
  );
}