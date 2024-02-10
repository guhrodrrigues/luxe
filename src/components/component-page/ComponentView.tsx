import { cn } from "@/utils/cn";

type ComponentViewProps = React.ComponentProps<"div">;

export function ComponentView({ className, children }: ComponentViewProps) {
  return (
    <div
      className={cn(
        "relative p-8 min-h-[200px] flex items-center justify-center overflow-hidden bg-background border border-neutral-900 rounded-xl",
        className
      )}
    >
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
      <div className="z-0 w-full flex justify-center">{children}</div>
    </div>
  );
}
