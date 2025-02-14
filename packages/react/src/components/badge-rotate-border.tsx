import { cn } from "@/registry/utils/cn";

export function BadgeRotateBorder() {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-px">
      <span
        className={cn(
          "absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]",
          "animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]",
        )}
      />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500 backdrop-blur-3xl dark:bg-neutral-950 dark:text-neutral-100">
        Badge
      </span>
    </div>
  );
}
