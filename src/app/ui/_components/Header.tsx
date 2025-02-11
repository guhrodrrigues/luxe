import Link from "next/link";

import { MenuIcon } from "lucide-react";

import Drawer from "./Drawer";
import { Icons } from "@/app/_components/Icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[3.5rem] w-full bg-background [@media(min-width:1023px)]:hidden">
      <nav className="bottom-dotted mx-auto flex h-full items-center justify-between gap-6 px-6 xl:border-x">
        <Link href="/">
          <Icons.logo className="w-16" />
        </Link>
        <Drawer>
          <button className="flex items-center justify-center lg:hidden">
            <MenuIcon
              size={24}
              className="stroke-1 text-neutral-600 dark:text-neutral-500"
            />
          </button>
        </Drawer>
      </nav>
    </header>
  );
}
