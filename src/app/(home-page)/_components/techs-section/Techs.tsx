"use client";

import { Slider } from "@/app/_components/Slider";
import { TECHS } from "@/data/techs";

export function TechsSlider() {
  return (
    <div className="flex flex-col rounded-lg select-none">
      <Slider className="max-w-xl">
        {TECHS.map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-1">
            <span>{icon}</span>
            <span className="text-primary text-base font-semibold flex-shrink-0">
              {name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
