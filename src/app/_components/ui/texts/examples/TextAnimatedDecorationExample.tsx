"use client";

import { usePathname } from "next/navigation";

import { TextAnimatedDecoration } from "..";

export function TextAnimatedDecorationExample() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <div className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:animate-text-scale">
          <span className="text-neutral-400">Text Animated Decoration</span>
        </div>
      ) : (
        <TextAnimatedDecoration />
      )}
    </>
  );
}
