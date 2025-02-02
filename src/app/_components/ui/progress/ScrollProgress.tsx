"use client"; // @NOTE: add in case you are using Next.js

import { cn } from "@/utils/cn";
import { motion, MotionProps, useScroll, useSpring } from "motion/react";
import { ComponentProps, forwardRef } from "react";

type ScrollProgressProps = {} & Omit<ComponentProps<"div">, keyof MotionProps>;

export const ScrollProgress = forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 50,
      restDelta: 0.001,
    });

    return (
      <motion.div
        {...props}
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
          className,
        )}
        style={{
          scaleX,
        }}
      />
    );
  },
);

ScrollProgress.displayName = "ScrollProgress";
