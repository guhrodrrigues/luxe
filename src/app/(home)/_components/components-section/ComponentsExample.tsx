"use client";

import { ComponentView } from "@/app/ui/_components/ComponentView";
import { AnimateEnter } from "../AnimateEnter";
import { BadgeBackgroundShine } from "@/app/_components/ui/badges";
import {
  ButtonLoading,
  ButtonBackgroundShine,
} from "@/app/_components/ui/buttons";
import { CheckboxExample } from "@/app/_components/ui/checkbox/Checkbox";
import { DropdownMenu } from "@/app/_components/ui/dropdown";
import { AnimatedTabs } from "@/app/_components/ui/tabs";
import {
  TextGenerateEffectExample,
  TextHoverEnterExample,
  TextShine,
} from "@/app/_components/ui/texts";
import { TooltipExample } from "@/app/_components/ui/tooltip";

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
      {COMPONENTS_EXAMPLE.map(
        ({ isReloadAnimation, component, className }, idx) => (
          <AnimateEnter key={idx} delay={idx * 0.05} className={className}>
            <ComponentView isReloadAnimation={isReloadAnimation}>
              {component}
            </ComponentView>
          </AnimateEnter>
        ),
      )}
    </div>
  );
}
