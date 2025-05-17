import * as RadixTooltip from '@radix-ui/react-tooltip'

import { cn } from '@/utils/cn'

export const Tooltip = RadixTooltip.Root

export const TooltipTrigger = RadixTooltip.Trigger

type TooltipProviderProps = React.ComponentProps<typeof RadixTooltip.Provider>

export function TooltipProvider({ children, ...props }: TooltipProviderProps) {
  return (
    <RadixTooltip.Provider delayDuration={0} {...props}>
      {children}
    </RadixTooltip.Provider>
  )
}

type TooltipContentProps = React.ComponentProps<typeof RadixTooltip.Content>

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
          'z-50 overflow-hidden rounded-lg border border-border bg-main px-3 py-1.5 text-primary-muted text-xs',
					'motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:data-[state=closed]:fade-out-0 motion-safe:animate-in motion-safe:data-[state=closed]:animate-out',
          'motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[side=bottom]:slide-in-from-top-2 motion-safe:data-[side=left]:slide-in-from-right-2',
          'motion-safe:data-[side=right]:slide-in-from-left-2 motion-safe:data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      >
        {children}
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  )
}
