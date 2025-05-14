import { TECHS } from "@/data/techs";

export function Techs() {
  return (
    <div className="flex items-center justify-center gap-14 gap-y-6 max-sm:flex-col">
      <div className="flex items-center gap-14">
        {TECHS.slice(0, 2).map(({ icon, name }) => (
          <div
            key={name}
            className="flex items-center gap-1.5 pointer-events-none select-none"
          >
            <span>{icon}</span>
            <span className="flex-shrink-0 text-lg font-semibold -tracking-wide text-neutral-400">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-14">
        {TECHS.slice(2, 4).map(({ icon, name }) => (
          <div
            key={name}
            className="flex items-center gap-1.5 pointer-events-none select-none"
          >
            <span>{icon}</span>
            <span className="flex-shrink-0 text-lg font-semibold -tracking-wide text-neutral-400">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
