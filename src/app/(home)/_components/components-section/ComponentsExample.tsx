"use client";

import { ComponentView } from "@/app/ui/_components/ComponentView";
import { AnimateEnter } from "../AnimateEnter";
import {
  TextGenerateEffectExample,
  TextHoverEnterExample,
  TextShine,
} from "@/app/_components/ui/texts";
import { TooltipExample } from "@/app/_components/ui/tooltip";
import {
  ButtonBackgroundShine,
  ButtonLoading,
} from "@/app/_components/ui/buttons";
import { CheckboxExample } from "@/app/_components/ui/checkbox/Checkbox";
import { BadgeBackgroundShine } from "@/app/_components/ui/badges";
import { DropdownMenu } from "@/app/_components/ui/dropdown";
import { AnimatedTabs } from "@/app/_components/ui/tabs";

const COMPONENTS_EXAMPLE = [
  { component: <TextGenerateEffectExample />, isReloadAnimation: true },
  { component: <TooltipExample /> },
  { component: <TextHoverEnterExample /> },
  { component: <BadgeBackgroundShine /> },
  { component: <DropdownMenu /> },
  { component: <CheckboxExample /> },
  { component: <ButtonLoading /> },
  { component: <TextShine /> },
  { component: <ButtonBackgroundShine /> },
  { component: <AnimatedTabs />, className: "md:col-span-3" },
];

export function ComponentsExample() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {COMPONENTS_EXAMPLE.map((el, index) => (
        <AnimateEnter key={index} delay={index * 0.05} className={el.className}>
          <ComponentView isReloadAnimation={el.isReloadAnimation}>
            {el.component}
          </ComponentView>
        </AnimateEnter>
      ))}
    </div>
  );
}
