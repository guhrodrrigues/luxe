import { cn } from "@/utils/cn";

type ComponentViewProps = React.ComponentProps<"div">;

export function ComponentView({ className, children }: ComponentViewProps) {
  return (
    <div
      className={cn(
        "p-8 min-h-[200px] flex items-center justify-center overflow-hidden bg-neutral-950 shadow border border-neutral-900 rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
