import Link from "next/link";

import { COMPONENTS } from "@/data/components";

import { ComponentsListButton } from "./ComponentsListButton";

export function ComponentsList() {
  return (
    <nav className="fixed left-0 top-0 w-[250px] space-y-10 hidden xl:block bg-background-muted h-full px-5 border-r border-border/60">
      <Link href="/" className="flex w-fit mt-10 select-none">
        <h1 className="text-2xl font-bold text-gradient">Luxe</h1>
      </Link>
      <ul className="flex flex-col gap-2 max-h-[800px] overflow-y-auto">
        {COMPONENTS.map((component) => (
          <ComponentsListButton
            name={component.name}
            slug={component.slug}
            key={component.slug}
          />
        ))}
      </ul>
    </nav>
  );
}
