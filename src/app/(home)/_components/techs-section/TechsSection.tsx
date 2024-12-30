import { TechsSlider } from "./Techs";
import { AnimateEnter } from "../AnimateEnter";
import { TextAnimateEnter } from "@/app/_components/TextAnimateEnter";

export function TechsSection() {
  return (
    <section className="relative z-[4]">
      <div className="relative overflow-hidden rounded-t-3xl border-t border-border pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent"
        />
        <div
          aria-hidden="true"
          className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
          }}
        />
        <div className="flex flex-col items-center justify-center gap-14">
          <AnimateEnter delay={0.6}>
            <TextAnimateEnter
              text={`Various technologies used to build beautiful interfaces, fluid animations and easy access.`}
              containerClassName="text-center max-w-md mx-auto px-3 leading-relaxed"
              className="text-neutral-300"
              initialDelay={0.5}
              duration={0.6}
            />
          </AnimateEnter>
          <TechsSlider />
        </div>
      </div>
    </section>
  );
}
