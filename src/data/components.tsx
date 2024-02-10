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
} from "@/components/ui/texts";

import { AnimatedTabs } from "@/components/ui/tabs";

import { DropdownMenu } from "@/components/ui/dropdown";

const TWCONFIG = {
  ["animated-border"]: {
    animation: {
      flip: "flip 6s infinite steps(2, end)",
      rotate: "rotate 3s linear infinite both",
    },
    keyframes: {
      flip: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      rotate: {
        to: {
          transform: "rotate(90deg)",
        },
      },
    },
  },
  ["shine"]: {
    animation: {
      shine: "shine 2s linear infinite",
    },
    keyframes: {
      shine: {
        from: { backgroundPosition: "0 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
  },
  ["border-width"]: {
    animation: {
      "border-width": "border-width 3s infinite alternate",
    },
    keyframes: {
      "border-width": {
        from: { width: "10px", opacity: "0" },
        to: { width: "100px", opacity: "1" },
      },
    },
  },
  ["text-gradient"]: {
    animation: {
      "text-gradient": "text-gradient 1.5s linear infinite",
    },
    keyframes: {
      "text-gradient": {
        to: {
          backgroundPosition: "200% center",
        },
      },
    },
  },
};

export const COMPONENTS = [
  {
    name: "Button Animated Border",
    slug: "button-animated-border",
    component: <ButtonAnimatedBorder />,
    type: "buttons",
    twConfig: TWCONFIG["animated-border"],
  },
  {
    name: "Button Rotate Border",
    slug: "button-rotate-border",
    component: <ButtonRotateBorder />,
    type: "buttons",
  },
  {
    name: "Button Background Shine",
    slug: "button-background-shine",
    component: <ButtonBackgroundShine />,
    type: "buttons",
    twConfig: TWCONFIG["shine"],
  },
  {
    name: "Button Loading",
    slug: "button-loading",
    component: <ButtonLoading />,
    type: "buttons",
  },
  {
    name: "Button Success",
    slug: "button-success",
    component: <ButtonSuccess />,
    type: "buttons",
  },
  {
    name: "Button Error",
    slug: "button-error",
    component: <ButtonError />,
    type: "buttons",
  },
  {
    name: "Badge Animated Border",
    slug: "Badge-animated-border",
    component: <BadgeAnimatedBorder />,
    type: "badges",
    twConfig: TWCONFIG["animated-border"],
  },
  {
    name: "Badge Rotate Border",
    slug: "Badge-rotate-border",
    component: <BadgeRotateBorder />,
    type: "badges",
  },
  {
    name: "Badge Background Shine",
    slug: "badge-background-shine",
    component: <BadgeBackgroundShine />,
    type: "badges",
    twConfig: TWCONFIG["shine"],
  },
  {
    name: "Text Gradient",
    slug: "text-gradient",
    component: <TextGradient />,
    type: "texts",
  },
  {
    name: "Text Animated Gradient",
    slug: "text-animated-gradient",
    component: <TextAnimatedGradient />,
    type: "texts",
    twConfig: TWCONFIG["text-gradient"],
  },
  {
    name: "Text Shine",
    slug: "text-shine",
    component: <TextShine />,
    type: "texts",
    twConfig: TWCONFIG["shine"],
  },
  {
    name: "Animated Tabs",
    slug: "animated-tabs",
    component: <AnimatedTabs />,
    colSpan: true,
    type: "tabs",
    download: "npm i framer-motion clsx tailwind-merge",
    cnFunction: true,
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    component: <DropdownMenu />,
    colSpan: true,
    type: "dropdown",
    download: "npm i framer-motion clsx tailwind-merge",
    cnFunction: true,
  },
];
