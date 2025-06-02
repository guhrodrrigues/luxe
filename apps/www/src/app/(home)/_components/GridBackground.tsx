import { cn } from "@/utils/cn";

export function GridBackground() {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute -top-14 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]",
        "bg-[size:156px_156px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:invisible",
      )}
    />
  );
}
