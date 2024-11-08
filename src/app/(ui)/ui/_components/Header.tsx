"use client";

import Image from "next/image";
import Link from "next/link";

import minLogo from "@/assets/min-logo.png";
import logo from "@/assets/logo.png";

import { useProvider } from "../../../_components/command-menu/_context/CommandMenuProvider";
import { CommandIcon, SearchIcon } from "lucide-react";
import { Icons } from "../../../_components/Icons";
import { AnimateEnter } from "../../../(home)/_components/AnimateEnter";

export function Header() {
  const { setShowCommandMenu } = useProvider();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-[4rem] w-full bg-background">
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-6 border-b border-dashed border-neutral-800/60 px-6 lg:border-x">
        <AnimateEnter className="flex items-end gap-1.5">
          <Link href="/">
            <Image src={minLogo} alt="Luxe's logo" className="w-4 sm:hidden" />
            <Image
              src={logo}
              alt="Luxe's logo"
              className="w-16 max-sm:hidden"
            />
          </Link>
          <span className="text-xs leading-none text-neutral-300 max-sm:hidden">
            by{" "}
            <a
              href="https://guhrodrigues.com"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 hover:opacity-60"
            >
              Gustavo Rodrigues
            </a>
          </span>
        </AnimateEnter>
        <AnimateEnter
          delay={0.2}
          className="flex flex-1 items-center justify-end gap-4"
        >
          <button
            onClick={() => setShowCommandMenu(true)}
            className="flex w-auto items-center justify-between gap-6 rounded-lg border border-border bg-background-muted px-3 py-1.5 text-sm duration-300 hover:bg-neutral-900 max-sm:flex-1 sm:w-56"
          >
            <span className="flex items-center gap-2 text-neutral-500">
              <SearchIcon size={12} />
              Search...
            </span>
            <span className="flex items-center gap-0.5 rounded-md border border-border px-1.5 text-[10px] max-sm:hidden">
              <CommandIcon size={10} />K
            </span>
          </button>
          <a
            href="https://github.com/guhrodrrigues/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md duration-150 hover:text-primary"
          >
            <Icons.github className="h-4 w-4 fill-secondary" />
          </a>
          <a
            href="https://x.com/guhrodrrigues"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md fill-secondary duration-150 hover:fill-primary"
          >
            <Icons.twitter className="h-3.5 w-3.5" />
          </a>
        </AnimateEnter>
      </nav>
    </header>
  );
}
