"use client";

import { Tabs } from "./tabs";

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
