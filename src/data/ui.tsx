import {
  ButtonAnimatedBorder,
  ButtonRotateBorder,
  ButtonBackgroundShine,
  ButtonSuccess,
  ButtonError,
  ButtonLoading,
} from "@/components/ui/buttons";

import {
  BadgeAnimatedBorder,
  BadgeRotateBorder,
  BadgeBackgroundShine,
} from "@/components/ui/badges";

import {
  TextGradient,
  TextShine,
  TextAnimatedGradient,
} from "@/components/ui/texts-gradients";

import { AnimatedTabs } from "@/components/ui/animated-tabs";

import { DropdownMenu } from "@/components/ui/dropdown-menu";

type UIProps = Array<{
  slug: string;
  name: string;
  component: JSX.Element;
  colSpan?: boolean;
}>;

export const UI: UIProps = [
  {
    slug: "button-animated-border",
    name: "Button Animated Border",
    component: <ButtonAnimatedBorder />,
  },
  {
    slug: "button-rotate-border",
    name: "Button Rotate Border",
    component: <ButtonRotateBorder />,
  },
  {
    slug: "button-background-shine",
    name: "Button Background Shine",
    component: <ButtonBackgroundShine />,
  },
  {
    slug: "button-loading",
    name: "Button Loading",
    component: <ButtonLoading />,
  },
  {
    slug: "button-success",
    name: "Button Success",
    component: <ButtonSuccess />,
  },
  {
    slug: "button-error",
    name: "Button Error",
    component: <ButtonError />,
  },
  {
    slug: "Badge-animated-border",
    name: "Badge Animated Border",
    component: <BadgeAnimatedBorder />,
  },
  {
    slug: "Badge-rotate-border",
    name: "Badge Rotate Border",
    component: <BadgeRotateBorder />,
  },
  {
    slug: "badge-background-shine",
    name: "Badge Background Shine",
    component: <BadgeBackgroundShine />,
  },
  {
    slug: "text-gradient",
    name: "Text Gradient",
    component: <TextGradient />,
  },
  {
    slug: "text-animated-gradient",
    name: "Text Animated Gradient",
    component: <TextAnimatedGradient />,
  },
  {
    slug: "text-shine",
    name: "Text Shine",
    component: <TextShine />,
  },
  {
    slug: "animated-tabs",
    name: "Animated Tabs",
    component: <AnimatedTabs />,
    colSpan: true,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    component: <DropdownMenu />,
    colSpan: true,
  },
];
