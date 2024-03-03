import { cn } from "@/utils/cn";

type SliderProps = {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  className?: string;
};

function createArray(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, k) => k + start);
}

export function Slider({ children, pauseOnHover, className }: SliderProps) {
  return (
    <div
      className={cn(
        "group relative flex gap-10 overflow-hidden max-w-xl",
        className
      )}
      data-id="slider"
    >
      {createArray(0, 12).map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 animate-slide justify-around gap-10 [--gap:1rem]",
            pauseOnHover && "group-hover:paused"
          )}
          data-id={`slider-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 bg-fade-gradient" />
    </div>
  );
}
