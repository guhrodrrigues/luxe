"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

import { AnimatePresence } from "motion/react";

import { Icons } from "@/app/_components/Icons";
import { ToggleTheme } from "./ToggleTheme";
import { CommandMenu } from "./cmdk";
import { MobileMenu } from "./MobileMenu";

import { cn } from "@/utils/cn";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isDocsPage = pathname.startsWith("/ui");

  const isMobile = useMediaQuery("(max-width: 662px)");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
    <>
      <header
        className={cn(
          "top-0 z-50 h-17 w-full transition-colors duration-300 ease-out border-b-[.75px] border-transparent",
          isDocsPage ? "sticky bg-background bottom-dotted" : "fixed",
          !isDocsPage &&
            isScrolled &&
            !isMobile &&
            "bg-background dark:bg-background/40 backdrop-blur-md border-border dark:border-[#262626]/50",
          isMobile && "bg-background",
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
              <Divider />
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
          <div className="flex items-center gap-3.5 [@media(min-width:663px)]:hidden">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/guhrodrrigues/luxe"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-md p-0.5 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
              >
                <Icons.github className="size-4 text-neutral-400 duration-150 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 dark:text-neutral-600" />
              </a>
              <ToggleTheme />
            </div>
            <Divider />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex h-8 w-5 items-center justify-center"
            >
              <div className="relative size-5">
                <span
                  className={cn(
                    "bg-primary/60 absolute right-0 block h-0.5 w-5 transition-all duration-300 top-1",
                    isOpen && "top-[0.6rem] -rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "bg-primary/60 absolute right-0 block h-0.5 w-5 transition-all duration-300 top-3.5",
                    isOpen && "top-[0.6rem] rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence mode="wait">
        {isOpen && <MobileMenu handleClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function Divider() {
  return <div aria-hidden className="h-5 w-px bg-border" />;
}
