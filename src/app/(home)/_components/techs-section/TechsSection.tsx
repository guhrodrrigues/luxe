import { TechsDescription } from "./TechsDescription";
import { TechsSlider } from "./Techs";

export function TechsSection() {
  return (
    <section>
      <div className="relative rounded-3xl border-t border-border pt-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-px max-w-[1000px] pointer-events-none -translate-y-1/2 -translate-x-1/2 w-[1000px] bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent"
        />
        <div
          aria-hidden="true"
          className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] user-select-none center pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
          }}
        />
        <div className="flex flex-col justify-center items-center gap-14">
          <TechsDescription />
          <TechsSlider />
        </div>
      </div>
    </section>
  );
}
