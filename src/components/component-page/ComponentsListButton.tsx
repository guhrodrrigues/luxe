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
        "text-sm select-none py-0.5",
        isActive ? " text-primary" : "duration-300 hover:text-neutral-300"
      )}
    >
      {name}
    </Link>
  );
}
