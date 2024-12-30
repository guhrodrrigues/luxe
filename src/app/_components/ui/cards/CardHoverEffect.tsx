"use client"; // @NOTE: add in case you are using Next.js

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/utils/cn";

type CardHoverEffectProps = {
  containerClassName?: string;
  className?: string;
  hoveredItemClassName?: string;
} & React.ComponentProps<"div">;

export function CardHoverEffect({
  containerClassName,
  className,
  hoveredItemClassName,
}: CardHoverEffectProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const ITEMS = [
    {
      title: "Luxe",
      description: "Explore the new library of components copy and paste.",
    },
    {
      title: "Luxe",
      description: "Explore the new library of components copy and paste.",
    },
    {
      title: "Luxe",
      description: "Explore the new library of components copy and paste.",
    },
  ];

  return (
    <div className={cn("grid md:grid-cols-3", containerClassName)}>
      {ITEMS.map(({ title, description }, idx) => (
        <div
          key={idx}
          className={cn("relative flex flex-col gap-3 p-4", className)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <AnimatePresence>
            {hoveredIdx === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 z-0 block h-full w-full rounded-xl bg-neutral-900",
                  hoveredItemClassName,
                )}
                layoutId="cardHoverEffect"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="z-[1] select-none space-y-3">
            <h1 className="font-medium text-white">{title}</h1>
            <p className="text-neutral-400">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
