"use client";

import { cn } from "@/utils/cn";

import { motion } from "motion/react";
import { useState } from "react";

export function AnimatedBadge() {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href="/updates/v2.0"
      className="group relative outline-none block rounded-full py-[5px] pr-3 pl-1.5 bg-[#eeeeee] dark:bg-[#161616] dark:shadow-inner dark:shadow-neutral-800/80 border border-neutral-400/20 dark:border-neutral-700/70"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={cn(
          "absolute -inset-px rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] pointer-events-none",
          "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        )}
      >
        <motion.div
          animate={{ opacity: isHover ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute aspect-square bg-gradient-to-r from-transparent via-neutral-300 to-neutral-400 dark:from-transparent dark:via-neutral-600 dark:to-neutral-400"
            animate={{
              offsetDistance: isHover ? "0%" : ["0%", "100%"],
            }}
            style={{
              width: 18,
              offsetPath: `rect(0 auto auto 0 round ${18}px)`,
            }}
            transition={
              isHover
                ? { delay: 0.5 }
                : {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "linear",
                  }
            }
          />
        </motion.div>
      </div>
      <div className="relative z-10 flex items-center justify-between">
        <div
          className={cn(
            "w-[30px] h-4 font-medium bg-yellow-400/30 dark:bg-[#eaec8a]/16 rounded-full text-[10px]",
            "leading-[150%] text-center mr-2.5 text-yellow-600 dark:text-[#eaec8a] [text-shadow:0_1px_1.5px_rgb(0,0,0,0.16)]",
          )}
        >
          New
        </div>
        <span className="relative text-[12px] leading-none font-medium">
          Luxe 2.0
        </span>
      </div>
      <div
        aria-hidden
        className={cn(
          "absolute z-0 rounded-[inherit] inset-0 size-full bg-gradient-to-t from-neutral-500/10 duration-200 ease-out",
          "dark:from-neutral-900/40 dark:to-neutral-800/60 opacity-0 group-hover:opacity-100",
        )}
      />
      <motion.div
        aria-hidden
        className={cn(
          "absolute inset-0 size-full bg-amber-500/55 dark:bg-white/15 blur-[6px] -z-[1] rounded-full",
          isHover && "delay-300 animate-pulse",
        )}
        animate={!isHover ? { opacity: 0 } : {}}
        transition={{ duration: 0.7 }}
      />
    </a>
  );
}
