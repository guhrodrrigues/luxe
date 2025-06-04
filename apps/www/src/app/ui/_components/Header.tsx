"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { Icons } from "@/app/_components/Icons";
import { ToggleTheme } from "./ToggleTheme";
import { usePathname } from "next/navigation";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/utils/cn";
import { CommandMenu } from "./cmdk";
import Drawer from "./Drawer";
import { MenuIcon } from "lucide-react";

const ITEMS = [
  {
    name: "Get Started",
    slug: "/ui/installation",
  },
  {
    name: "Components",
    slug: "/ui/accordion",
  },
  {
    name: "Updates",
    slug: "/updates",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = useMediaQuery("(max-width: 662px)");

  const pathname = usePathname();
  const isDocsPage = pathname.startsWith("/ui");

  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }

    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "top-0 z-50 h-17 w-full transition-colors duration-300 ease-out border-b-[.75px] border-transparent",
        isDocsPage ? "sticky bg-background bottom-dotted" : "fixed",
        {
          "bg-background dark:bg-background/40 backdrop-blur-md border-border dark:border-[#262626]/50":
            !isDocsPage && isScrolled,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-full items-center justify-between gap-6 px-6 max-w-7xl mx-auto",
          isDocsPage && "horizontal-dotted",
        )}
      >
        <Link
          href="/"
          className="p-1 rounded outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
        >
          <Icons.logo className="w-[70px]" />
        </Link>
        <div className="flex items-center gap-5 [@media(max-width:662px)]:hidden">
          <div className="flex items-center gap-5">
            {ITEMS.map(({ name, slug }) => (
              <Link
                key={name}
                href={slug}
                className={cn(
                  "text-sm p-1 rounded font-[460] leading-none outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800",
                  pathname === slug
                    ? "text-primary"
                    : "duration-200 text-foreground hover:text-primary",
                )}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <CommandMenu />
              <ToggleTheme />
            </div>
            <div aria-hidden className="h-[21px] w-px bg-border" />
            <a
              href="https://github.com/guhrodrrigues/luxe"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-md p-0.5 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
            >
              <Icons.github className="size-4 text-neutral-400 duration-150 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 dark:text-neutral-600" />
            </a>
          </div>
        </div>
        <div className="[@media(min-width:663px)]:hidden">
          <Drawer>
            <button className="flex items-center justify-center lg:hidden">
              <MenuIcon
                size={24}
                className="stroke-1 text-neutral-600 dark:text-neutral-400"
              />
            </button>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
