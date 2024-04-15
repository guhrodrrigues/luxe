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
        "relative flex w-full max-w-full flex-wrap items-center justify-center",
        containerClassName
      )}
    >
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => setActiveIdx(index)}
          className={cn(
            "relative z-[1] rounded-full px-4 py-2",
            { "z-0": activeIdx === index },
            tabClassName
          )}
        >
          {activeIdx === index && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute inset-0 rounded-full bg-white",
                activeTabClassName
              )}
            />
          )}

          <span
            className={cn(
              "relative block font-medium",
              activeIdx === index ? "text-black delay-100" : "text-neutral-400"
            )}
          >
            {tab.title}
          </span>
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
    <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center">
      <Tabs tabs={tabs} />
    </div>
  );
}
