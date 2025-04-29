import * as RadixDialog from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";

export const Dialog = RadixDialog.Root;

type DialogPortalProps = React.ComponentProps<typeof RadixDialog.Portal>;

function DialogPortal({ children, ...props }: DialogPortalProps) {
  return <RadixDialog.Portal {...props}>{children}</RadixDialog.Portal>;
}

function DialogOverlay() {
  return (
    <RadixDialog.Overlay className="fixed top-0 left-0 size-full z-[999]">
      <div
        className={cn(
          "fixed inset-0 bg-black/80 ease-out-quad",
          "data-[state=open]:animate-in data-[state=open]:fade-in",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out",
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
    <DialogPortal>
      <DialogOverlay />
      <RadixDialog.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2",
          "rounded-xl shadow max-h-[85vh] w-[90vw] max-w-[400px] ease-out-quad focus:outline-none",
          "data-[state=open]:animate-in data-[state=open]:zoom-in-90 data-[state=open]:fade-in",
          "data-[state=closed]:animate-out data-[state=closed]:zoom-out-90 data-[state=closed]:fade-out",
        )}
      >
        <div
          className={cn(
            "border rounded-[inherit] border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#111111]",
            className,
          )}
        >
          {children}
        </div>
      </RadixDialog.Content>
    </DialogPortal>
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
