"use client";

import { useEffect, useCallback } from "react";

import { PaletteIcon } from "lucide-react";

import { useRouter } from "next/navigation";

import { useProvider } from "./_context/CommandMenuProvider";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./CommandMenuComponents";

import { GET_STARTED } from "@/data/get-started";
import { COMPONENTS } from "@/data/components";

type Groups = Array<{
  heading: string;
  actions: Array<{
    name: string;
    icon: JSX.Element;
    isNew?: boolean;
    isUpdated?: boolean;
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

  const orderedComponents = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const groups: Groups = [
    {
      heading: "Get Started",
      actions: GET_STARTED.map(({ name, slug, icon }) => ({
        name: name,
        icon: icon,
        onSelect: () => forwardToRoute(slug.replace("/ui", "")),
      })),
    },
    {
      heading: "Components",
      actions: orderedComponents.map(({ name, slug, isNew, isUpdated }) => ({
        name: name,
        icon: <PaletteIcon />,
        onSelect: () => forwardToRoute(slug),
        isNew: isNew,
        isUpdated: isUpdated,
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
                <div className="flex items-center gap-2.5">
                  {action.icon}
                  {action.name}
                </div>
                {action.isNew && (
                  <span className="bg-emerald-400 text-black px-1.5 py-px text-[10px] leading-4 rounded-md font-semibold">
                    New
                  </span>
                )}
                {action.isUpdated && (
                  <span className="bg-amber-400 text-black px-1.5 py-px text-[10px] leading-4 rounded-md font-semibold">
                    Updated
                  </span>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
