import { cn } from "@/utils/cn";

type SliderProps = {
  children: React.ReactNode;
  className?: string;
};

function createArray(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, k) => k + start);
}

export function Slider({ children, className }: SliderProps) {
  return (
    <div
      className={cn("group relative flex gap-10 overflow-hidden", className)}
      data-id="slider"
    >
      <div className="absolute left-0 w-1/12 h-full bg-gradient-to-r from-background to-transparent z-10" />
      {createArray(0, 16).map((_, i) => (
        <div
          key={i}
          className="flex shrink-0 animate-slide justify-around gap-10 [--gap:1rem]"
          data-id={`slider-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
      <div className="absolute right-0 w-1/12 h-full bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}
