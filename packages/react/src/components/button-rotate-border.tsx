import { cn } from "@/registry/utils/cn";

export function ButtonRotateBorder() {
  return (
    <button className="relative inline-flex overflow-hidden rounded-xl p-px">
      <span
        className={cn(
          "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]",
          "dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]",
        )}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-500 backdrop-blur-3xl dark:bg-neutral-950 dark:text-neutral-100">
        Button
      </span>
    </button>
  );
}
