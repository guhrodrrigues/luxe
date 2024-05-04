"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type AnimateEnterProps = {
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

export function AnimateEnter({
  className,
  delay,
  children,
}: AnimateEnterProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
