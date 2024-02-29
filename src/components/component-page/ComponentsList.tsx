"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CommandIcon, SearchIcon } from "lucide-react";

import { COMPONENTS } from "@/data/components";

import { useProvider } from "@/app/ui/_context/CommandMenuProvider";

import { cn } from "@/utils/cn";

import { ComponentsListButton } from "./ComponentsListButton";

export function ComponentsList() {
  const { setShowCommandMenu } = useProvider();

  const pathname = usePathname();

  const isActive = pathname === "/ui";

  const componentsOrdered = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <aside className="fixed bottom-0 top-0 w-[250px] hidden xl:block h-full">
      <div className="flex flex-col gap-6 px-6">
        <Link href="/" className="flex w-fit mt-10 select-none">
          <h1 className="text-2xl font-bold text-gradient">Luxe</h1>
        </Link>
        <button
          onClick={() => setShowCommandMenu(true)}
          className="bg-background-muted flex items-center justify-between gap-2 px-3 py-2 w-full rounded-lg border text-sm border-border duration-300 hover:bg-neutral-900"
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
        className="overflow-y-auto h-full pt-8"
        style={{
          maskImage:
            "linear-gradient(#0d0d0d,#0d0d0d,transparent 0,#0d0d0d 40px,#0d0d0d calc(100% - 200px),transparent)",
        }}
      >
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-primary font-medium text-sm px-6">
            Getting started
          </span>
          <Link
            href="/ui"
            className={cn(
              "text-sm select-none px-3 py-2 mx-3 border border-transparent rounded-md",
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
