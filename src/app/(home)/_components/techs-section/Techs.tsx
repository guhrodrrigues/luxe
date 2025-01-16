import { TECHS } from "@/data/techs";
import { AnimateEnter } from "../AnimateEnter";

export function Techs() {
  return (
    <AnimateEnter
      className="flex items-center justify-center gap-10 gap-y-6 max-sm:flex-col"
      delay={0.9}
    >
      <div className="flex items-center gap-10">
        {TECHS.slice(0, 2).map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-1">
            <span>{icon}</span>
            <span className="flex-shrink-0 text-lg font-semibold -tracking-wide text-primary">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10">
        {TECHS.slice(2, 4).map(({ icon, name }) => (
          <div key={name} className="flex items-center gap-1">
            <span>{icon}</span>
            <span className="flex-shrink-0 text-lg font-semibold -tracking-wide text-primary">
              {name}
            </span>
          </div>
        ))}
      </div>
    </AnimateEnter>
  );
}
