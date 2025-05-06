import * as RadixSwitch from "@radix-ui/react-switch";

import { cn } from "@/utils/cn";

export type SwitchProps = React.ComponentProps<typeof RadixSwitch.Root>;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <RadixSwitch.Root
      {...props}
      className={cn(
        "group inline-flex h-6 w-10.5 shrink-0 touch-none items-center rounded-full border border-border bg-neutral-200 p-0.5 outline-none transition-colors ease-out dark:bg-neutral-900",
        "data-[state=checked]:border-transparent data-[state=checked]:bg-primary",
        className,
      )}
    >
      <RadixSwitch.Thumb
        className={cn(
          "block aspect-square h-full rounded-full bg-white shadow-sm transition-transform ease-out-quad",
          "group-data-[state=unchecked]:translate-x-0",
          "group-data-[state=checked]:translate-x-4.5",
        )}
      />
    </RadixSwitch.Root>
  );
}
