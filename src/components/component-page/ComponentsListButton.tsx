"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

type ComponentsListButton = {
  slug: string;
  name: string;
};

export function ComponentsListButton({ name, slug }: ComponentsListButton) {
  const pathname = usePathname();

  const isActive = pathname === `/ui/${slug}`;

  return (
    <Link
      href={`/ui/${slug}`}
      className={cn(
        "text-sm select-none px-3 py-2 border border-transparent rounded-md",
        isActive
          ? " text-primary bg-neutral-900 border-border"
          : "text-foreground/80 duration-300 hover:text-neutral-300 hover:bg-neutral-900/80"
      )}
    >
      {name}
    </Link>
  );
}
