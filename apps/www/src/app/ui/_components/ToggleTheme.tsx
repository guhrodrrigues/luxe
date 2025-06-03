"use client";

import { useTheme } from "next-themes";

import { Icons } from "@/app/_components/Icons";

import { cn } from "@/utils/cn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { useEffect } from "react";

export function ToggleTheme() {
  const { setTheme, resolvedTheme: theme } = useTheme();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Prevent theme toggle if focus is in an input, textarea, or contenteditable
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (isInput) return;
      if (e.key === "t") {
        e.preventDefault();
        setTheme(theme === "dark" ? "light" : "dark");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [theme]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "relative flex size-8 rounded-full items-center justify-center outline-none",
              "focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800 bg-background",
              "border border-border/60 dark:border-border/50 dark:hover:bg-main-foreground/20 dark:hover:border-white/10",
              "focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800 ease-linear duration-150",
              "dark:shadow-[0px_32px_64px_-16px_transparent,0px_16px_32px_-8px_transparent,0px_8px_16px_-4px_transparent,0px_4px_8px_-2px_transparent,0px_-8px_16px_-1px_transparent,0px_2px_4px_-1px_transparent,0px_0px_0px_1px_transparent,inset_0px_0px_0px_1px_transparent,inset_0px_1px_0px_rgb(255,255,255,0.2)]",
            )}
          >
            <Icons.lamp />
          </button>
        </TooltipTrigger>
        <TooltipContent className="text-xs pl-2 pr-1.5 py-1">
          Toggle theme{" "}
          <span className="ml-1 px-1 py-px rounded bg-neutral-200 leading-none dark:bg-neutral-800">
            T
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
