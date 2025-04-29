import { cn } from "@/utils/cn";
import { Link } from "next-view-transitions";
import React from "react";

type ButtonGlitchBrightnessProps = {
  href: string;
  text: string;
  shine?: boolean;
} & React.ComponentProps<typeof Link>;

export function ButtonGlitchBrightness({
  href,
  text,
  className,
  shine = true,
}: ButtonGlitchBrightnessProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex justify-center items-center gap-1 overflow-hidden rounded-xl bg-black/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm duration-300 hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white",
        className,
      )}
    >
      <TextGlitch text={text} />
      {shine && (
        <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
          <div className="relative h-full w-8 bg-white/20 blur dark:bg-white/40" />
        </div>
      )}
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute dark:[text-shadow:0_0.5px_0_rgb(255,255,255,.48)] left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute dark:[text-shadow:0_0.5px_0_rgb(255,255,255,.48)] left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}
