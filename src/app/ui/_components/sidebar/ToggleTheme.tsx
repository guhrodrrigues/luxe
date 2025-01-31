"use client";

import { useTheme } from "next-themes";

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
        <button
          key={idx}
          onClick={() => setTheme(itemTheme)}
          className={cn(
            "relative flex h-[18px] w-[20px] items-center justify-center rounded-[6px]",
            theme === itemTheme && "bg-[#dddddd] dark:bg-[#2b2b2b]",
          )}
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
        </button>
      ))}
    </div>
  );
}
