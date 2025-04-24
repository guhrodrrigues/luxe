"use client"; // @NOTE: Add in case you are using Next.js

import { useRef, useState } from "react";

import { motion } from "motion/react";
import * as Slot from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

type Variant = {
  variant: string;
  component: React.FC<React.ComponentProps<"button">>;
};

const variants: readonly Variant[] = [
  {
    variant: "default",
    component: ({ children, ...props }) => (
      <button
        {...props}
        className={cn(
          "group relative overflow-hidden w-fit rounded-xl font-medium text-neutral-200",
          "bg-[#161616] text-sm shadow-inner shadow-neutral-400",
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
      </button>
    ),
  },
  {
    variant: "success",
    component: ({ children, ...props }) => (
      <button
        {...props}
        className="rounded-xl bg-gradient-to-t from-green-600 to-green-500 text-sm font-medium text-white"
        style={{ padding: "var(--py) var(--px)" }}
      >
        {children}
      </button>
    ),
  },
  {
    variant: "destructive",
    component: ({ children, ...props }) => (
      <button
        {...props}
        className="rounded-xl bg-gradient-to-t from-red-600 to-red-500 text-sm font-medium text-white"
        style={{ padding: "var(--py) var(--px)" }}
      >
        {children}
      </button>
    ),
  },
  {
    variant: "shine",
    component: (props) => (
      <button
        {...props}
        className={cn(
          "animate-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)]",
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
      <button
        {...props}
        className={cn(
          "group relative grid overflow-hidden rounded-xl shadow-[0_1000px_0_0_hsl(0_0%_85%)_inset]",
          "transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]",
        )}
        style={{ padding: "var(--py) var(--px)" }}
      >
        <span>
          <span
            className={cn(
              "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-xl",
              "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)]",
              "before:rotate-[-90deg] before:animate-rotate dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
              "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] dark:[mask:linear-gradient(white,_transparent_50%)]",
              props.className,
            )}
          />
        </span>
        <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-100 transition-colors duration-200 group-hover:bg-neutral-200 dark:bg-neutral-950 dark:group-hover:bg-neutral-900" />
        <span className="z-10 text-neutral-500 dark:text-neutral-400">
          {children}
        </span>
      </button>
    ),
  },
  {
    variant: "rotate-border",
    component: ({ children, className, ...props }) => (
      <button
        {...props}
        className={cn(
          "relative inline-flex overflow-hidden rounded-xl p-px",
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
            "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-neutral-100 text-neutral-500 backdrop-blur-3xl dark:bg-neutral-950 dark:text-neutral-100",
          )}
          style={{ padding: "var(--py) var(--px)" }}
        >
          {children}
        </span>
      </button>
    ),
  },
  {
    variant: "magnetic",
    component: ({ children, ...props }) => {
      const { ref, handleMouseLeave, handleMouseMove, x, y } = useMagnetic();

      return (
        <motion.button
          ref={ref}
          className={cn(
            "relative rounded-xl bg-black text-white dark:bg-white dark:text-black",
            props.className,
          )}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 150,
            mass: 0.1,
          }}
          style={{ padding: "var(--py) var(--px)" }}
        >
          {children}
        </motion.button>
      );
    },
  },
  {
    variant: "glitch-brightness",
    component: ({ children, ...props }) => {
      function TextGlitch({ children }: { children: React.ReactNode }) {
        return (
          <div className="relative overflow-hidden">
            <span className="invisible">{children}</span>
            <span className="absolute left-0 top-0 font-medium transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
              {children}
            </span>
            <span className="absolute left-0 top-0 translate-y-full font-medium transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
              {children}
            </span>
          </div>
        );
      }

      function Brightness() {
        return (
          <div
            aria-hidden
            className="absolute inset-0 flex h-full w-full animate-brightness justify-center"
          >
            <div className="relative h-full w-8 bg-white/20 blur dark:bg-white/40" />
          </div>
        );
      }

      return (
        <button
          {...props}
          className="group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-black/80 text-sm font-medium text-white duration-300 hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white"
          style={{ padding: "var(--py) var(--px)" }}
        >
          <TextGlitch>{children}</TextGlitch>
          <Brightness />
        </button>
      );
    },
  },
] as const;

export type ButtonProps = {
  variant?: (typeof variants)[number]["variant"];
} & React.ComponentProps<"button">;

export function Button({ variant = "default", ...props }: ButtonProps) {
  const FALLBACK_INDEX = 0;

  const variantComponent = variants.find(
    (v) => v.variant === variant,
  )?.component;

  if (!variantComponent) {
    return variants[FALLBACK_INDEX].component(props);
  }

  return (
    <Slot.Root
      className="text-sm font-medium"
      style={
        {
          "--px": "1rem",
          "--py": "0.5rem",
        } as React.CSSProperties
      }
    >
      {variantComponent
        ? variantComponent(props)
        : variants[FALLBACK_INDEX].component(props)}
    </Slot.Root>
  );
}

// HOOKS ↴

function useMagnetic() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<any>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  const { x, y } = position;

  return { ref, handleMouseMove, handleMouseLeave, x, y };
}
