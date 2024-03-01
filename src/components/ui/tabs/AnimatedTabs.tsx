// @NOTE: in case you are using Next.js
"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
};

function Tabs({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center relative max-w-full w-full",
        containerClassName
      )}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => setActiveIdx(index)}
          className={cn(
            "relative px-4 py-2 rounded-full z-[1]",
            { "z-0": activeIdx === index},
            tabClassName
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {activeIdx === index && (
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
