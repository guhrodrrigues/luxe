import { AnimateEnter } from "../AnimateEnter";
import { GridBackground } from "../GridBackground";
import { GalleryButton } from "./GalleryButton";
import { GetStartedButton } from "./GetStartedButton";

export function SloganSection() {
  return (
    <section className="h-full w-full">
      <div className="relative mt-28 flex flex-col items-center justify-center gap-8 pb-20 pt-14 md:mt-44 md:pb-40 lg:gap-10">
        <AnimateEnter className="flex flex-col items-center" delay={0.2}>
          <h1 className="text-gradient mx-auto text-center text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Build fast. <br /> Ship with style.
          </h1>
        </AnimateEnter>
        <AnimateEnter
          className="flex flex-wrap items-center justify-center gap-4"
          delay={0.2}
        >
          <GetStartedButton />
          <GalleryButton />
        </AnimateEnter>
        <GridBackground />
      </div>
    </section>
  );
}
