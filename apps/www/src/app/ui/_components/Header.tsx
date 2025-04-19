"use client";

import Link from "next/link";

import { Icons } from "@/app/_components/Icons";
import { ToggleTheme } from "./sidebar/ToggleTheme";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { CommandIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ITEMS = [
  {
    name: "Get Started",
    slug: "/ui/installation",
  },
  {
    name: "Components",
    slug: "/ui",
  },
  {
    name: "Updates",
    slug: "/updates",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const isDocsPage = pathname.startsWith("/ui");

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "top-0 z-50 h-16 w-full transition-colors duration-300 ease-out",
        isDocsPage ? "sticky bg-background bottom-dotted" : "fixed",
        !isDocsPage && isScrolled && "bg-background",
      )}
    >
      <nav
        className={cn(
          "flex h-full border-b-[.75px] border-transparent items-center justify-between gap-6 px-6 max-w-7xl mx-auto",
          isDocsPage && "horizontal-dotted",
          !isDocsPage && isScrolled && "border-border dark:border-[#262626]/50",
        )}
      >
        <div className="flex items-center gap-6">
          <Link href="/">
            <Icons.logo className="w-[70px]" />
          </Link>
          <div className="flex items-center gap-4">
            {ITEMS.map(({ name, slug }) => (
              <Link
                key={name}
                href={slug}
                className={cn(
                  "text-sm font-[460] leading-none mt-[2.5px]",
                  pathname === slug
                    ? "text-primary"
                    : "duration-200 text-foreground hover:text-primary",
                )}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
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
          <ToggleTheme />
          <a
            href="https://github.com/guhrodrrigues/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-md p-0.5 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
          >
            <Icons.github className="size-4 text-neutral-400 duration-150 group-hover:!text-primary dark:text-neutral-600" />
          </a>
        </div>
      </nav>
    </header>
  );
}
