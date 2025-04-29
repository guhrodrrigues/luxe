"use client";

import { createContext, useContext, useState } from "react";

import * as RadixAccordion from "@radix-ui/react-accordion";

import { PlusIcon } from "lucide-react";

import { AnimatePresence, Variants, motion } from "motion/react";

import { cn } from "@/utils/cn";

const AccordionContext = createContext(
  {} as {
    isOpen: string | null;
    setIsOpen: (value: string | null) => void;
  },
);

function AccordionProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}

function useAccordion() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("useAccordion must be used within AccordionProvider");
  }

  return context;
}

type AccordionRootProps = React.ComponentProps<typeof RadixAccordion.Root>;

function AccordionRoot({
  children,
  type = "single",
  ...props
}: AccordionRootProps) {
  const { isOpen, setIsOpen } = useAccordion();

  return (
    <RadixAccordion.Root
      type="single"
      value={isOpen ?? undefined}
      onValueChange={(value) => setIsOpen(value)}
      collapsible
      {...props}
    >
      {children}
    </RadixAccordion.Root>
  );
}

export function Accordion({ children, ...props }: AccordionRootProps) {
  return (
    <AccordionProvider>
      <AccordionRoot {...props}>{children}</AccordionRoot>
    </AccordionProvider>
  );
}

type AccordionItemProps = React.ComponentProps<typeof RadixAccordion.Item>;

export function AccordionItem({
  children,
  value,
  className,
  ...props
}: AccordionItemProps) {
  return (
    <RadixAccordion.Item
      value={value}
      className={cn(
        "mt-px overflow-hidden w-full border-b border-neutral-800 last:border-none focus-within:border-neutral-800 focus-within:relative focus-within:z-10",
        className,
      )}
      {...props}
    >
      {children}
    </RadixAccordion.Item>
  );
}

type AccordionTriggerProps = React.ComponentProps<
  typeof RadixAccordion.Trigger
>;

export function AccordionTrigger({
  children,
  className,
  value,
  ...props
}: AccordionTriggerProps) {
  const { isOpen } = useAccordion();

  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        className={cn(
          "group flex h-[45px] text-black dark:text-white flex-1 items-center justify-between px-4 text-[15px] leading-none outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <PlusIcon
          size={18}
          className={cn(
            "text-neutral-500 transition-transform duration-300 ease-out",
            isOpen ? "rotate-45" : "rotate-0",
          )}
          aria-hidden
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}

type AccordionContentProps = React.ComponentProps<
  typeof RadixAccordion.Content
>;

export function AccordionContent({
  children,
  className,
  ...props
}: AccordionContentProps) {
  const { isOpen } = useAccordion();

  const contentVariants: Variants = {
    expanded: { height: "auto", opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  return (
    <RadixAccordion.Content className="overflow-hidden" forceMount {...props}>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={cn("px-4 pb-3", className)}
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </RadixAccordion.Content>
  );
}
