import * as RadixTooltip from "@radix-ui/react-tooltip";

import { cn } from "@/utils/cn";

export const Tooltip = RadixTooltip.Root;

export const TooltipTrigger = RadixTooltip.Trigger;

type TooltipProviderProps = React.ComponentProps<typeof RadixTooltip.Provider>;

export function TooltipProvider({ children, ...props }: TooltipProviderProps) {
  return (
    <RadixTooltip.Provider delayDuration={0} {...props}>
      {children}
    </RadixTooltip.Provider>
  );
}

type TooltipContentProps = React.ComponentProps<typeof RadixTooltip.Content>;

export function TooltipContent({
  children,
  className,
  sideOffset = 6,
  ...props
}: TooltipContentProps) {
  return (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        sideOffset={sideOffset}
        className={cn(
          "px-3 py-1.5 z-50 overflow-hidden rounded-lg border border-[#dddddd] dark:border-[#222222]",
          "text-xs text-neutral-500 dark:text-neutral-300 bg-neutral-100 dark:bg-[#111111]",
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      >
        {children}
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );
}
