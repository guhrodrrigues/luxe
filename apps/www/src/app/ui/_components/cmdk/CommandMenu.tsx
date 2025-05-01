import React, { useEffect, useState } from "react";

import { CommandIcon, SearchIcon } from "lucide-react";

import { cn } from "@/utils/cn";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./CommandMenuPrimitives";
import { usePathname, useRouter } from "next/navigation";

type ItemProps = {
  heading: string;
  group: {
    title: string;
    slug: string;
    shortcut?: string;
  }[];
};

const ITEMS: ItemProps[] = [
  {
    heading: "Suggestions",
    group: [
      {
        title: "Get Started",
        slug: "/ui/installation",
        shortcut: "g",
      },
      {
        title: "Components",
        slug: "/ui/accordion",
        shortcut: "c",
      },
      {
        title: "Updates",
        slug: "/updates",
        shortcut: "u",
      },
    ],
  },
  {
    heading: "Docs",
    group: [
      {
        title: "Accordion",
        slug: "/ui/accordion",
      },
      {
        title: "Alert",
        slug: "/ui/alert",
      },
      {
        title: "Avatar",
        slug: "/ui/avatar",
      },
      {
        title: "Badge",
        slug: "/ui/badge",
      },
      {
        title: "Button",
        slug: "/ui/button",
      },
      {
        title: "Card",
        slug: "/ui/card",
      },
      {
        title: "Checkbox",
        slug: "/ui/checkbox",
      },
      {
        title: "Collapsible",
        slug: "/ui/collapsible",
      },
    ],
  },
];

type CommandMenuItemProps = {
  shortcut?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAction: () => void;
} & React.ComponentProps<typeof CommandItem>;

function CommandMenuItem({
  children,
  shortcut,
  setIsOpen,
  onAction,
}: CommandMenuItemProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!shortcut) return;

      if (e.key === shortcut && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(false);
        onAction();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <CommandItem className="cursor-pointer">
      {children}
      {shortcut && (
        <div className="flex gap-1 ml-auto">
          <div className="flex h-6 w-6 uppercase items-center text-xs font-semibold justify-center rounded-md bg-neutral-900 text-neutral-400">
            <CommandIcon size={12} />
          </div>
          <div className="flex h-6 w-6 uppercase items-center text-xs font-semibold justify-center rounded-md bg-neutral-900 text-neutral-400">
            {shortcut}
          </div>
        </div>
      )}
    </CommandItem>
  );
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const currentPath = pathname.split("/").join("/");
  const currentPage = currentPath === "/" ? "Home" : currentPath;

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "w-64 flex items-center justify-between gap-2 pl-3 pr-2 py-[6px] rounded-lg border text-[13px] leading-none border-border bg-[#eeeeee]",
          "dark:bg-[#101010] shadow-inner shadow-neutral-300 transition-all duration-200 dark:shadow-neutral-800/60 dark:to-neutral-500/60",
        )}
      >
        <span className="flex items-center gap-2 text-neutral-500">
          <SearchIcon size={12} />
          Search documentation
        </span>
        <span
          className={cn(
            "text-neutral-500 border border-border bg-[#eeeeee] dark:bg-[#101010] shadow-inner dark:text-neutral-400",
            "shadow-neutral-300 dark:shadow-neutral-800/60 px-1.5 py-1 rounded-md text-[10px] flex items-center gap-0.5",
          )}
        >
          <CommandIcon size={10} />K
        </span>
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="pt-3 px-3">
          <div className="bg-neutral-900 px-2 h-6 w-fit flex items-center justify-center rounded-md">
            <span className="text-[13px] font-[460] text-foreground">
              {currentPage}
            </span>
          </div>
        </div>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {ITEMS.map(({ heading, group }) => (
            <CommandGroup key={heading} heading={heading}>
              {group.map(({ title, slug, shortcut }) => (
                <CommandMenuItem
                  key={title}
                  setIsOpen={setIsOpen}
                  onAction={() => router.push(slug)}
                  shortcut={shortcut}
                >
                  {title}
                </CommandMenuItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
