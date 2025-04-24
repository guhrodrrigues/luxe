"use client"; // @NOTE: Add in case you are using Next.js

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

import * as Slot from "@radix-ui/react-slot";

import { cn } from "@/registry/utils/cn";

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
          "relative bg-[#161616] rounded-xl shadow-inner shadow-neutral-400 dark:to-neutral-500/60 dark:shadow-neutral-800/80",
          className,
        )}
        style={{ padding: "var(--py) var(--px)" }}
      >
        {children}
      </div>
    ),
  },
  {
    variant: "animated-border",
    component: ({ children, className, ...props }) => (
      <div
        className={cn(
          "group relative grid overflow-hidden rounded-xl shadow-[0_1000px_0_0_hsl(0_0%_85%)_inset]",
          "transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]",
        )}
        style={{ padding: "var(--py) var(--px)" }}
      >
        <span
          aria-hidden
          className={cn(
            "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-xl",
            "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%]",
            "before:bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)] dark:[mask:linear-gradient(white,_transparent_50%)]",
            "before:rotate-[-90deg] before:animate-rotate dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
            "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
          )}
        />
        <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-100 transition-colors duration-200 dark:bg-neutral-950" />
        <div className="relative z-10">
          <div {...props} className={cn(className)}>
            {children}
          </div>
        </div>
      </div>
    ),
  },
  {
    variant: "background-shine",
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          "inline-flex animate-shine items-center justify-center rounded-xl border",
          "border-white/10 bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)] bg-[length:400%_100%]",
          "text-sm transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)]",
          className,
        )}
        style={{ padding: "var(--py) var(--px)" }}
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

      const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15), transparent 80%)`;

      return (
        <div
          onMouseMove={(e) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();

            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
          }}
          className="group relative overflow-hidden rounded-xl bg-neutral-950"
        >
          <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: background,
            }}
          />
          <div
            {...props}
            className={cn(
              "relative rounded-xl border border-white/10 select-none",
              className,
            )}
            style={{ padding: "var(--py) var(--px)" }}
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

export function Card({ variant = "default", ...props }: CardProps) {
  const FALLBACK_INDEX = 0;

  const variantComponent = variants.find(
    (v) => v.variant === variant,
  )?.component;

  if (!variantComponent) {
    return variants[FALLBACK_INDEX].component(props);
  }

  return (
    <Slot.Root
      className="w-full max-w-[350px]"
      style={
        {
          "--px": "1rem",
          "--py": "1.25rem",
        } as React.CSSProperties
      }
    >
      {variantComponent
        ? variantComponent(props)
        : variants[FALLBACK_INDEX].component(props)}
    </Slot.Root>
  );
}
