import { MultiStepModal } from "@/app/_components/OldMultiStepModal";
import { AnimatedTabs } from "@/app/_components/ui/animated-tabs";
import { TooltipExample } from "@/app/ui/_components/examples/TooltipExample";
import { ComponentView } from "@/app/ui/_components/ComponentView";

import { AnimateEnter } from "../AnimateEnter";

import { cn } from "@/utils/cn";
import { AccordionExample } from "@/app/ui/_components/examples/AccordionExample";
import { Button } from "@/app/_components/ui/button";
import { Text } from "@/app/_components/ui/text";
import { DropdownMenuExample } from "@/app/ui/_components/examples/DropdownMenuExample";

const COMPONENTS_EXAMPLE = [
  {
    component: (
      <Text variant="generate-effect">This is a text generation effect.</Text>
    ),
    isReloadAnimation: true,
  },
  { component: <Button variant="shine">Button</Button> },
  { component: <TooltipExample /> },
  {
    component: <DropdownMenuExample />,
    className: "md:col-span-1",
    componentViewClassName: "min-h-[350px]",
  },
  {
    component: <MultiStepModal />,
    className: "md:col-span-2",
    componentViewClassName: "min-h-[350px]",
  },
  {
    component: <AccordionExample />,
    className: "md:col-span-2",
    componentViewClassName: "min-h-[300px]",
  },
  {
    component: <Text variant="shine">Generating code...</Text>,
    componentViewClassName: "min-h-[300px]",
  },
  {
    component: <Button variant="rotate-border">Button</Button>,
    componentViewClassName: "min-h-[300px]",
  },
  {
    component: (
      <AnimatedTabs tabs={["All Posts", "Interactions", "Resources", "Docs"]} />
    ),
    className: "md:col-span-2",
    componentViewClassName: "min-h-[300px]",
  },
];

export function ComponentsExample() {
  return (
    <div className="grid gap-5 md:grid-cols-3 w-full">
      {COMPONENTS_EXAMPLE.map(
        (
          { isReloadAnimation, component, className, componentViewClassName },
          idx,
        ) => (
          <AnimateEnter key={idx} delay={idx * 0.03} className={className}>
            <ComponentView
              isReloadAnimation={isReloadAnimation}
              className={cn(
                "flex min-h-[250px] items-center justify-center",
                componentViewClassName,
              )}
            >
              {component}
            </ComponentView>
          </AnimateEnter>
        ),
      )}
    </div>
  );
}
