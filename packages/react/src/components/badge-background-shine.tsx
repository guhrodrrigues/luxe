import { cn } from "@/registry/utils/cn";

export function BadgeBackgroundShine() {
  return (
    <div
      className={cn(
        "animate-shine items-center justify-center rounded-full border border-white/10 font-medium text-neutral-200 transition-colors",
        "bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] bg-[length:400%_100%] px-3 py-1 text-xs dark:text-neutral-400",
      )}
    >
      Badge
    </div>
  );
}
