import { ButtonGlitchBrightness } from "@/app/_components/ButtonGlitchBrightness";
import { Icons } from "@/app/_components/Icons";
import { TextAnimateEnter } from "@/app/_components/TextAnimateEnter";
import { AnimateEnter } from "../AnimateEnter";
import { GridBackground } from "../GridBackground";
import { AnimatedNumber } from "./AnimatedNumber";
import { Techs } from "../techs-section/Techs";

import { cn } from "@/utils/cn";

async function getRepoStarCount() {
  const res = await fetch("https://api.github.com/repos/guhrodrrigues/luxe");
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
    <div className={cn("z-[3] flex flex-col items-center gap-20 text-center")}>
      <div className={cn("space-y-10")}>
        <AnimateEnter delay={0.1}>
          <h1
            className={cn(
              "mx-auto max-w-3xl font-semibold text-4xl text-gradient leading-[calc(4.5rem_*_1.2)] tracking-tight",
              "md:text-7xl",
            )}
          >
            Illuminate your apps. Fast and Easy.
          </h1>
        </AnimateEnter>
        <AnimateEnter delay={0.2}>
          <p
            className={cn(
              "mx-auto max-w-lg text-neutral-600 text-xl dark:text-neutral-300",
            )}
          >
            Library of components copy and paste to illuminate your applications
            with elegance and sophistication.
          </p>
        </AnimateEnter>
        <AnimateEnter
          className={cn("flex flex-wrap items-center justify-center gap-2")}
          delay={0.3}
        >
          <ButtonGlitchBrightness
            href="/ui/installation"
            text="Explore components"
            className="py-3 px-4 h-11 text-base"
          />
          <a
            href="https://github.com/guhrodrrigues/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex py-3 px-4 h-11 font-mono text-[15px] justify-center items-center gap-1.5 rounded-xl border border-border bg-background font-semibold text-neutral-600 duration-300 hover:bg-neutral-200 dark:text-secondary dark:hover:bg-neutral-900",
            )}
          >
            npx @luxe/ui init
          </a>
        </AnimateEnter>
      </div>
      <AnimateEnter delay={0.4} className="space-y-4">
        <h1>Build with</h1>
        <Techs />
      </AnimateEnter>
      <GridBackground />
    </div>
  );
}
