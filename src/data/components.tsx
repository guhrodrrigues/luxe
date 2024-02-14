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
  CardAnimatedBorder,
  CardBackgroundShine,
  CardComment,
  CardRevealedPointer,
} from "@/components/ui/cards";

import { AnimatedTabs } from "@/components/ui/tabs";
import { DropdownMenu } from "@/components/ui/dropdown";

import {
  TextGradient,
  TextShine,
  TextAnimatedGradient,
} from "@/components/ui/texts";

import {
  TextAnimatedDecorationExample,
  TextGlitchExample,
  TextShakeExample,
} from "@/components/ui/texts/examples";

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
  ["text-shake"]: {
    animation: {
      "text-shake": "text-shake 1s ease 1",
    },
    keyframes: {
      "text-shake": {
        "15%": { transform: "translateX(5px)" },
        "30%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(3px)" },
        "80%": { transform: "translateX(2px)" },
        "100%": { transform: "translateX(0)" },
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
    slug: "badge-animated-border",
    component: <BadgeAnimatedBorder />,
    type: "badges",
    twConfig: TWCONFIG["animated-border"],
  },
  {
    name: "Badge Rotate Border",
    slug: "badge-rotate-border",
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
    name: "Card Animated Border",
    slug: "card-animated-border",
    component: <CardAnimatedBorder />,
    type: "cards",
    twConfig: TWCONFIG["animated-border"],
  },
  {
    name: "Card Revealed Pointer",
    slug: "card-revealed-pointer",
    component: <CardRevealedPointer />,
    type: "cards",
  },
  {
    name: "Card Background Shine",
    slug: "card-background-shine",
    component: <CardBackgroundShine />,
    type: "cards",
    twConfig: TWCONFIG["shine"],
  },
  {
    name: "Card Comment",
    slug: "card-comment",
    component: <CardComment />,
    type: "cards",
    colSpan: true,
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
    name: "Text Glitch",
    slug: "text-glitch",
    component: <TextGlitchExample />,
    type: "texts",
  },
  {
    name: "Text Shake",
    slug: "text-shake",
    component: <TextShakeExample />,
    type: "texts",
    twConfig: TWCONFIG["text-shake"],
  },
  {
    name: "Text Animated Decoration",
    slug: "text-animated-decoration",
    component: <TextAnimatedDecorationExample />,
    type: "texts",
  },
];
