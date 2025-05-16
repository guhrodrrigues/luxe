"use client"; // @NOTE: Add in case you are using Next.js

import { useCallback, useState } from "react";

import { AnimatePresence, type Variants, motion } from "motion/react";
import useMeasure from "react-use-measure";

import { cn } from "@/utils/cn";

const STEPS = [
  {
    title: "Luxe",
    description:
      "A library of components ready for you to copy and paste, designed to illuminate your apps with elegance, sophistication and a unique touch of style.",
  },
  {
    title: "How to use?",
    description:
      "Simply click on a component, copy the code and paste it into your project. This will give your app an extra shine.",
  },
  {
    title: "Results",
    description:
      "Luxe will add extra shine to your application, with smooth components.",
  },
  {
    title: "Copy now",
    description:
      "Elevate your project with sophisticated, ready to use components. Illuminate up your app quickly, easily and effortlessly!",
  },
];

export function MultiStepModal() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, { height: heightContent }] = useMeasure();

  const handleSetActiveIdx = useCallback(
    (idx: number) => {
      if (activeIdx < 0) setActiveIdx(0);
      if (activeIdx >= STEPS.length) setActiveIdx(STEPS.length - 1);

      const direction = idx > activeIdx ? 1 : -1;
      setDirection(direction);
      setActiveIdx(idx);
    },
    [activeIdx],
  );

  const variants: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      height: heightContent > 0 ? heightContent : "auto",
      position: "absolute",
      x: direction > 0 ? 370 : -370,
    }),
    animate: {
      opacity: 1,
      height: heightContent > 0 ? heightContent : "auto",
      position: "relative",
      x: 0,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      x: direction < 0 ? 370 : -370,
      top: 0,
      width: "100%",
    }),
  };

  return (
    <div className="w-[370px] overflow-hidden rounded-xl border border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#111111]">
      <div className="relative">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={activeIdx}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <div ref={ref} className="px-4 py-5">
              <h3 className="mb-2 font-medium text-neutral-700 dark:text-neutral-100">
                {STEPS[activeIdx].title}
              </h3>
              <p className="text-[15px] text-neutral-500 dark:text-neutral-400">
                {STEPS[activeIdx].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 border-t border-[#dddddd] bg-neutral-100 dark:border-[#222222] dark:bg-[#0f0f0f]">
          <div className="flex items-center justify-between px-4 py-2">
            <button
              disabled={activeIdx === 0}
              onClick={() => handleSetActiveIdx(activeIdx - 1)}
              className={cn(
                "h-8 w-24 rounded-full border border-neutral-300 bg-neutral-100 px-3 text-[13px] font-medium text-black dark:text-white",
                "disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-[#171717]",
              )}
            >
              Back
            </button>
            <button
              disabled={activeIdx === STEPS.length - 1}
              onClick={() => {
                if (activeIdx === STEPS.length - 1) return;

                handleSetActiveIdx(activeIdx + 1);
              }}
              className={cn(
                "h-8 w-24 rounded-full border border-neutral-300 bg-neutral-100 px-3 text-[13px] font-medium text-black dark:text-white",
                "disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-[#171717]",
              )}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
