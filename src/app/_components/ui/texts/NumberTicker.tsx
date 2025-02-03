"use client";

import { cn } from "@/utils/cn";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

type NumberTickerProps = {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
} & ComponentPropsWithoutRef<"span">;

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isDown = direction.includes("down");
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const motionValue = useMotionValue(isDown ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(isDown ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <span
      {...props}
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className,
      )}
    />
  );
}
