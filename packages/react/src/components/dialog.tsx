import * as RadixDialog from "@radix-ui/react-dialog";

import { cn } from "@/registry/utils/cn";

export const Dialog = RadixDialog.Root;

function DialogOverlay() {
  return (
    <RadixDialog.Overlay className="fixed top-0 left-0 size-full z-[999]">
      <div
        className={cn(
          "fixed inset-0 bg-black/80 ease-out-quad",
          "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in",
          "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out",
        )}
      />
    </RadixDialog.Overlay>
  );
}

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof RadixDialog.Close
>;

export function DialogContent({ children, className }: DialogContentProps) {
  return (
    <RadixDialog.Portal>
      <DialogOverlay />
      <RadixDialog.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2",
          "rounded-xl shadow max-h-[85vh] w-[90vw] max-w-[400px] motion-safe:ease-out-quad focus:outline-none",
          "border border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#111111]",
          "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=open]:fade-in",
          "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=closed]:fade-out",
          className,
        )}
      >
        {children}
      </RadixDialog.Content>
    </RadixDialog.Portal>
  );
}

type DialogTitleProps = React.ComponentProps<typeof RadixDialog.Title>;

export function DialogTitle({
  children,
  className,
  ...props
}: DialogTitleProps) {
  return (
    <RadixDialog.Title
      className={cn("font-semibold text-black dark:text-white", className)}
      {...props}
    >
      {children}
    </RadixDialog.Title>
  );
}

type DialogDescriptionProps = React.ComponentProps<
  typeof RadixDialog.Description
>;

export function DialogDescription({
  children,
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <RadixDialog.Description
      className={cn(
        "text-sm text-neutral-500 dark:text-neutral-400",
        className,
      )}
      {...props}
    >
      {children}
    </RadixDialog.Description>
  );
}

type DialogFooterProps = React.ComponentProps<"div">;

export function DialogFooter({
  children,
  className,
  ...props
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        "border-t border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#0f0f0f] rounded-b-[inherit]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const DialogTrigger = RadixDialog.Trigger;

export const DialogClose = RadixDialog.Close;
