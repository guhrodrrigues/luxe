"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

type SidebarButton = {
  slug: string;
  name: string;
  isNew?: boolean;
  onClick?: () => void;
  isUpdated?: boolean;
};

export function SidebarButton({
  name,
  slug,
  isNew = false,
  isUpdated = false,
  onClick,
}: SidebarButton) {
  const pathname = usePathname();

  const isActive = pathname === slug;

  return (
    <Link
      href={slug}
      onClick={onClick}
      data-active={isActive}
      className={cn(
        "relative -mx-2.5 mt-1 select-none rounded-lg border border-transparent px-2 py-1.5 font-medium outline-none focus-visible:border-neutral-200 dark:focus-visible:border-neutral-800",
        isActive
          ? "z-0 border-neutral-200 bg-[#ebebeb] text-black dark:border-neutral-800 dark:bg-[#1c1c1c] dark:text-white"
          : "text-[#2b2b2b] hover:bg-[#ebebeb] dark:text-neutral-300 dark:hover:bg-[#1c1c1c]",
      )}
    >
      {isNew ? (
        <div className="relative z-[1] flex items-center gap-2.5">
          <span className="relative z-[1] block text-sm">{name}</span>
          <span className="rounded-md bg-gradient-to-b from-emerald-300 to-emerald-500 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-black [text-shadow:0_0.5px_0_rgb(255,255,255,.48)]">
            New
          </span>
        </div>
      ) : isUpdated ? (
        <div className="relative z-[1] flex items-center gap-2.5">
          <span className="relative z-[1] block text-sm">{name}</span>
          <span className="rounded-md bg-gradient-to-b from-amber-300 to-amber-500 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-black [text-shadow:0_0.5px_0_rgb(255,255,255,.48)]">
            Updated
          </span>
        </div>
      ) : (
        <span className="relative z-[1] block text-sm">{name}</span>
      )}
    </Link>
  );
}
