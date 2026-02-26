import { ButtonGlitch } from "@/app/_components/ButtonGlitch";
import { AnimateEnter } from "../AnimateEnter";
import { GridBackground } from "../GridBackground";
import { GetStartedButton } from "@/app/_components/GetStartedButton";

export function SloganSection() {
  return (
    <section className="h-full w-full">
      <div className="relative mt-28 flex flex-col items-center justify-center gap-8 pb-20 pt-14 md:mt-44 md:pb-40 lg:gap-10">
        <AnimateEnter className="flex flex-col items-center" delay={0.2}>
          <h1 className="text-gradient mx-auto text-5xl font-medium leading-none tracking-tight text-center">
            Build fast <br /> Ship with style
          </h1>
        </AnimateEnter>
        <AnimateEnter
          className="flex flex-wrap items-center justify-center gap-4"
          delay={0.2}
        >
          <GetStartedButton href="/ui/installation" />
          <ButtonGlitch href="/ui/accordion">Explore gallery</ButtonGlitch>
        </AnimateEnter>
        <GridBackground />
      </div>
    </section>
  );
}
