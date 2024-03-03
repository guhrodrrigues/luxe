"use client";

import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export function TextShakeExample() {
  const pathname = usePathname();

  return (
    <span
      className={cn(
        "text-neutral-400",
        pathname === "/"
          ? "animate-[text-shake_1s_ease_infinite]"
          : "hover:animate-text-shake"
      )}
    >
      Text Shake
    </span>
  );
}
