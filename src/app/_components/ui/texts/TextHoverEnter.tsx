"use client"; // @NOTE: add in case you are using Next.js

import { cn } from "@/utils/cn";

import { motion } from "framer-motion";

export function TextHoverEnterExample() {
  return <TextHoverEnter>Hover Me</TextHoverEnter>;
}

const DURATION = 0.25;
const STAGGER = 0.025;

type TextGlitchProps = React.ComponentProps<"div">;

function TextHoverEnter({ children, className }: TextGlitchProps) {
  if (typeof children !== "string") {
    return null;
  }

  const letters = children
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter));

  return (
    <motion.div
      className={cn(
        "relative block overflow-hidden whitespace-nowrap text-base font-medium text-neutral-400",
        className,
      )}
      initial="initial"
      whileHover="hovered"
      style={{ lineHeight: 0.9 }}
    >
      <div>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
