"use client";

import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "usehooks-ts";

import { MenuIcon } from "lucide-react";

import logo from "@/assets/logo.png";

import { AnimateEnter } from "../../(home)/_components/AnimateEnter";
import Drawer from "./Drawer";

export function Header() {
  const isVisible = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isVisible && (
        <header className="sticky top-0 z-50 h-[3.5rem] w-full bg-background">
          <nav className="mx-auto flex h-full items-center justify-between gap-6 border-b border-dashed border-[#191919] px-6 xl:border-x">
            <AnimateEnter>
              <Link href="/">
                <Image src={logo} alt="Luxe's logo" className="w-16" />
              </Link>
            </AnimateEnter>
            <AnimateEnter delay={0.2}>
              <Drawer>
                <button className="flex items-center justify-center lg:hidden">
                  <MenuIcon size={24} className="stroke-1 text-neutral-500" />
                </button>
              </Drawer>
            </AnimateEnter>
          </nav>
        </header>
      )}
    </>
  );
}
