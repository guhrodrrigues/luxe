// @NOTE: in case you are using Next.js
"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { name: "All Posts" },
  { name: "Interactions" },
  { name: "Resources" },
  { name: "Docs" },
];

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].name);
  const containerRef = useRef<any>(null);
  const activeTabElementRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab, activeTabElementRef, containerRef]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      <ul className="relative flex w-full justify-center">
        {TABS.map((tab) => (
          <li key={tab.name}>
            <button
              ref={activeTab === tab.name ? activeTabElementRef : null}
              data-tab={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
              }}
              className="flex h-8 items-center rounded-full p-3 text-sm font-medium text-neutral-200"
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div
        aria-hidden
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
        ref={containerRef}
      >
        <ul className="relative flex w-full justify-center bg-white">
          {TABS.map((tab) => (
            <li key={tab.name}>
              <button
                data-tab={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                }}
                className="flex h-8 items-center rounded-full p-3 text-sm font-medium text-black"
                tabIndex={-1}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
