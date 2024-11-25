"use client"; // @NOTE: add in case you are using Next.js

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/utils/cn";

type CardHoverEffectProps = {
  containerClassName?: string;
  itemClassName?: string;
  hoveredItemClassName?: string;
};

export function CardHoverEffect({
  containerClassName,
  itemClassName,
  hoveredItemClassName,
}: CardHoverEffectProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = [
    {
      title: "Luxe",
      description: "Explore the new library of components copy and paste.",
      href: "https://luxeui.com",
    },
    {
      title: "Luxe",
      description: "Explore the new library of components copy and paste.",
      href: "https://luxeui.com",
    },
    {
      title: "Luxe",
      description: "Explore the new library of components copy and paste.",
      href: "https://luxeui.com",
    },
  ];

  return (
    <div className={cn("grid md:grid-cols-3", containerClassName)}>
      {items.map((item, idx) => {
        const { title, description, href } = item;

        return (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("relative flex flex-col gap-3 p-4", itemClassName)}
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
            <div className="z-[1] space-y-3">
              <h1 className="font-medium text-white">{title}</h1>
              <p className="text-neutral-400">{description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
