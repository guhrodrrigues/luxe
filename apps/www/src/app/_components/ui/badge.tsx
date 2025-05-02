"use client"; // @NOTE: Add in case you are using Next.js

import { motion } from "motion/react";
import * as Slot from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

type Variant = {
  variant: string;
  component: React.FC<React.ComponentProps<"div">>;
};

const variants: readonly Variant[] = [
  {
    variant: "default",
    component: ({ children, ...props }) => (
      <div
        {...props}
        className={cn(
          "group relative overflow-hidden w-fit rounded-full font-medium text-neutral-200",
          "bg-[#161616] shadow-inner shadow-neutral-400 border border-transparent",
          "dark:to-neutral-500/60 transition-all duration-200 dark:shadow-neutral-800/80",
        )}
        style={{ padding: "var(--py) var(--px)" }}
      >
        <span className="relative z-10">{children}</span>
        <div
          aria-hidden
          className={cn(
            "absolute z-0 inset-0 size-full bg-gradient-to-t from-neutral-500/40 duration-200 ease-out",
            "dark:from-neutral-900/40 dark:to-neutral-800/60 opacity-0 group-hover:opacity-100",
          )}
        />
      </div>
    ),
  },
  {
    variant: "outline",
    component: ({ children, ...props }) => (
      <div
        {...props}
        className={cn(
          "group relative overflow-hidden w-fit rounded-full font-medium",
          "text-neutral-700 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800",
          "hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all duration-200",
        )}
        style={{ padding: "var(--py) var(--px)" }}
      >
        <span className="relative z-10">{children}</span>
      </div>
    ),
  },
  {
    variant: "success",
    component: ({ children, ...props }) => (
      <div
        {...props}
        className="rounded-full bg-gradient-to-t from-green-600 to-green-500 font-medium text-white"
        style={{ padding: "var(--py) var(--px)" }}
      >
        {children}
      </div>
    ),
  },
  {
    variant: "destructive",
    component: ({ children, ...props }) => (
      <div
        {...props}
        className="rounded-full bg-gradient-to-t from-red-600 to-red-500 font-medium text-white"
        style={{ padding: "var(--py) var(--px)" }}
      >
        {children}
      </div>
    ),
  },
  {
    variant: "shine",
    component: (props) => (
      <div
        {...props}
        className={cn(
          "animate-shine items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)]",
          "bg-[length:400%_100%] text-neutral-200 transition-colors dark:border-neutral-800",
          "dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] dark:text-neutral-400",
          props.className,
        )}
        style={{ padding: "var(--py) var(--px)" }}
      />
    ),
  },
  {
    variant: "animated-border",
    component: ({ children, ...props }) => (
      <div
        {...props}
        className={cn(
          "relative rounded-full border border-black/10 dark:border-white/10 duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-900",
          props.className,
        )}
        style={{ padding: "var(--py) var(--px)" }}
      >
        <div
          className={cn(
            "absolute -inset-px rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] pointer-events-none",
            "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
          )}
        >
          <motion.div
            className={cn(
              "absolute aspect-square bg-gradient-to-r from-transparent via-neutral-300 to-neutral-400",
              "dark:from-transparent dark:via-neutral-600 dark:to-neutral-400",
            )}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 18,
              offsetPath: `rect(0 auto auto 0 round ${18}px)`,
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />
        </div>
        <span className="relative z-10 text-neutral-500 dark:text-neutral-400">
          {children}
        </span>
      </div>
    ),
  },
  {
    variant: "rotate-border",
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          "relative inline-flex overflow-hidden rounded-full p-px",
          className,
        )}
      >
        <span
          className={cn(
            "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]",
            "dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]",
          )}
        />
        <span
          className={cn(
            "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-100 text-neutral-500 backdrop-blur-3xl dark:bg-neutral-950 dark:text-neutral-100",
          )}
          style={{ padding: "var(--py) var(--px)" }}
        >
          {children}
        </span>
      </div>
    ),
  },
] as const;

export type BadgeProps = {
  variant?: (typeof variants)[number]["variant"];
} & React.ComponentProps<"div">;

export function Badge({ variant = "default", ...props }: BadgeProps) {
  const FALLBACK_INDEX = 0;

  const variantComponent = variants.find(
    (v) => v.variant === variant,
  )?.component;

  if (!variantComponent) {
    return variants[FALLBACK_INDEX].component(props);
  }

  return (
    <Slot.Root
      className="text-xs font-medium"
      style={
        {
          "--px": "0.75rem",
          "--py": "0.25rem",
        } as React.CSSProperties
      }
    >
      {variantComponent
        ? variantComponent(props)
        : variants[FALLBACK_INDEX].component(props)}
    </Slot.Root>
  );
}
