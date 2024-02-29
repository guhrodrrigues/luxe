"use client";

import { useEffect, useCallback } from "react";

import { PaletteIcon } from "lucide-react";

import { useRouter } from "next/navigation";

import { useProvider } from "@/app/ui/_context/CommandMenuProvider";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/CommandMenuComponents";

type Groups = Array<{
  heading: string;
  actions: Array<{
    name: string;
    icon: JSX.Element;
    onSelect: () => void | Promise<void | boolean>;
  }>;
}>;

export function CommandMenu() {
  const { showCommandMenu, setShowCommandMenu } = useProvider();

  const router = useRouter();

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandMenu((prevState) => !prevState);
      }
    }

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setShowCommandMenu]);

  const forwardToRoute = useCallback(
    (route: string) => {
      router.replace(route);
      setShowCommandMenu(false);
    },
    [router, setShowCommandMenu]
  );

  const groups: Groups = [
    {
      heading: "All components",
      actions: [
        {
          name: "Animated Tabs",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("animated-tabs"),
        },
        {
          name: "Badge Animated Border",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("badge-animated-border"),
        },
        {
          name: "Badge Background Shine",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("badge-background-shine"),
        },
        {
          name: "Badge Rotate Border",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("badge-rotate-border"),
        },
        {
          name: "Button Animated Border",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("/ui/button-animated-border"),
        },
        {
          name: "Button Background Shine",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("button-background-shine"),
        },
        {
          name: "Button Destructive",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("button-destructive"),
        },
        {
          name: "Button Loading",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("button-loading"),
        },
        {
          name: "Button Rotate Border",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("button-rotate-border"),
        },
        {
          name: "Button Success",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("button-success"),
        },
        {
          name: "Card Animated Border",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("card-animated-border"),
        },
        {
          name: "Card Background Shine",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("card-background-shine"),
        },
        {
          name: "Card Comment",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("card-comment"),
        },
        {
          name: "Card Revealed Pointer",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("card-revealed-pointer"),
        },
        {
          name: "Dropdown Menu",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("dropdown-menu"),
        },
        {
          name: "Input Focus Blur",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("input-focus-blur"),
        },
        {
          name: "Text Animated Decoration",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("text-animated-decoration"),
        },
        {
          name: "Text Animated Gradient",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("text-animated-gradient"),
        },
        {
          name: "Text Glitch",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("text-glitch"),
        },
        {
          name: "Text Gradient",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("text-gradient"),
        },
        {
          name: "Text Shake",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("text-shake"),
        },
        {
          name: "Text Shine",
          icon: <PaletteIcon />,
          onSelect: () => forwardToRoute("text-shine"),
        },
      ],
    },
  ];

  return (
    <CommandDialog open={showCommandMenu} onOpenChange={setShowCommandMenu}>
      <CommandInput placeholder="Type to search ↵" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups.map((group) => (
          <CommandGroup key={group.heading} heading={group.heading}>
            {group.actions.map((action) => (
              <CommandItem key={action.name} onSelect={action.onSelect}>
                {action.icon}
                {action.name}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
