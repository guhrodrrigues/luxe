import {
  ButtonAnimatedBorder,
  ButtonRotateBorder,
  ButtonBackgroundShine,
  ButtonSuccess,
  ButtonDestructive,
  ButtonLoading,
  ButtonMagneticExample,
  ButtonGlitchBrightness,
} from "@/app/_components/ui/buttons";

import {
  BadgeAnimatedBorder,
  BadgeRotateBorder,
  BadgeBackgroundShine,
} from "@/app/_components/ui/badges";

import {
  CardAnimatedBorder,
  CardBackgroundShine,
  CardComment,
  CardRevealedPointer,
  CardHoverEffect,
} from "@/app/_components/ui/cards";

import { AnimatedTabs } from "@/app/_components/ui/tabs";
import { DropdownMenu } from "@/app/_components/ui/dropdown";

import {
  TextGradient,
  TextShine,
  TextAnimatedGradient,
  TextShake,
  TextAnimatedDecoration,
  TextGenerateEffectExample,
  TextGlitch,
  TextHoverEnterExample,
} from "@/app/_components/ui/texts";

import { InputFocusBlur } from "@/app/_components/ui/inputs/InputFocusBlur";
import { DockMenu } from "@/app/_components/ui/docks";
import { InfiniteSliderExample } from "@/app/_components/ui/slider";
import { TooltipExample } from "@/app/_components/ui/tooltip";
import { MultiStepForm } from "@/app/_components/ui/forms";
import { CheckboxExample } from "@/app/_components/ui/checkbox/Checkbox";
import { PopoverExample } from "@/app/_components/ui/popover/Popover";
import { Spinner } from "@/app/_components/ui/icons";

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
      shine: "shine 6s linear infinite",
    },
    keyframes: {
      shine: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-400% 0",
        },
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
  ["brightness"]: {
    animation: {
      brightness: "brightness 2.2s linear infinite",
    },
    keyframes: {
      brightness: {
        "0%": {
          transform: "skew(-13deg) translateX(-100%)",
        },
        "100%": {
          transform: "skew(-13deg) translateX(100%)",
        },
      },
    },
  },
  ["infinite-slider"]: {
    animation: {
      "infinite-slider": "infinite-slider 40s linear infinite",
    },
    keyframes: {
      "infinite-slider": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
    },
  },
  ["spinner"]: {
    animation: {
      spinner: "spinner 1.2s linear infinite",
    },
    keyframes: {
      spinner: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0.15" },
      },
    },
  },
  ["button-loading"]: {
    animation: {
      spinner: "spinner 1.2s linear infinite",
      shine: "shine 2s linear infinite",
    },
    keyframes: {
      spinner: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0.15" },
      },
      shine: {
        from: { backgroundPosition: "0 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
  },
};

export const COMPONENTS = [
  {
    name: "Popover",
    slug: "popover",
    component: <PopoverExample />,
    type: "popover",
    isNew: true,
    download: "npm install framer-motion @radix-ui/react-hover-card",
    colSpan: true,
  },
  {
    name: "Text Generate Effect",
    slug: "text-generate-effect",
    component: <TextGenerateEffectExample />,
    type: "texts",
    isNew: true,
    download: "npm install framer-motion clsx tailwind-merge",
    cnFunction: true,
    isReloadAnimation: true,
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    component: <TooltipExample />,
    type: "tooltip",
    isNew: true,
    download: "npm install framer-motion clsx tailwind-merge",
    cnFunction: true,
  },
  {
    name: "Text Hover Enter",
    slug: "text-hover-enter",
    component: <TextHoverEnterExample />,
    type: "texts",
    isNew: true,
    download: "npm install framer-motion clsx tailwind-merge",
    cnFunction: true,
  },
  {
    name: "Button Glitch Brightness",
    slug: "button-glitch-brightness",
    component: <ButtonGlitchBrightness />,
    type: "buttons",
    isNew: true,
    twConfig: TWCONFIG["brightness"],
  },
  {
    name: "Multi Step Form",
    slug: "multi-step-form",
    component: <MultiStepForm />,
    type: "forms",
    isNew: true,
    download: "npm install framer-motion react-use-measure clsx tailwind-merge",
    cnFunction: true,
    colSpan: true,
    className: "min-h-[500px]",
  },
  {
    name: "Button Magnetic",
    slug: "button-magnetic",
    component: <ButtonMagneticExample />,
    type: "buttons",
    download: "npm install framer-motion clsx tailwind-merge",
    isNew: true,
    cnFunction: true,
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    component: <CheckboxExample />,
    type: "checkbox",
    isNew: true,
    download: "npm install framer-motion @radix-ui/react-checkbox",
  },
  {
    name: "Spinner",
    slug: "spinner",
    component: <Spinner />,
    type: "icons",
    isNew: true,
    twConfig: TWCONFIG["spinner"],
  },
  {
    name: "Text Animated Gradient",
    slug: "text-animated-gradient",
    component: <TextAnimatedGradient />,
    type: "texts",
    twConfig: TWCONFIG["text-gradient"],
  },
  {
    name: "Infinite Slider",
    slug: "infinite-slider",
    component: <InfiniteSliderExample />,
    type: "slider",
    isNew: true,
    colSpan: true,
    twConfig: TWCONFIG["infinite-slider"],
    download: "npm install clsx tailwind-merge",
    cnFunction: true,
  },
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
    twConfig: TWCONFIG["button-loading"],
    isUpdated: true,
  },
  {
    name: "Button Success",
    slug: "button-success",
    component: <ButtonSuccess />,
    type: "buttons",
  },
  {
    name: "Button Destructive",
    slug: "button-destructive",
    component: <ButtonDestructive />,
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
    name: "Card Background Shine",
    slug: "card-background-shine",
    component: <CardBackgroundShine />,
    type: "cards",
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
    download: "npm install framer-motion",
  },
  {
    name: "Card Comment",
    slug: "card-comment",
    component: <CardComment />,
    type: "cards",
    colSpan: true,
  },
  {
    name: "Card Hover Effect",
    slug: "card-hover-effect",
    component: <CardHoverEffect />,
    type: "cards",
    download: "npm install framer-motion clsx tailwind-merge",
    colSpan: true,
    cnFunction: true,
  },
  {
    name: "Animated Tabs",
    slug: "animated-tabs",
    component: <AnimatedTabs />,
    colSpan: true,
    type: "tabs",
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    component: <DropdownMenu />,
    colSpan: true,
    type: "dropdown",
    download: "npm install framer-motion clsx tailwind-merge lucide-react",
    cnFunction: true,
  },
  {
    name: "Input Focus Blur",
    slug: "input-focus-blur",
    component: <InputFocusBlur placeholder="Placeholder" />,
    colSpan: true,
    type: "inputs",
    download: "npm install framer-motion tailwind-variants lucide-react",
  },
  {
    name: "Text Gradient",
    slug: "text-gradient",
    component: <TextGradient />,
    type: "texts",
  },
  {
    name: "Text Shine",
    slug: "text-shine",
    component: <TextShine />,
    type: "texts",
    isUpdated: true,
  },
  {
    name: "Text Glitch",
    slug: "text-glitch",
    component: <TextGlitch />,
    type: "texts",
  },
  {
    name: "Text Shake",
    slug: "text-shake",
    component: <TextShake />,
    type: "texts",
    twConfig: TWCONFIG["text-shake"],
  },
  {
    name: "Text Animated Decoration",
    slug: "text-animated-decoration",
    component: <TextAnimatedDecoration />,
    type: "texts",
  },
  {
    name: "Dock Menu",
    slug: "dock",
    component: <DockMenu />,
    type: "docks",
    download: "npm install framer-motion clsx tailwind-merge lucide-react",
    cnFunction: true,
  },
];
