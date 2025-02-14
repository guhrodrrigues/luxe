"use client"; // @NOTE: Add in case you are using Next.js

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

import { cn } from "@/registry/utils/cn";

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

type DropdownMenuProps = React.ComponentProps<"nav">;

export function DropdownMenu({ className, ...props }: DropdownMenuProps) {
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
        "!text-red-500 duration-150 hover:!bg-red-600/10 focus-visible:text-red-500 focus-visible:!bg-red-500/10 focus-visible:!border-red-500/10",
    },
  ];

  return (
    <nav
      className={cn("mx-auto w-full max-w-[200px] space-y-2", className)}
      ref={scope}
      {...props}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className={cn(
          "flex w-full max-w-[300px] items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5",
          "focus-visible:border-neutral-300 focus-visible:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:focus-visible:border-neutral-700",
        )}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Settings
        </span>
        <div style={{ transformOrigin: "50% 55%" }}>
          <SettingsIcon size={15} className="text-neutral-400" id="menu-icon" />
        </div>
      </motion.button>
      <ul
        className={cn(
          // @NOTE: Add absolute position to the floating dropdown menu
          "relative z-[1] mx-auto flex w-full max-w-[200px] flex-col gap-1.5 rounded-xl border border-neutral-200 bg-neutral-50 px-1.5 py-2.5 dark:border-neutral-800 dark:bg-neutral-900",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{ clipPath: "inset(10% 50% 90% 50% round 12px)" }}
      >
        {items.map(({ icon, name, customStyle }, index) => (
          <li key={index}>
            <button
              className={cn(
                "group flex w-full items-center gap-2 rounded-lg border border-transparent py-1 text-neutral-500 transition-colors",
                "hover:text-neutral-600 focus-visible:border-neutral-200 focus-visible:text-neutral-600 focus-visible:outline-none",
                "dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus-visible:border-neutral-800 dark:focus-visible:text-neutral-300",
                "select-none px-1.5 hover:bg-neutral-200/40 focus-visible:bg-neutral-200/40 dark:hover:bg-neutral-800/60 dark:focus-visible:bg-neutral-800/60",
                customStyle,
              )}
            >
              {icon}
              <span className="flex items-center gap-1 text-sm font-medium">
                {name}
                <ChevronRightIcon
                  size={12}
                  className="-translate-x-1 scale-0 opacity-0 transition-all group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
