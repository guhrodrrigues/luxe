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

  const isActive = pathname === `/${slug}`;

  return (
    <li>
      <Link
        href={`/${slug}`}
        className={cn(
          "text-sm hover:translate-x-1",
          isActive ? " text-primary" : "duration-300 hover:text-neutral-300"
        )}
      >
        {name}
      </Link>
    </li>
  );
}
