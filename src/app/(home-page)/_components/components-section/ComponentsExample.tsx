"use client";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "@/app/(ui-page)/ui/_components/component-page/ComponentView";
import { AnimateEnter } from "../AnimateEnter";

export function ComponentsExample() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {COMPONENTS.slice(0, 12).map((el, index) => (
        <AnimateEnter key={index} delay={index * 0.1}>
          <ComponentView>{el.component}</ComponentView>
        </AnimateEnter>
      ))}
    </div>
  );
}
