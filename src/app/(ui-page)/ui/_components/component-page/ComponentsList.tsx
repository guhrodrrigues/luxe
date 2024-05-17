"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { CommandIcon, SearchIcon } from "lucide-react";

import { useProvider } from "../../_context/CommandMenuProvider";

import { cn } from "@/utils/cn";

import { COMPONENTS } from "@/data/components";

import { ComponentsListButton } from "./ComponentsListButton";

import logo from "@/assets/logo.png";

export function ComponentsList() {
  const { setShowCommandMenu } = useProvider();

  const componentsOrdered = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const pathname = usePathname();

  const isActive = pathname === "/ui";

  return (
    <aside className="max-xl:relative sticky top-0 bottom-0 flex-1 xl:h-[calc(100vh_-_3rem)] max-xl:pt-12">
      <div className="max-xl:items-center max-xl:justify-between flex xl:flex-col gap-6 xl:px-6">
        <Link href="/" className="flex w-fit xl:mt-10 select-none">
          <Image src={logo} alt="Luxe's logo" width={80} height={80} />
        </Link>
        <button
          onClick={() => setShowCommandMenu(true)}
          className="bg-background-muted flex items-center justify-between gap-2 px-3 py-2 rounded-lg border text-sm border-border duration-300 hover:bg-neutral-900"
        >
          <span className="flex items-center gap-2 text-neutral-500">
            <SearchIcon size={12} />
            Search...
          </span>
          <span className="border border-border px-1.5 rounded-md text-[10px] flex items-center gap-0.5">
            <CommandIcon size={10} />K
          </span>
        </button>
      </div>
      <nav
        className="overflow-y-auto h-full pt-8 max-xl:hidden"
        style={{
          maskImage:
            "linear-gradient(#0d0d0d,#0d0d0d,transparent 0,#0d0d0d 40px,#0d0d0d calc(100% - 100px),transparent)",
        }}
      >
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-primary font-medium text-sm px-6">
            Getting started
          </span>
          <Link
            href="/ui"
            className={cn(
              "text-sm select-none px-3 py-2.5 mx-3 border border-transparent rounded-lg",
              isActive
                ? " text-primary bg-neutral-900 border-border"
                : "text-foreground/80 duration-300 hover:text-neutral-300 hover:bg-neutral-900/80"
            )}
          >
            Browse components
          </Link>
        </div>
        <ul className="flex flex-col">
          <span className="px-6 text-primary font-medium text-sm mb-3">
            Components
          </span>
          <div className="flex flex-col gap-0.5 pb-40 px-3">
            {componentsOrdered.map((component) => (
              <ComponentsListButton
                name={component.name}
                slug={component.slug}
                key={component.slug}
              />
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
}
