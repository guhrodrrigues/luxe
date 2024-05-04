"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

import { AnimatedTabs } from "@/app/_components/ui/tabs";
import { GradientLine } from "@/app/_components/GradientLine";
import { DropdownMenu } from "@/app/_components/ui/dropdown";
import {
  CardAnimatedBorder,
  CardBackgroundShine,
  CardRevealedPointer,
} from "@/app/_components/ui/cards";
import {
  ButtonAnimatedBorder,
  ButtonBackgroundShine,
  ButtonDestructive,
  ButtonLoading,
  ButtonRotateBorder,
  ButtonSuccess,
} from "@/app/_components/ui/buttons";
import {
  TextAnimatedDecorationExample,
  TextGlitchExample,
  TextShakeExample,
} from "@/app/_components/ui/texts/examples";
import { TextAnimatedGradient } from "@/app/_components/ui/texts";
import {
  BadgeAnimatedBorder,
  BadgeBackgroundShine,
  BadgeRotateBorder,
} from "@/app/_components/ui/badges";

export function ExampleCode() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [activeValue, setActiveValue] = useState<string>("cards");

  const tabs = [
    {
      name: "Cards",
      value: "cards",
      content: (
        <>
          <CardAnimatedBorder />
          <CardBackgroundShine />
          <CardRevealedPointer />
        </>
      ),
    },
    {
      name: "Buttons",
      value: "buttons",
      content: (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <ButtonAnimatedBorder />
            <ButtonBackgroundShine />
            <ButtonRotateBorder />
          </div>
          <div className="flex items-center gap-2">
            <ButtonLoading />
            <ButtonSuccess />
            <ButtonDestructive />
          </div>
          <div className="flex items-center gap-2">
            <BadgeAnimatedBorder />
            <BadgeBackgroundShine />
            <BadgeRotateBorder />
          </div>
        </div>
      ),
    },
    {
      name: "Navigation",
      value: "navigation",
      content: (
        <div className="max-w-full w-full space-y-8">
          <AnimatedTabs />
          <DropdownMenu />
        </div>
      ),
    },
    {
      name: "Texts",
      value: "texts",
      content: (
        <div className="flex flex-col items-center gap-4">
          <TextAnimatedGradient />
          <TextAnimatedDecorationExample />
          <TextGlitchExample />
          <TextShakeExample />
        </div>
      ),
    },
  ];

  const filteredData = tabs.filter((tab) => tab.value === activeValue);

  return (
    <div className="relative bg-background min-h-[370px] md:min-h-[450px] border border-border rounded-2xl shadow-sm max-w-5xl w-full mx-auto">
      <GradientLine />
      <Navigation
        activeIdx={activeIdx}
        setActiveIdx={setActiveIdx}
        setActiveValue={setActiveValue}
        tabs={tabs}
      />
      <div className="flex justify-center my-12 md:my-28 h-full items-center px-8">
        {filteredData.map(({ value, content }) => (
          <motion.div
            key={value}
            className="flex max-md:flex-col items-center gap-5"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

type NavigationProps = {
  tabs: Array<{
    name: string;
    value: string;
  }>;
  activeIdx: number;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
  setActiveValue: React.Dispatch<React.SetStateAction<string>>;
};

function Navigation({
  tabs,
  activeIdx,
  setActiveIdx,
  setActiveValue,
}: NavigationProps) {
  function tabClick(idx: number, value: string) {
    setActiveIdx(idx);
    setActiveValue(value);
  }

  return (
    <header className="relative flex items-center border-b border-border p-3.5">
      <nav className="flex items-center flex-wrap">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => tabClick(idx, tab.value)}
            className={cn(
              "relative z-[1] border border-transparent rounded-lg px-3 py-2",
              {
                "z-0": activeIdx === idx,
              }
            )}
          >
            {activeIdx === idx && (
              <motion.div
                layoutId="clicked-menu"
                transition={{ duration: 0.2 }}
                className="absolute inset-0 rounded-lg border border-border bg-gradient-to-t from-background via-transparent to-secondary/20"
              />
            )}
            <span
              className={cn(
                "relative text-sm block font-medium duration-200",
                activeIdx === idx ? "text-primary" : "text-secondary"
              )}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}
