import { cn } from "@/registry/utils/cn";

export function InfiniteSliderExample() {
  return (
    <InfiniteSlider pauseOnHover>
      <img
        src="https://i.imgur.com/NfGQgBk.png"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="01's image"
      />
      <img
        src="https://i.imgur.com/EeC1h3b.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="02's image"
      />
      <img
        src="https://i.imgur.com/4VCS3zG.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="03's image"
      />
      <img
        src="https://i.imgur.com/yWunBhl.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="04's image"
      />
      <img
        src="https://i.imgur.com/dfDyDad.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="05's image"
      />
      <img
        src="https://i.imgur.com/7N3FxDW.jpeg"
        className="aspect-square w-[120px] rounded-[4px]"
        alt="06's image"
      />
    </InfiniteSlider>
  );
}

type InfiniteSliderProps = {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
};

function InfiniteSlider({
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
