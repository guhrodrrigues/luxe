"use client"; // @NOTE: add in case you are using Next.js

import { useCallback, useState } from "react";

import { AnimatePresence, Variants, motion } from "framer-motion";
import useMeasure from "react-use-measure";

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
      "Elevate your project with sophisticated, ready-to-use components. Illuminate up your app quickly, easily and effortlessly!",
  },
];

export function MultiStepModal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, { height: heightContent }] = useMeasure();

  const handleSetActiveIndex = useCallback(
    (index: number) => {
      if (activeIndex >= STEPS.length) setActiveIndex(STEPS.length - 1);
      if (activeIndex < 0) setActiveIndex(0);

      const newIndex = index;
      const direction = newIndex > activeIndex ? 1 : -1;
      setDirection(direction);

      setActiveIndex(newIndex);
    },
    [activeIndex],
  );

  const variants: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      height: heightContent > 0 ? heightContent : "auto",
      x: direction > 0 ? 370 : -370,
    }),
    animate: {
      opacity: 1,
      height: heightContent > 0 ? heightContent : "auto",
      x: 0,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      opacity: 0,
      x: direction < 0 ? 370 : -370,
      position: "absolute",
      top: 0,
      width: "100%",
    }),
  };

  return (
    <div className="w-[370px] overflow-hidden rounded-xl border border-[#222222] bg-[#111111]">
      <div className="relative">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={activeIndex}
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
              <h3 className="mb-2 font-medium text-zinc-100">
                {STEPS[activeIndex].title}
              </h3>
              <p className="text-[15px] text-neutral-400">
                {STEPS[activeIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 border-t border-[#222222] bg-[#0f0f0f]">
          <div className="flex items-center justify-between px-4 py-2">
            <button
              disabled={activeIndex === 0}
              onClick={() => handleSetActiveIndex(activeIndex - 1)}
              className="h-8 w-24 rounded-full border border-neutral-800 bg-[#171717] px-3 text-[13px] font-medium text-primary shadow disabled:cursor-not-allowed disabled:opacity-50"
            >
              Back
            </button>
            <button
              disabled={activeIndex === STEPS.length - 1}
              onClick={() =>
                activeIndex !== STEPS.length - 1 &&
                handleSetActiveIndex(activeIndex + 1)
              }
              className="h-8 w-24 rounded-full border border-neutral-800 bg-[#171717] px-3 text-[13px] font-medium text-primary shadow disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
