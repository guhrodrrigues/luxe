"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

type ComponentsListButton = {
  slug: string;
  name: string;
};

export default function ComponentsListButton({
  name,
  slug,
}: ComponentsListButton) {
  const pathname = usePathname();

  const isActive = pathname === `/${slug}`;

  return (
    <li>
      <Link
        href={`/${slug}`}
        className={cn(
          "text-sm hover:underline",
          isActive && "text-white underline"
        )}
      >
        {name}
      </Link>
    </li>
  );
}
