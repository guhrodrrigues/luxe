"use client";

import * as RadixDialog from "@radix-ui/react-dialog";

import { cn } from "@/registry/utils/cn";

import { AnimationProps, motion, useReducedMotion } from "motion/react";

export const Dialog = RadixDialog.Root;

export const DialogTrigger = RadixDialog.Trigger;

export const DialogClose = RadixDialog.Close;

export const DialogPortal = RadixDialog.Portal;

export function DialogOverlay() {
  const shouldReduceMotion = useReducedMotion();

  const overlayVariants: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: [0.19, 1, 0.22, 1], duration: 0.4 },
  };

  const Comp = shouldReduceMotion ? "div" : motion.div;

  return (
    <RadixDialog.Overlay className="fixed top-0 left-0 size-full z-[999]">
      <Comp className="fixed inset-0 bg-black/80" {...overlayVariants} />
    </RadixDialog.Overlay>
  );
}

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof RadixDialog.Close
>;

export function DialogContent({ children, className }: DialogContentProps) {
  const shouldReduceMotion = useReducedMotion();

  const contentVariants: AnimationProps = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { ease: [0.19, 1, 0.22, 1], duration: 0.4 },
  };

  const Comp = shouldReduceMotion ? "div" : motion.div;

  return (
    <RadixDialog.Content
      className={cn(
        "fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2",
        "rounded-xl shadow max-h-[85vh] w-[90vw] max-w-[400px] focus:outline-none",
      )}
    >
      <Comp
        className={cn(
          "border rounded-[inherit] border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#111111]",
          className,
        )}
        {...contentVariants}
      >
        {children}
      </Comp>
    </RadixDialog.Content>
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
