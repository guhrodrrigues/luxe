"use client";

import { useEffect, useCallback } from "react";

import { PaletteIcon } from "lucide-react";

import { useRouter } from "next/navigation";

import { useProvider } from "../../_context/CommandMenuProvider";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./CommandMenuComponents";
import { COMPONENTS } from "@/data/components";

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
      router.replace(`/ui/${route}`);
      setShowCommandMenu(false);
    },
    [router, setShowCommandMenu]
  );

  const groups: Groups = [
    {
      heading: "All components",
      actions: COMPONENTS.map(({ name, slug }) => ({
        name: name,
        icon: <PaletteIcon />,
        onSelect: () => forwardToRoute(slug),
      })),
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
