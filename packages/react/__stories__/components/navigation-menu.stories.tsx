import type { Meta, StoryObj } from "@storybook/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from "@/components/navigation-menu";

const OVERVIEW = [
  {
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    title: "About",
    description: "Learn more about Luxe and our mission.",
  },
  {
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    title: "Releases",
    description: "See what’s new in the latest Luxe versions.",
  },
];

const DOCS = [
  {
    title: "Accordion",
    description: "A vertically stacked set of interactive headings.",
  },
  {
    title: "Checkbox",
    description: "A control that allows users to select one or more options.",
  },
  {
    title: "Dialog",
    description: "A modal window that appears on top of the main content.",
  },
  {
    title: "Tooltip",
    description: "A small popup that appears when hovering over an element.",
  },
  {
    title: "Multi Step Modal",
    description:
      "A modal dialog that guides users through a sequence of steps.",
  },
  {
    title: "Switch",
    description:
      "A toggle control that allows users to turn an option on or off.",
  },
];

const meta: Meta = {
  title: "components/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {OVERVIEW.map((component) => (
                  <NavigationMenuListItem key={component.title} href="#">
                    <h3 className="text-primary">{component.title}</h3>
                    <span className="text-primary-muted">
                      {component.description}
                    </span>
                  </NavigationMenuListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {DOCS.map((component) => (
                  <NavigationMenuListItem key={component.title} href="#">
                    <h3 className="text-primary">{component.title}</h3>
                    <span className="text-primary-muted">
                      {component.description}
                    </span>
                  </NavigationMenuListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Updates</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
  },
};

export default meta;

export const Basic: StoryObj = {};
