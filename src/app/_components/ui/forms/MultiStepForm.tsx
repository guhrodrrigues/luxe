"use client"; // @NOTE: add in case you are using Next.js

import { useEffect, useState } from "react";

import { AnimatePresence, Variants, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export function MultiStepForm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, { height: heightContent }] = useMeasure();

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

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= STEPS.length) setActiveIndex(STEPS.length - 1);
  }, [activeIndex]);

  function handleSetActiveIndex(index: number) {
    const direction = index > activeIndex ? 1 : -1;
    setDirection(direction);

    setActiveIndex(index);
  }

  const variants: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      height: heightContent > 0 ? heightContent : "auto",
      x: direction > 0 ? 370 : -370,
      position: "initial",
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

  const progressWidth = ((activeIndex + 1) / STEPS.length) * 100;

  return (
    <div className="w-[370px] overflow-hidden rounded-xl border border-[#222222] bg-[#111111]">
      <div className="relative">
        <div className="px-4 pt-4">
          <div className="relative h-1 w-full rounded-full bg-neutral-900">
            <motion.div
              className="h-full rounded-[inherit] bg-neutral-800"
              style={{ width: `${progressWidth}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progressWidth}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={activeIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            custom={direction}
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
          <div className="flex items-center justify-between px-4 py-3">
            <button
              disabled={activeIndex === 0}
              onClick={() => handleSetActiveIndex(activeIndex - 1)}
              className="h-7 rounded-lg border border-neutral-800 bg-[#171717] px-3 text-[13px] font-medium text-primary shadow disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <button
              disabled={activeIndex === STEPS.length - 1}
              onClick={() =>
                activeIndex !== STEPS.length - 1 &&
                handleSetActiveIndex(activeIndex + 1)
              }
              className="h-7 rounded-lg border border-neutral-800 bg-[#171717] px-3 text-[13px] font-medium text-primary shadow disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
