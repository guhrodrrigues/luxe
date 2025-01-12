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
        "relative -mx-2.5 mt-1 select-none rounded-lg px-2 py-1.5 text-sm font-medium",
        isActive
          ? "z-0 bg-[#e3e3e3] text-black dark:bg-[#1c1c1c] dark:text-white"
          : "text-[#2b2b2b] hover:bg-[#e3e3e3] dark:text-neutral-300 dark:hover:bg-[#1c1c1c]",
      )}
    >
      {isNew ? (
        <div className="relative z-[1] flex items-center justify-between">
          <span className="relative z-[1] block text-[13px]">{name}</span>
          <span className="rounded-md bg-gradient-to-b from-emerald-300 to-emerald-500 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-black">
            New
          </span>
        </div>
      ) : isUpdated ? (
        <div className="relative z-[1] flex items-center justify-between">
          <span className="relative z-[1] block text-[13px]">{name}</span>
          <span className="rounded-md bg-gradient-to-b from-amber-300 to-amber-500 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-black">
            Updated
          </span>
        </div>
      ) : (
        <span className="relative z-[1] block text-[13px]">{name}</span>
      )}
    </Link>
  );
}
