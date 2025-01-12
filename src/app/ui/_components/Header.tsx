"use client";

import Link from "next/link";

import { useMediaQuery } from "usehooks-ts";

import { MenuIcon } from "lucide-react";

import { AnimateEnter } from "../../(home)/_components/AnimateEnter";
import Drawer from "./Drawer";
import { Icons } from "@/app/_components/Icons";

export function Header() {
  const isVisible = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isVisible && (
        <header className="sticky top-0 z-50 h-[3.5rem] w-full bg-background">
          <nav className="bottom-dotted mx-auto flex h-full items-center justify-between gap-6 px-6 xl:border-x">
            <AnimateEnter>
              <Link href="/">
                <Icons.logo className="w-16" />
              </Link>
            </AnimateEnter>
            <AnimateEnter delay={0.2}>
              <Drawer>
                <button className="flex items-center justify-center lg:hidden">
                  <MenuIcon
                    size={24}
                    className="stroke-1 text-neutral-600 dark:text-neutral-500"
                  />
                </button>
              </Drawer>
            </AnimateEnter>
          </nav>
        </header>
      )}
    </>
  );
}
