"use client";

import { motion } from "motion/react";

import { cn } from "@/utils/cn";

type AnimateEnterProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
  isWhileInView?: boolean;
  duration?: number;
};

export function AnimateEnter({
  className,
  delay,
  children,
  duration = 0.4,
  isWhileInView = true,
}: AnimateEnterProps) {
  if (!isWhileInView) {
    return (
      <motion.div
        className={cn(className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, ease: "easeOut", delay: delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration, ease: "easeOut", delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
