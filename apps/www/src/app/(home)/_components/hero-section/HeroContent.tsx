import { cn } from "@/utils/cn";

import { ButtonGlitchBrightness } from "@/app/_components/ButtonGlitchBrightness";
import { AnimateEnter } from "../AnimateEnter";
import { GridBackground } from "../GridBackground";
import { Techs } from "../techs-section/Techs";
import { GetStartedButton } from "../slogan-section/GetStartedButton";
import { AnimatedBadge } from "./AnimatedBadge";

export async function HeroContent() {
  return (
    <div className="z-[3] flex flex-col items-center gap-28 text-center">
      <div className="space-y-8">
        <div className="space-y-6">
          <AnimateEnter delay={0.1} duration={2} className="w-fit mx-auto">
            <AnimatedBadge />
          </AnimateEnter>
          <AnimateEnter delay={0.3} duration={2}>
            <h1 className="mx-auto max-w-3xl font-semibold text-4xl text-gradient tracking-tight md:text-7xl">
              Illuminate your apps
            </h1>
          </AnimateEnter>
        </div>
        <AnimateEnter delay={0.5} duration={2}>
          <p className="mx-auto max-w-lg text-xl text-foreground">
            Library of copy and paste components to illuminate your applications
            with elegance and sophistication.
          </p>
        </AnimateEnter>
        <AnimateEnter
          className="flex flex-wrap items-center justify-center gap-3"
          delay={0.7}
          duration={2}
        >
          <ButtonGlitchBrightness
            href="/ui/accordion"
            text="Explore components"
            className="py-3 px-4 h-11 text-base"
            shine={false}
          />
          <GetStartedButton />
        </AnimateEnter>
      </div>
      <AnimateEnter delay={0.9} duration={2} className="space-y-4">
        <h1 className="text-sm text-foreground/60 dark:text-foreground/80">
          Build with
        </h1>
        <Techs />
      </AnimateEnter>
      <GridBackground />
    </div>
  );
}
