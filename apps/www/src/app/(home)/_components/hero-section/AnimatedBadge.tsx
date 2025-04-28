"use client";

import { cn } from "@/utils/cn";

import { motion } from "motion/react";

export function AnimatedBadge() {
  return (
    <a
      href="/updates/luxe-v2"
      className="group relative block rounded-full py-[5px] pr-3 pl-1.5 bg-[#eeeeee] dark:bg-[#161616] shadow-inner shadow-neutral-300 dark:shadow-neutral-800/80 border border-neutral-400/50 dark:border-neutral-700/70"
    >
      <div
        className={cn(
          "absolute -inset-px rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] pointer-events-none",
          "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        )}
      >
        <motion.div
          className="absolute aspect-square bg-zinc-400 dark:bg-zinc-600"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          style={{
            width: 18,
            offsetPath: `rect(0 auto auto 0 round ${18}px)`,
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        />
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <div className="w-[30px] h-4 font-medium bg-yellow-300/30 dark:bg-[rgb(234,236,138,0.16)] rounded-full text-[10px] leading-[150%] text-center mr-2.5 text-yellow-500 dark:text-[rgb(234,236,138)]">
          New
        </div>
        <span className="relative text-[12px] leading-none font-medium">
          Luxe 2.0
        </span>
      </div>
      <div
        aria-hidden
        className={cn(
          "absolute z-0 rounded-[inherit] inset-0 size-full bg-gradient-to-t from-neutral-500/40 duration-200 ease-out",
          "dark:from-neutral-900/40 dark:to-neutral-800/60 opacity-0 group-hover:opacity-100",
        )}
      />
    </a>
  );
}
