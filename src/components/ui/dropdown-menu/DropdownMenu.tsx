"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

import { useMenuAnimation } from "./use-menu-animation/useMenuAnimation";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

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
        <li className="text-neutral-300">Product</li>
        <li className="text-neutral-300">Services</li>
        <li className="text-neutral-300">About</li>
        <li className="text-neutral-300">FAQ</li>
        <li className="text-neutral-300">Contact</li>
      </ul>
    </nav>
  );
}
