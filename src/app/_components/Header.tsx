"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/logo.png";
import minLogo from "@/assets/min-logo.png";

import { useProvider } from "./command-menu/_context/CommandMenuProvider";
import { CommandIcon, SearchIcon } from "lucide-react";
import { Icons } from "./Icons";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { AnimateEnter } from "../(home-page)/_components/AnimateEnter";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { setShowCommandMenu } = useProvider();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleIsActive(href: string) {
    return pathname === href;
  }

  return (
    <header
      className={cn(
        "fixed w-full z-40 h-16 top-0 left-0 right-0 backdrop-blur border-b border-transparent",
        isScrolled && "bg-background/10 border-border/40"
      )}
    >
      <nav className="mx-auto max-w-[1350px] px-4 flex items-center justify-between gap-6 h-full">
        <AnimateEnter className="flex items-center gap-5">
          <Link href="/">
            <Image src={minLogo} alt="Luxe's logo" className="w-4 sm:hidden" />
            <Image
              src={logo}
              alt="Luxe's logo"
              className="w-16 max-sm:hidden"
            />
          </Link>
          <Link
            href="/ui/installation"
            className={cn(
              "text-sm leading-none max-sm:hidden",
              handleIsActive("/ui/installation")
                ? "text-primary"
                : "duration-150 hover:text-primary"
            )}
          >
            Get Started
          </Link>
          <Link
            href="/ui"
            className={cn(
              "text-sm leading-none max-sm:hidden",
              handleIsActive("/ui")
                ? "text-primary"
                : "duration-150 hover:text-primary"
            )}
          >
            Components
          </Link>
        </AnimateEnter>
        <AnimateEnter
          delay={0.2}
          className="flex flex-1 items-center gap-4 justify-end"
        >
          <button
            onClick={() => setShowCommandMenu(true)}
            className="bg-background-muted max-sm:flex-1 w-auto flex items-center justify-between gap-6 sm:w-56 px-3 py-1.5 rounded-lg border text-sm border-border duration-300 hover:bg-neutral-900"
          >
            <span className="flex items-center gap-2 text-neutral-500">
              <SearchIcon size={12} />
              Search...
            </span>
            <span className="border border-border px-1.5 rounded-sm text-[10px] flex items-center gap-0.5 max-sm:hidden">
              <CommandIcon size={10} />K
            </span>
          </button>
          <a
            href="https://github.com/guhrodrrigues"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md duration-150 hover:text-primary"
          >
            <Icons.github className="fill-secondary w-4 h-4" />
          </a>
          <a
            href="https://x.com/guhrodrrigues"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md duration-150 fill-secondary hover:fill-primary"
          >
            <Icons.twitter className="w-3.5 h-3.5" />
          </a>
        </AnimateEnter>
      </nav>
    </header>
  );
}
