"use client"; // @NOTE: add in case you are using Next.js

import { cn } from "@/utils/cn";
import { motion } from "motion/react";

export function ButtonLoading() {
  return (
    <button
      disabled
      className="mx-auto flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold duration-300 disabled:cursor-not-allowed disabled:opacity-80 dark:bg-white"
    >
      <Spinner />
      <TextShine />
    </button>
  );
}

function Spinner() {
  const bars = Array(12).fill(0);

  return (
    <div className="h-[18px] w-[18px]">
      <div className="relative left-1/2 top-1/2 h-[inherit] w-[inherit]">
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${i}`}
            aria-label={`spinner-bar-${i + 1}`}
            className={cn(
              "absolute -left-[10%] -top-[3.9%] h-[8%] w-[24%] animate-spinner rounded-md bg-white dark:bg-black",
              `bar:nth-child(${i + 1}`,
            )}
            style={{
              animationDelay: `-${1.3 - i * 0.1}s`,
              transform: `rotate(${30 * i}deg) translate(146%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TextShine() {
  return (
    <motion.h1
      className="bg-[linear-gradient(110deg,#696969,35%,#fff,50%,#696969,75%,#696969)] bg-[length:200%_100%] bg-clip-text text-sm font-medium text-transparent dark:bg-[linear-gradient(110deg,#bfbfbf,35%,#000,50%,#bfbfbf,75%,#bfbfbf)]"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      Loading...
    </motion.h1>
  );
}
