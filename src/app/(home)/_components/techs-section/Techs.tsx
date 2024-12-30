"use client";

import { Slider } from "@/app/_components/Slider";
import { TECHS } from "@/data/techs";
import { AnimateEnter } from "../AnimateEnter";

export function TechsSlider() {
  return (
    <AnimateEnter delay={0.8} className="flex select-none flex-col rounded-lg">
      <Slider className="max-w-xl">
        {TECHS.map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-1">
            <span>{icon}</span>
            <span className="flex-shrink-0 text-base font-semibold -tracking-wide text-primary">
              {name}
            </span>
          </div>
        ))}
      </Slider>
    </AnimateEnter>
  );
}
