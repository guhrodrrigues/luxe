import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import {
  CommandIcon,
  SearchIcon,
  SparklesIcon,
  TerminalIcon,
  CodeIcon,
  FileIcon,
  SquareStackIcon,
} from "lucide-react";

import { cn } from "@/utils/cn";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./CommandMenuPrimitives";

type ItemProps = {
  heading: string;
  group: {
    title: string;
    icon: React.ReactNode;
    slug: string;
    isNew?: boolean;
    shortcut?: string;
  }[];
};

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
  </svg>
);

const ITEMS: ItemProps[] = [
  {
    heading: "Suggestions",
    group: [
      {
        title: "Home",
        icon: <HomeIcon />,
        slug: "/",
        shortcut: "h",
      },
      {
        title: "Updates",
        icon: <SparklesIcon size={17} />,
        slug: "/updates",
        shortcut: "u",
      },
    ],
  },
  {
    heading: "Get Started",
    group: [
      {
        title: "Installation",
        icon: <CodeIcon size={17} />,
        slug: "/ui/installation",
        shortcut: "i",
      },
      {
        title: "Add Utilities",
        icon: <FileIcon size={17} />,
        slug: "/ui/add-utilities",
        shortcut: "j",
      },
      {
        title: "CLI",
        icon: <TerminalIcon size={17} />,
        slug: "/ui/cli",
        shortcut: "l",
      },
    ],
  },
  {
    heading: "Components",
    group: [
      {
        title: "Accordion",
        slug: "/ui/accordion",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Animated Tabs",
        slug: "/ui/animated-tabs",
        icon: <SquareStackIcon size={17} />,
      },
      {
        title: "Badge",
        slug: "/ui/badge",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Button",
        slug: "/ui/button",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Card",
        slug: "/ui/card",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Checkbox",
        slug: "/ui/checkbox",
        icon: <SquareStackIcon size={17} />,
      },
      {
        title: "Dialog",
        slug: "/ui/dialog",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Dropdown Menu",
        slug: "/ui/dropdown-menu",
        icon: <SquareStackIcon size={17} />,
      },
      {
        title: "Spinner",
        slug: "/ui/spinner",
        icon: <SquareStackIcon size={17} />,
      },
      {
        title: "Switch",
        slug: "/ui/switch",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Text",
        slug: "/ui/text",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
      {
        title: "Tooltip",
        slug: "/ui/tooltip",
        icon: <SquareStackIcon size={17} />,
        isNew: true,
      },
    ],
  },
];

type CommandMenuItemProps = {
  shortcut?: string;
  icon: React.ReactNode;
  isNew?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAction: () => void;
} & React.ComponentProps<typeof CommandItem>;

function CommandMenuItem({
  children,
  icon,
  shortcut,
  isNew = false,
  className,
  setIsOpen,
  onAction,
  ...props
}: CommandMenuItemProps) {
  useEffect(() => {
    if (!shortcut) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === shortcut && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(false);
        onAction();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  return (
    <CommandItem {...props} className={cn("cursor-pointer", className)}>
      <div className="flex items-center gap-2">
        <span className="opacity-70">{icon}</span>
        {children}
      </div>
      {shortcut && (
        <div className="flex gap-1 ml-auto">
          <div className="flex h-6 w-6 uppercase items-center text-xs font-semibold justify-center rounded-md bg-neutral-200 dark:bg-[#141414] text-neutral-400">
            <CommandIcon size={12} />
          </div>
          <div className="flex h-6 w-6 uppercase items-center text-xs font-semibold justify-center rounded-md bg-neutral-200 dark:bg-[#141414] text-neutral-400">
            {shortcut}
          </div>
        </div>
      )}
      {isNew && (
        <div
          className={cn(
            "ml-auto px-1.5 py-[0.5px] font-medium bg-yellow-400/30 dark:bg-[#eaec8a]/16 rounded-full text-[11px]",
            "text-center leading-4 text-yellow-600 dark:text-[#eaec8a] [text-shadow:0_1px_1.5px_rgb(0,0,0,0.16)]",
          )}
        >
          New
        </div>
      )}
    </CommandItem>
  );
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const homePage = pathname === "/";
  const currentPage = homePage ? "Home" : pathname.split("/")[2];

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

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
        <div className="pt-3 pl-4">
          <div className="bg-neutral-200 dark:bg-neutral-900 px-2 h-6 w-fit flex items-center justify-center rounded-md">
            <span className="text-[13px] font-[460] text-foreground capitalize">
              {currentPage}
            </span>
          </div>
        </div>
        <CommandInput placeholder="What do you need?" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <div className="space-y-1.5 pb-1.5 pt-1">
            {ITEMS.map(({ heading, group }) => (
              <CommandGroup key={heading} heading={heading}>
                {group.map(({ title, slug, icon, shortcut, isNew }) => (
                  <CommandMenuItem
                    key={title}
                    icon={icon}
                    setIsOpen={setIsOpen}
                    onSelect={() => {
                      router.push(slug);
                      setIsOpen(false);
                    }}
                    isNew={isNew}
                    onAction={() => router.push(slug)}
                    shortcut={shortcut}
                  >
                    {title}
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            ))}
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
}
