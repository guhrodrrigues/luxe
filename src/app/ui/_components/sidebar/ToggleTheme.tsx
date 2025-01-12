"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";

import { cn } from "@/utils/cn";
import { Icons } from "@/app/_components/Icons";

const ITEMS = [
  { icon: <Icons.sun />, theme: "light" },
  { icon: <Icons.moon />, theme: "dark" },
];

export function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-px rounded-lg border border-neutral-300/80 bg-[#eeeeee] p-px dark:border-neutral-800/40 dark:bg-[#111111]">
      {ITEMS.map(({ icon, theme: itemTheme }, idx) => (
        <motion.button
          key={idx}
          onClick={() => setTheme(itemTheme)}
          className="relative flex h-[18px] w-[20px] items-center justify-center rounded-[6px]"
        >
          <div
            className={cn(
              "relative z-[1]",
              theme === itemTheme
                ? "text-black dark:text-white"
                : "text-neutral-400 dark:text-neutral-600",
            )}
          >
            {icon}
          </div>
          {theme === itemTheme && (
            <motion.div
              className="absolute inset-0 z-0 block h-full w-full rounded-[inherit] bg-[#dddddd] dark:bg-[#222222]"
              layoutId="theme-active"
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
