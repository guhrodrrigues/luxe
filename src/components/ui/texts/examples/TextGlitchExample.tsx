"use client";

import { usePathname } from "next/navigation";

import { TextGlitch } from "..";

export function TextGlitchExample() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <div className="relative overflow-hidden group">
          <span className="invisible">Text Glitch</span>
          <span className="text-neutral-400 absolute top-0 left-0 animate-text-glitch-to">
            Text Glitch
          </span>
          <span className="text-neutral-400 absolute top-0 left-0 animate-text-glitch-from">
            Text Glitch
          </span>
        </div>
      ) : (
        <TextGlitch />
      )}
    </>
  );
}
