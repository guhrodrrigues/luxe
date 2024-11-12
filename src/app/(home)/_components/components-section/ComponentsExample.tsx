"use client";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "@/app/ui/_components/component-page/ComponentView";
import { AnimateEnter } from "../AnimateEnter";

export function ComponentsExample() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {COMPONENTS.slice(5, 17).map((el, index) => (
        <AnimateEnter key={index} delay={index * 0.05}>
          <ComponentView isReloadAnimation={el.isReloadAnimation}>
            {el.component}
          </ComponentView>
        </AnimateEnter>
      ))}
    </div>
  );
}
