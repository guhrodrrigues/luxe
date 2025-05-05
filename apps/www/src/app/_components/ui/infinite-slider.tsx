import { cn } from "@/utils/cn";

type InfiniteSliderProps = {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
};

export function InfiniteSlider({
  children,
  className,
  pauseOnHover,
}: InfiniteSliderProps) {
  return (
    <div
      data-id="slider"
      className={cn("group relative flex gap-10 overflow-hidden", className)}
    >
      <div className="absolute left-0 z-10 h-full w-1/12 bg-gradient-to-r from-neutral-100 to-transparent dark:from-neutral-950" />
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 animate-infinite-slider justify-around gap-10 [--gap:1rem]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          data-id={`slider-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
      <div className="absolute right-0 z-10 h-full w-1/12 bg-gradient-to-l from-neutral-100 to-transparent dark:from-neutral-950" />
    </div>
  );
}
