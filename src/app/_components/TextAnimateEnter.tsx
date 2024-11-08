"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type TextAnimateEnterProps = {
  text: string;
  duration?: number;
  containerClassName?: string;
  initialDelay?: number;
} & React.ComponentProps<"span">;

export function TextAnimateEnter({
  text,
  duration = 0.5,
  containerClassName,
  className,
  initialDelay = 0,
}: TextAnimateEnterProps) {
  return (
    <motion.div
      className={cn("inline-block overflow-hidden", containerClassName)}
    >
      {text.split(" ").map((char, index) => (
        <motion.span
          key={char + index}
          className={cn(
            "whitespace-pre inline-block font-normal text-primary",
            className
          )}
          initial={{ opacity: 0, filter: "blur(4px)", y: "100%" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            ease: "easeOut",
            duration: duration,
            delay: initialDelay + index * 0.005,
          }}
          viewport={{ once: true }}
        >
          {char}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
}
