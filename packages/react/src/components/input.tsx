"use client"; // @NOTE: Add in case you are using Next.js

import { useState } from "react";

import { AnimatePresence, motion, type Variants } from "motion/react";

import { cn } from "@/utils/cn";

export type InputProps = React.ComponentPropsWithRef<"input">;
type FieldState = "idle" | "filled";

export function Input({
  placeholder,
  onChange,
  className,
  ...props
}: InputProps) {
  const [fieldState, setFieldState] = useState<FieldState>("idle");

  const animatedPlaceholderVariants: Variants = {
    show: {
      x: 0,
      opacity: 1,
      filter: "blur(var(--blur-none))",
    },
    hidden: {
      x: 28,
      opacity: 0,
      filter: "blur(var(--blur-xs))",
    },
  };

  return (
    <div
      className={cn(
        "relative inline-flex h-11 w-64 items-center overflow-hidden rounded-xl border border-border bg-main-secondary shadow-xs transition-colors ease-out focus-within:border-primary data-[filled=true]:border-border",
        "has-disabled:opacity-80 has-disabled:*:cursor-not-allowed",
        className,
      )}
      data-filled={fieldState === "filled"}
    >
      <input
        {...props}
        className={cn(
          "peer h-full flex-1 bg-transparent px-3 py-2 caret-primary outline-none placeholder:sr-only",
          "font-normal font-sans text-primary-foreground text-sm/5.5 ",
        )}
        placeholder={placeholder}
        onChange={(event) => {
          setFieldState(event.target.value.length > 0 ? "filled" : "idle");
          onChange?.(event);
        }}
      />

      <AnimatePresence mode="popLayout" initial={false}>
        {fieldState !== "filled" && (
          <motion.span
            className={cn(
              "pointer-events-none absolute left-3",
              "font-normal font-sans text-primary-muted/70 text-sm/5.5",
            )}
            variants={animatedPlaceholderVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{
              type: "spring",
              duration: 0.6,
              bounce: 0,
            }}
          >
            {placeholder}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
