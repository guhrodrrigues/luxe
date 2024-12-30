"use client";

import { useEffect, useState } from "react";

import { motion, SpringOptions, useSpring, useTransform } from "motion/react";

import { cn } from "@/utils/cn";

export function AnimatedNumber({ value }: { value: number }) {
  const [newValue, setNewValue] = useState(0);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  return (
    <Animation
      value={newValue}
      springOptions={{
        bounce: 0,
        duration: 3500,
      }}
    />
  );
}

type AnimationProps = {
  value: number;
  springOptions?: SpringOptions;
} & React.ComponentProps<"span">;

function Animation({ value, className, springOptions }: AnimationProps) {
  const spring = useSpring(value, springOptions);
  const view = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn("tabular-nums", className)}>{view}</motion.span>
  );
}
