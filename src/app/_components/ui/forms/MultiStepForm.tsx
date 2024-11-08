// @NOTE: in case you are using Next.js
"use client";

import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, Variants, motion } from "framer-motion";

import { cn } from "@/utils/cn";

type ButtonProps = {
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline";
} & React.ComponentProps<"button">;

function Button({ children, onClick, variant = "outline" }: ButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn("h-[30px] rounded-lg px-3 text-sm font-medium", {
        "bg-gradient-to-b from-white to-neutral-300 text-black":
          variant === "primary",
        "border border-neutral-800 bg-gradient-to-b from-neutral-700 to-neutral-800 text-white":
          variant === "secondary",
        "border border-neutral-800 text-neutral-300": variant === "outline",
      })}
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export function MultiStepForm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, { height: heightContent }] = useMeasure();

  const STEPS = [
    {
      title: "Luxe",
      description:
        "Illuminate your applications with elegance and sophistication.",
    },
    {
      title: "How to use?",
      description:
        "Simply click on a component, copy the code and paste it into your project.",
    },
    {
      title: "Results",
      description:
        "Luxe will add extra shine to your application, with smooth components.",
    },
    {
      title: "Copy now",
      description: "Elevate your project with sophisticated components!",
    },
  ];

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= STEPS.length) setActiveIndex(STEPS.length - 1);
  }, [activeIndex]);

  const variants: Variants = {
    initial: {
      y: 50,
      opacity: 0,
      filter: "blur(4px)",
      height: heightContent || "auto",
      position: "initial",
    },
    animate: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      height: heightContent || "auto",
    },
    exit: {
      zIndex: 0,
      y: -50,
      opacity: 0,
      filter: "blur(4px)",
      position: "absolute",
      top: 0,
      width: "100%",
    },
  };

  return (
    <div className="w-[364px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
      <div className="relative">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={activeIndex}
            ref={ref}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div className="px-4 pt-4">
              <h3 className="mb-2 font-medium text-zinc-800 dark:text-zinc-100">
                {STEPS[activeIndex].title}
              </h3>
              <p className="text-neutral-300">
                {STEPS[activeIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-10 bg-neutral-900">
        <div className="mx-auto mt-4 h-px w-full max-w-xs border-t border-dashed border-neutral-800" />
        <div className="flex items-center justify-between p-4">
          {activeIndex > 0 ? (
            <Button
              variant="outline"
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              Previous
            </Button>
          ) : (
            <div />
          )}
          <Button
            variant={activeIndex === STEPS.length - 1 ? "secondary" : "primary"}
            onClick={() =>
              activeIndex === STEPS.length - 1
                ? null
                : setActiveIndex(activeIndex + 1)
            }
          >
            {activeIndex === STEPS.length - 1 ? "Close" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
}
