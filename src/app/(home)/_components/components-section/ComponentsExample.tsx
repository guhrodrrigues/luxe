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
import { MultiStepModal } from "@/app/_components/ui/modals";

const COMPONENTS_EXAMPLE = [
  { component: <TextGenerateEffectExample />, isReloadAnimation: true },
  { component: <ButtonBackgroundShine /> },
  { component: <TooltipExample /> },
  {
    component: <DropdownMenu />,
    className: "md:col-span-1",
    componentViewClassName: "min-h-[350px]",
  },
  {
    component: <MultiStepModal />,
    className: "md:col-span-2",
    componentViewClassName: "min-h-[350px]",
  },
  { component: <AnimatedTabs />, className: "md:col-span-3" },
  { component: <CheckboxExample /> },
  { component: <ButtonLoading /> },
  { component: <TextShine /> },
];

export function ComponentsExample() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {COMPONENTS_EXAMPLE.map(
        (
          { isReloadAnimation, component, className, componentViewClassName },
          idx,
        ) => (
          <AnimateEnter key={idx} delay={idx * 0.03} className={className}>
            <ComponentView
              isReloadAnimation={isReloadAnimation}
              className={componentViewClassName}
            >
              {component}
            </ComponentView>
          </AnimateEnter>
        ),
      )}
    </div>
  );
}
