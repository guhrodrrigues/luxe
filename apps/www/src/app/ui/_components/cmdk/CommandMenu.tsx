import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState, useRef } from "react";

import Lottie from "lottie-react";

import { useTheme } from "next-themes";

import {
  CommandIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  SearchIcon,
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
import { Icons } from "@/app/_components/Icons";

import homeDarkModeIcon from "@/assets/icons/home/dark-mode.json";
import homeLightModeIcon from "@/assets/icons/home/light-mode.json";
import updatesDarkModeIcon from "@/assets/icons/updates/dark-mode.json";
import updatesLightModeIcon from "@/assets/icons/updates/light-mode.json";
import codeDarkModeIcon from "@/assets/icons/code/dark-mode.json";
import codeLightModeIcon from "@/assets/icons/code/light-mode.json";
import thunderDarkModeIcon from "@/assets/icons/thunder/dark-mode.json";
import thunderLightModeIcon from "@/assets/icons/thunder/light-mode.json";
import fileDarkModeIcon from "@/assets/icons/file/dark-mode.json";
import fileLightModeIcon from "@/assets/icons/file/light-mode.json";

type ItemProps = {
  heading: string;
  group: {
    title: string;
    icon: React.ReactNode;
    slug: string;
    isNew?: boolean;
    ref: React.MutableRefObject<any>;
    shortcut?: string;
  }[];
};

type CommandMenuItemProps = {
  shortcut?: string;
  icon: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAction: () => void;
  ref: React.MutableRefObject<any>;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof CommandItem>;

function CommandMenuItem({
  children,
  icon,
  shortcut,
  className,
  setIsOpen,
  ref,
  onAction,
  ...props
}: CommandMenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-selected"
        ) {
          const isSelected =
            itemRef.current?.getAttribute("data-selected") === "true";
          if (isSelected) {
            ref.current?.goToAndPlay(0, true);
          }
        }
      });
    });

    observer.observe(itemRef.current, {
      attributes: true,
      attributeFilter: ["data-selected"],
    });

    return () => observer.disconnect();
  }, []);

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
    <CommandItem
      {...props}
      ref={itemRef}
      onMouseEnter={() => ref.current?.goToAndPlay(0, true)}
      className={cn("cursor-pointer", className)}
    >
      <div className="flex items-center gap-2">
        <div className="opacity-70">{icon}</div>
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
    </CommandItem>
  );
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { theme } = useTheme();

  const homeRef = useRef<any>(null);
  const updatesRef = useRef<any>(null);
  const codeRef = useRef<any>(null);
  const thunderRef = useRef<any>(null);
  const componentRefs = useRef<{ [key: string]: any }>({});

  function getComponentRef(title: string) {
    if (!componentRefs.current[title]) {
      componentRefs.current[title] = { current: null };
    }

    return componentRefs.current[title];
  }

  const ITEMS: ItemProps[] = [
    {
      heading: "Suggestions",
      group: [
        {
          title: "Home",
          icon: (
            <Lottie
              lottieRef={homeRef}
              animationData={
                theme === "dark" ? homeDarkModeIcon : homeLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
          ref: homeRef,
          slug: "/",
          shortcut: "h",
        },
        {
          title: "Updates",
          icon: (
            <Lottie
              lottieRef={updatesRef}
              animationData={
                theme === "dark" ? updatesDarkModeIcon : updatesLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
          slug: "/updates",
          ref: updatesRef,
          shortcut: "u",
        },
      ],
    },
    {
      heading: "Get Started",
      group: [
        {
          title: "Installation",
          icon: (
            <Lottie
              lottieRef={codeRef}
              animationData={
                theme === "dark" ? codeDarkModeIcon : codeLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
          ref: codeRef,
          slug: "/ui/installation",
          shortcut: "i",
        },
        {
          title: "CLI",
          icon: (
            <Lottie
              lottieRef={thunderRef}
              animationData={
                theme === "dark" ? thunderDarkModeIcon : thunderLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
          ref: thunderRef,
          slug: "/ui/cli",
          shortcut: "j",
        },
      ],
    },
    {
      heading: "Components",
      group: [
        {
          title: "Accordion",
          slug: "/ui/accordion",
          ref: getComponentRef("Accordion"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Accordion")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Animated Tabs",
          slug: "/ui/animated-tabs",
          ref: getComponentRef("Animated Tabs"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Animated Tabs")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Badge",
          slug: "/ui/badge",
          ref: getComponentRef("Badge"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Badge")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Button",
          slug: "/ui/button",
          ref: getComponentRef("Button"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Button")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Card",
          slug: "/ui/card",
          ref: getComponentRef("Card"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Card")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Checkbox",
          slug: "/ui/checkbox",
          ref: getComponentRef("Checkbox"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Checkbox")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Dialog",
          slug: "/ui/dialog",
          ref: getComponentRef("Dialog"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Dialog")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Dropdown Menu",
          slug: "/ui/dropdown-menu",
          ref: getComponentRef("Dropdown Menu"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Dropdown Menu")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Input",
          slug: "/ui/input",
          ref: getComponentRef("Input"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Input")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Multi Step Modal",
          slug: "/ui/multi-step-modal",
          ref: getComponentRef("Multi Step Modal"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Multi Step Modal")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Navigation Menu",
          slug: "/ui/navigation-menu",
          ref: getComponentRef("Navigation Menu"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Navigation Menu")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Spinner",
          slug: "/ui/spinner",
          ref: getComponentRef("Spinner"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Spinner")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Switch",
          slug: "/ui/switch",
          ref: getComponentRef("Switch"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Switch")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Text",
          slug: "/ui/text",
          ref: getComponentRef("Text"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Text")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
        {
          title: "Tooltip",
          slug: "/ui/tooltip",
          ref: getComponentRef("Tooltip"),
          icon: (
            <Lottie
              lottieRef={getComponentRef("Tooltip")}
              animationData={
                theme === "dark" ? fileDarkModeIcon : fileLightModeIcon
              }
              style={{ width: 22, height: 22 }}
              autoplay={false}
              loop={false}
            />
          ),
        },
      ],
    },
  ];

  const isApp = pathname === "/" || pathname.startsWith("/updates");
  const isHomePage = pathname === "/";
  const uiPage = pathname.startsWith("/ui");

  const category = isApp ? "App" : "Docs";

  let currentPage = "";
  let subCategory = "";

  if (uiPage) {
    const pathParts = pathname.split("/").filter(Boolean);

    if (pathParts.length >= 2) {
      const isComponentPage = ITEMS.some(
        (item) =>
          item.heading === "Components" &&
          item.group.some((group) => group.slug === pathname),
      );

      if (isComponentPage) {
        subCategory = "Components";
        currentPage = pathParts[1].replace(/-/g, " ");
      }

      if (pathParts[1] === "installation") {
        subCategory = "Installation";
        currentPage = pathParts[2] ? pathParts[2].replace(/-/g, " ") : "";
      }

      if (!isComponentPage && pathParts[1] !== "installation") {
        currentPage = pathParts[1].replace(/-/g, " ");
      }
    }
  }

  if (isHomePage) {
    currentPage = "Home";
  }

  if (!uiPage && !isHomePage) {
    currentPage = pathname.split("/")[1];
  }

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
          "group relative flex items-center justify-between gap-4 pl-2.5 pr-2 py-1.5 border rounded-full text-[13px] leading-none border-border/60 dark:border-border/50",
          "bg-background ease-linear duration-150 hover:bg-main-foreground/40 outline-none dark:hover:bg-main-foreground/20 dark:hover:border-white/10 focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -top-[0.031em] h-px w-1/2 max-w-[1000px] -translate-x-1/4 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/18 via-30% to-transparent"
        />
        <span className="flex items-center gap-2 font-[460] text-neutral-500">
          <SearchIcon size={12} />
          Search
        </span>
        <CommandMenuIcon />
      </button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center gap-1.5 pt-3 pl-4">
          <div className="bg-neutral-200 dark:bg-neutral-900 px-2 h-6 w-fit flex items-center justify-center rounded-md">
            <span className="text-[13px] font-[460] text-foreground capitalize">
              {category}
            </span>
          </div>
          {subCategory && (
            <div className="bg-neutral-200 dark:bg-neutral-900 px-2 h-6 w-fit flex items-center justify-center rounded-md">
              <span className="text-[13px] font-[460] text-foreground capitalize">
                {subCategory}
              </span>
            </div>
          )}
          {currentPage && (
            <div className="bg-neutral-200 dark:bg-neutral-900 px-2 h-6 w-fit flex items-center justify-center rounded-md">
              <span
                className={cn(
                  "text-[13px] font-[460] text-foreground",
                  currentPage === "cli" ? "uppercase" : "capitalize",
                )}
              >
                {currentPage}
              </span>
            </div>
          )}
        </div>
        <CommandInput placeholder="What do you need?" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <div className="space-y-1.5 pb-1.5 pt-1">
            {ITEMS.map(({ heading, group }) => (
              <CommandGroup key={heading} heading={heading}>
                {group.map(({ title, slug, icon, shortcut, ref }) => (
                  <CommandMenuItem
                    key={title}
                    icon={icon}
                    setIsOpen={setIsOpen}
                    onSelect={() => {
                      router.push(slug);
                      setIsOpen(false);
                    }}
                    ref={ref}
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
        <div className="flex items-center justify-between border-t border-border bg-background p-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="p-1 rounded-md text-neutral-500 bg-neutral-200 dark:bg-[#141414]">
                  <ArrowUpIcon size={16} />
                </div>
                <div className="p-1 rounded-md text-neutral-500 bg-neutral-200 dark:bg-[#141414]">
                  <ArrowDownIcon size={16} />
                </div>
              </div>
              <span className="text-sm">Navigate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-md bg-neutral-200 dark:bg-[#141414]">
                <Icons.arrowBack className="text-neutral-500" />
              </div>
              <span className="text-sm">Select</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Close</span>
            <div className="p-1 text-xs rounded-md bg-neutral-200 dark:bg-[#141414]">
              <span className="text-neutral-500 font-medium">ESC</span>
            </div>
          </div>
        </div>
      </CommandDialog>
    </>
  );
}

function CommandMenuIcon() {
  return (
    <span
      className={cn(
        "text-neutral-500 border border-border/60 ease-linear duration-150 group-hover:border-transparent",
        "px-1.5 py-1 rounded-lg text-[10px] flex items-center gap-0.5",
      )}
    >
      <CommandIcon size={10} /> K
    </span>
  );
}
