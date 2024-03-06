"use client";

import { Slider } from "./Slider";
import { TECHS } from "@/data/techs";

export function TechsSlider() {
  return (
    <div className="flex flex-col rounded-lg">
      <Slider pauseOnHover>
        {TECHS.map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-1">
            <span>{icon}</span>
            <span className="text-secondary text-base flex-shrink-0">
              {name}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
