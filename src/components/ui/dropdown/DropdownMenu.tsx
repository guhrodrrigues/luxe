// @NOTE: in case you are using Next.js
"use client";

import { useState, useEffect } from "react";

import { useAnimate, stagger, motion } from "framer-motion";

import { cn } from "@/utils/cn";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate("svg", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

  return scope;
}

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const items = [
    { name: "Product" },
    { name: "Services" },
    { name: "About" },
    { name: "FAQ" },
    { name: "Contact" },
  ];

  return (
    <nav className="max-w-[300px] w-full mx-auto space-y-2" ref={scope}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="bg-neutral-900 text-neutral-300 max-w-[300px] w-full flex items-center justify-between p-2.5 rounded-xl"
      >
        Menu
        <div style={{ transformOrigin: "50% 55%" }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 20 20"
            className="fill-neutral-400"
          >
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
      <ul
        className={cn(
          "space-y-2.5 p-2.5 bg-neutral-900",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        {items.map(({ name }) => (
          <li key={name} className="text-neutral-300">
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
