import * as RadixDialog from '@radix-ui/react-dialog'

import { cn } from '@/utils/cn'

export const Dialog = RadixDialog.Root

export const DialogTrigger = RadixDialog.Trigger

export const DialogClose = RadixDialog.Close

function DialogOverlay() {
  return (
    <RadixDialog.Overlay className="fixed top-0 left-0 z-[999] size-full">
      <div
        className={cn(
          'fixed inset-0 bg-black/50 ease-out dark:bg-black/80',
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
          '-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-[1001] max-h-[85vh] w-[90vw] max-w-[400px] pt-5',
          'rounded-xl border border-border bg-main focus:outline-none motion-safe:ease-out',
          'motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:animate-in',
          'motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:animate-out',
          className,
        )}
        {...props}
      >
        {children}
        <DialogClose className="absolute top-3.5 right-3.5">
          <svg
            viewBox="0 0 24 24"
            className="size-4 stroke-primary-muted transition-colors hover:stroke-primary-foreground"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </DialogClose>
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
      className={cn('px-6 font-semibold text-primary', className)}
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
      className={cn('px-6 text-primary-muted text-sm leading-tight', className)}
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
        'flex justify-between gap-4 rounded-b-[inherit] border-border border-t bg-main-muted px-6 py-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
