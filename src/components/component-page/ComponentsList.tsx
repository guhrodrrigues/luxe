"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { COMPONENTS } from "@/data/components";

import { cn } from "@/utils/cn";

import { ComponentsListButton } from "./ComponentsListButton";

export function ComponentsList() {
  const pathname = usePathname();

  const isActive = pathname === "/ui";

  const componentsOrdered = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <aside className="fixed left-0 top-0 w-[250px] hidden xl:block bg-background-muted h-full px-5 border-r border-border/60">
      <div>
        <Link href="/" className="flex w-fit my-10 select-none">
          <h1 className="text-2xl font-bold text-gradient">Luxe</h1>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-primary font-medium text-sm">
          Getting started
        </span>
        <Link
          href="/ui"
          className={cn(
            "text-sm select-none",
            isActive ? " text-primary" : "duration-300 hover:text-neutral-300"
          )}
        >
          Browse components
        </Link>
      </div>
      <div className="h-px w-full bg-border my-5" />
      <ul className="flex flex-col gap-2 max-h-[800px] overflow-y-auto">
        <span className="text-primary font-medium text-sm">Components</span>
        {componentsOrdered.map((component) => (
          <ComponentsListButton
            name={component.name}
            slug={component.slug}
            key={component.slug}
          />
        ))}
      </ul>
    </aside>
  );
}
