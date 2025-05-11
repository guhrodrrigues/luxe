"use client"; // @NOTE: Add in case you are using Next.js

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import * as Slot from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

type Variant = {
  variant: string;
  component: React.FC<React.ComponentProps<"div">>;
};

const variants: readonly Variant[] = [
  {
    variant: "default",
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          "relative px-4 py-5 bg-neutral-100 dark:bg-neutral-950 rounded-xl border border-black/10 dark:border-white/10",
          className,
        )}
      >
        {children}
      </div>
    ),
  },
  {
    variant: "animated-border",
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          "relative px-4 py-5 rounded-xl border border-black/10 dark:border-white/10",
          className,
        )}
      >
        <div
          className={cn(
            "absolute -inset-px rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] pointer-events-none",
            "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
          )}
        >
          <motion.div
            className={cn(
              "absolute aspect-square bg-gradient-to-r from-transparent via-neutral-400 to-neutral-500",
              "dark:from-transparent dark:via-neutral-600 dark:to-neutral-400",
            )}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            style={{
              width: 42,
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
    variant: "shine",
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          "inline-flex animate-shine items-center justify-center rounded-xl border px-4 py-5",
          "border-white/10 bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)] bg-[length:400%_100%]",
          "text-sm transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)]",
          className,
        )}
      >
        {children}
      </div>
    ),
  },
  {
    variant: "revealed-pointer",
    component: ({ children, className, ...props }) => {
      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);

      return (
        <div
          onMouseMove={(e) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();

            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
          }}
          className="group relative overflow-hidden rounded-xl p-px bg-neutral-200 dark:bg-neutral-900"
        >
          <motion.div
            className={cn(
              "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-20",
              "[--color:var(--color-black)] dark:[--color:var(--color-white)]",
            )}
            style={{
              background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, var(--color), transparent 80%)`,
            }}
          />
          <div
            {...props}
            className={cn(
              "relative px-4 py-5 rounded-xl bg-neutral-100 dark:bg-neutral-950 select-none",
              className,
            )}
          >
            {children}
          </div>
        </div>
      );
    },
  },
] as const;

export type CardProps = {
  variant?: (typeof variants)[number]["variant"];
} & React.ComponentProps<"div">;

export function Card({ variant = "default", className, ...props }: CardProps) {
  const FALLBACK_INDEX = 0;

  const variantComponent = variants.find(
    (v) => v.variant === variant,
  )?.component;

  if (!variantComponent) {
    return variants[FALLBACK_INDEX].component(props);
  }

  return (
    <Slot.Root className="w-full max-w-[350px]">
      {variantComponent
        ? variantComponent({ ...props, className })
        : variants[FALLBACK_INDEX].component({ ...props, className })}
    </Slot.Root>
  );
}
