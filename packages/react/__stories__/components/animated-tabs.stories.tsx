import type { Meta, StoryObj } from "@storybook/react";

import { AnimatedTabs } from "@/registry/components/animated-tabs";

const meta: Meta = {
  title: "components/AnimatedTabs",
  component: AnimatedTabs,
  args: {
    tabs: [
      { label: "All Posts" },
      { label: "Interactions" },
      { label: "Resources" },
      { label: "Docs" },
    ],
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Basic: StoryObj = {};
