"use client"; // @NOTE: add in case you are using Next.js

import Link from "next/link";

import { useState, useEffect } from "react";

import { useAnimate, stagger, motion } from "motion/react";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  SettingsIcon,
  ChevronRightIcon,
  BellIcon,
} from "lucide-react";

import { cn } from "@/utils/cn";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate("#menu-icon", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(10% 50% 90% 50% round 12px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      },
    );
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
}

type DropdownMenuProps = {
  containerClassName?: string;
  itemClassName?: string;
};

export function DropdownMenu({
  containerClassName,
  itemClassName,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const items = [
    { icon: <UserCircleIcon size={16} />, name: "Profile" },
    { icon: <LayoutGridIcon size={16} />, name: "Your applications" },
    { icon: <Building2 size={16} />, name: "Teams" },
    { icon: <BellIcon size={16} />, name: "Notifications" },
    {
      icon: <TrashIcon size={16} />,
      name: "Remove account",
      customStyle:
        "!text-red-500 hover:bg-red-500/10 focus-visible:text-red-500 focus-visible:bg-red-500/10 focus-visible:border-red-500/10",
    },
  ];

  return (
    <nav
      className={cn(
        "mx-auto w-full max-w-[200px] space-y-2",
        containerClassName,
      )}
      ref={scope}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="flex w-full max-w-[300px] items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900 p-2.5"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="text-sm font-medium text-neutral-300">Settings</span>
        <div style={{ transformOrigin: "50% 55%" }}>
          <SettingsIcon size={14} className="text-neutral-400" id="menu-icon" />
        </div>
      </motion.button>
      <ul
        className={cn(
          "absolute z-[1] w-full max-w-[200px] space-y-3 rounded-xl border border-neutral-800 bg-neutral-900 p-2.5",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{
          clipPath: "inset(10% 50% 90% 50% round 12px)",
        }}
      >
        {items.map(({ icon, name, customStyle }) => (
          <li key={name}>
            <Link
              href="" // Where you will be sent
              className={cn(
                "group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-neutral-300 focus-visible:border-neutral-800 focus-visible:text-neutral-300 focus-visible:outline-none",
                itemClassName,
                customStyle,
              )}
            >
              <span>{icon}</span>
              <span className="flex items-center gap-1 text-sm font-medium">
                {name}
                <ChevronRightIcon
                  size={12}
                  className="-translate-x-1 scale-0 opacity-0 transition-all group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
