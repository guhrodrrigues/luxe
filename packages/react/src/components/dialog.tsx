"use client"; // @NOTE: Add in case you are using Next.js

import { createContext, useContext, useState } from "react";

import * as RadixDialog from "@radix-ui/react-dialog";

import { cn } from "@/registry/utils/cn";

import {
  AnimatePresence,
  AnimationProps,
  motion,
  useReducedMotion,
} from "motion/react";

const DialogContext = createContext(
  {} as { isOpen: boolean; setIsOpen: (isOpen: boolean) => void },
);

function DialogProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

function useDialog() {
  const context = useContext(DialogContext);

  return context;
}

function DialogRoot({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useDialog();

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </RadixDialog.Root>
  );
}

export function Dialog({ children }: { children: React.ReactNode }) {
  return (
    <DialogProvider>
      <DialogRoot>{children}</DialogRoot>
    </DialogProvider>
  );
}

type DialogPortalProps = React.ComponentProps<typeof RadixDialog.Portal>;

export function DialogPortal({ children, ...props }: DialogPortalProps) {
  return (
    <RadixDialog.Portal {...props} forceMount>
      {children}
    </RadixDialog.Portal>
  );
}

export function DialogOverlay() {
  const { isOpen } = useDialog();

  const shouldReduceMotion = useReducedMotion();

  const overlayVariants: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { ease: [0.19, 1, 0.22, 1], duration: 0.4 },
  };

  const Comp = shouldReduceMotion ? "div" : motion.div;

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && (
        <RadixDialog.Overlay className="fixed top-0 left-0 size-full z-[999]">
          <Comp className="fixed inset-0 bg-black/80" {...overlayVariants} />
        </RadixDialog.Overlay>
      )}
    </AnimatePresence>
  );
}

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof RadixDialog.Close
>;

export function DialogContent({ children, className }: DialogContentProps) {
  const { isOpen } = useDialog();

  const shouldReduceMotion = useReducedMotion();

  const contentVariants: AnimationProps = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { ease: [0.19, 1, 0.22, 1], duration: 0.4 },
  };

  const Comp = shouldReduceMotion ? "div" : motion.div;

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && (
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
      )}
    </AnimatePresence>
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
