// @NOTE: in case you are using Next.js
"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

function Tabs({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (index: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(index, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center relative max-w-full w-full",
        containerClassName
      )}
    >
      {propTabs.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => {
            moveSelectedTabToTop(index);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={cn(
                "absolute inset-0 bg-neutral-900 rounded-full",
                activeTabClassName
              )}
            />
          )}

          <span className="relative block text-neutral-300">{tab.title}</span>
        </button>
      ))}
    </div>
  );
}

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Product",
      value: "product",
    },
    {
      title: "Services",
      value: "services",
    },
    {
      title: "About",
      value: "about",
    },
  ];

  return (
    <div className="relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
}
