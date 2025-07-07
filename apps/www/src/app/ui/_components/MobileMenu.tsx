import Link from "next/link";

import { motion } from "motion/react";
import { AnimateEnter } from "@/app/(home)/_components/AnimateEnter";

type MenuItem = {
  category: string;
  items: {
    name: string;
    slug: string;
    isBeta?: boolean;
    isNew?: boolean;
  }[];
};

const MENU: MenuItem[] = [
  {
    category: "Explore",
    items: [
      {
        name: "Home",
        slug: "/",
      },
      {
        name: "Updates",
        slug: "/updates",
      },
    ],
  },
  {
    category: "Get Started",
    items: [
      {
        name: "Installation",
        slug: "/ui/installation",
      },
      {
        name: "CLI",
        slug: "/ui/cli",
        isBeta: true,
      },
    ],
  },
  {
    category: "Components",
    items: [
      {
        name: "Accordion",
        slug: "/ui/accordion",
      },
      {
        name: "Animated Tabs",
        slug: "/ui/animated-tabs",
      },
      {
        name: "Avatar",
        slug: "/ui/avatar",
        isNew: true,
      },
      {
        name: "Badge",
        slug: "/ui/badge",
      },
      {
        name: "Button",
        slug: "/ui/button",
      },
      {
        name: "Card",
        slug: "/ui/card",
      },
      {
        name: "Checkbox",
        slug: "/ui/checkbox",
      },
      {
        name: "Dialog",
        slug: "/ui/dialog",
      },
      {
        name: "Dropdown Menu",
        slug: "/ui/dropdown-menu",
      },
      {
        name: "Input",
        slug: "/ui/input",
      },
      {
        name: "Input OTP",
        slug: "/ui/input-otp",
        isNew: true,
      },
      {
        name: "Multi Step Modal",
        slug: "/ui/multi-step-modal",
      },
      {
        name: "Navigation Menu",
        slug: "/ui/navigation-menu",
        isNew: true,
      },
      {
        name: "Spinner",
        slug: "/ui/spinner",
      },
      {
        name: "Switch",
        slug: "/ui/switch",
      },
      {
        name: "Text",
        slug: "/ui/text",
      },
      {
        name: "Tooltip",
        slug: "/ui/tooltip",
      },
    ],
  },
];

type MobileMenuProps = {
  handleClose: () => void;
};

export function MobileMenu({ handleClose }: MobileMenuProps) {
  return (
    <motion.div
      key="mobile-menu"
      className="fixed h-screen w-full bg-background z-[49] inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
    >
      <div className="relative flex h-full flex-col gap-12 overflow-y-auto px-6 pt-[5.6rem] pb-10 no-scrollbar">
        {MENU.map(({ category, items }, index) => (
          <div key={index} className="flex flex-col gap-4">
            <AnimateEnter
              delay={(index + 1) * 0.05}
              duration={0.3}
              isWhileInView={false}
            >
              <span className="font-medium text-foreground text-sm">
                {category}
              </span>
            </AnimateEnter>
            {items.map(({ name, slug, isBeta, isNew }, idx) => (
              <AnimateEnter
                delay={(index + 1) * 0.05 + (idx + 1) * 0.05}
                duration={0.3}
                isWhileInView={false}
              >
                <Link
                  key={slug}
                  href={slug}
                  className="flex items-center gap-1.5 text-3xl font-medium tracking-tight text-primary"
                  onClick={handleClose}
                >
                  {name}
                  {isBeta && (
                    <span className="text-xs -mb-[0.74rem] text-amber-600 dark:text-amber-500">
                      Beta
                    </span>
                  )}
                  {isNew && (
                    <span className="text-xs -mb-[0.74rem] text-yellow-500 dark:text-[#eaec8a]">
                      New
                    </span>
                  )}
                </Link>
              </AnimateEnter>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
