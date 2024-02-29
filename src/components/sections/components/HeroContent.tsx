import Link from "next/link";

import { StarIcon } from "lucide-react";

async function getRepoStarCount() {
  const res = await fetch("https://api.github.com/repos/guhrodriguess/luxe");
  const data = await res.json();
  const starCount = data.stargazers_count;

  if (starCount > 999) {
    return (starCount / 1000).toFixed(1) + "K";
  }

  return starCount;
}

export async function HeroContent() {
  const starCount = await getRepoStarCount();

  return (
    <div className="space-y-4 text-center">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-gradient">Luxe</h1>
        <p className="max-w-md mx-auto text-secondary">
          Library of dark mode components to illuminate your applications with
          elegance and sophistication.
        </p>
      </div>
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/ui"
            className="group relative grid overflow-hidden rounded-xl px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
          >
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
            <span className="z-10 text-neutral-400 text-sm font-medium">
              Get started
            </span>
          </Link>
          <a
            href="https://github.com/guhrodriguess/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm py-2 px-4 font-semibold bg-primary text-black rounded-xl duration-300 hover:bg-primary/70"
          >
            <StarIcon size={14} />
            <span>{starCount}</span>
          </a>
        </div>
        <span className="text-xs text-muted">
          Crafted with{" "}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
          >
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a
            href="https://framer.com/motion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
          >
            Framer Motion
          </a>
        </span>
      </div>
    </div>
  );
}
