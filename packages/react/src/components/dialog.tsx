import * as RadixDialog from '@radix-ui/react-dialog'

import { cn } from '@/utils/cn'

export const Dialog = RadixDialog.Root

export const DialogTrigger = RadixDialog.Trigger

export const DialogClose = RadixDialog.Close

function DialogOverlay() {
  return (
    <RadixDialog.Overlay className={cn('fixed top-0 left-0 z-[999] size-full')}>
      <div
        className={cn(
          'fixed inset-0 bg-black/80 ease-out-quad',
          'motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:animate-in',
          'motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:animate-out',
        )}
      />
    </RadixDialog.Overlay>
  )
}

type DialogContentProps = React.ComponentProps<typeof RadixDialog.Content>

export function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <DialogOverlay />
      <RadixDialog.Content
        className={cn(
          '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-[1001] max-h-[85vh] w-[90vw] max-w-[400px]',
          'focus:outline-none motion-safe:ease-out-quad',
          'rounded-xl border border-border bg-neutral-100 shadow',
          'dark:border-[#222222] dark:bg-[#111111]',
          'motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:animate-in',
          'motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:animate-out',
          className,
        )}
        {...props}
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  )
}

type DialogTitleProps = React.ComponentProps<typeof RadixDialog.Title>

export function DialogTitle({
  children,
  className,
  ...props
}: DialogTitleProps) {
  return (
    <RadixDialog.Title
      className={cn('font-semibold text-black dark:text-white', className)}
      {...props}
    >
      {children}
    </RadixDialog.Title>
  )
}

type DialogDescriptionProps = React.ComponentProps<
  typeof RadixDialog.Description
>

export function DialogDescription({
  children,
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <RadixDialog.Description
      className={cn(
        'text-neutral-500 text-sm dark:text-neutral-400',
        className,
      )}
      {...props}
    >
      {children}
    </RadixDialog.Description>
  )
}

type DialogFooterProps = React.ComponentProps<'div'>

export function DialogFooter({
  children,
  className,
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        'rounded-b-[inherit] border-border border-t bg-neutral-100',
        'dark:border-[#222222] dark:bg-[#0f0f0f]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
