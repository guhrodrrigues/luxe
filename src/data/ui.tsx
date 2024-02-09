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

type UiProps = Array<{
  name: string;
  component: JSX.Element;
}>;

export const ui: UiProps = [
  {
    name: "Button Animated Border",
    component: <ButtonAnimatedBorder />,
  },
  {
    name: "Button Rotate Border",
    component: <ButtonRotateBorder />,
  },
  {
    name: "Button Background Shine",
    component: <ButtonBackgroundShine />,
  },
  {
    name: "Button Success",
    component: <ButtonSuccess />,
  },
  {
    name: "Button Error",
    component: <ButtonError />,
  },
  {
    name: "Button Loading",
    component: <ButtonLoading />,
  },
  {
    name: "Badge Animated Border",
    component: <BadgeAnimatedBorder />,
  },
  {
    name: "Badge Rotate Border",
    component: <BadgeRotateBorder />,
  },
  {
    name: "Badge Background Shine",
    component: <BadgeBackgroundShine />,
  },
];
