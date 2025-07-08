"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

type SidebarButton = {
  slug: string;
  name: string;
  isNew?: boolean;
  isBeta?: boolean;
  isUpdated?: boolean;
  onClick?: () => void;
};

export function SidebarButton({
  name,
  slug,
  isNew = false,
  isBeta = false,
  isUpdated = false,
  onClick,
  ...props
}: SidebarButton) {
  const pathname = usePathname();

  const isActive = pathname === slug;

  return (
    <Link
      {...props}
      href={slug}
      data-active={isActive}
      onClick={onClick}
      className={cn(
        "relative -mx-2.5 mt-1 select-none rounded-lg border border-transparent px-2 py-1.5 font-medium outline-none focus-visible:border-neutral-200 dark:focus-visible:border-neutral-800",
        isActive
          ? "z-0 border-neutral-200 bg-[#ebebeb] text-black dark:border-neutral-800 dark:bg-[#1c1c1c] dark:text-white"
          : "text-[#2b2b2b] hover:bg-[#ebebeb] dark:text-neutral-300 dark:hover:bg-[#1c1c1c]",
      )}
    >
      {isNew && (
        <div className="relative z-[1] flex items-center gap-1.5">
          <span className="relative z-[1] block text-sm">{name}</span>
          <div
            className={cn(
              "w-[30px] h-4 font-medium bg-yellow-400/30 dark:bg-[#eaec8a]/16 rounded-full text-[10px]",
              "leading-[150%] text-center mr-2.5 text-yellow-600 dark:text-[#eaec8a] [text-shadow:0_1px_1.5px_rgb(0,0,0,0.16)]",
            )}
          >
            New
          </div>
        </div>
      )}
      {(isBeta || isUpdated) && (
        <div className="relative z-[1] flex items-center gap-1.5">
          <span className="relative z-[1] block text-sm">{name}</span>
          <div
            className={cn(
              "h-4 font-medium bg-amber-600/20 dark:bg-amber-800/35 rounded-full text-[10px]",
              "leading-[150%] text-center px-1 text-amber-600 dark:text-amber-500 [text-shadow:0_1px_1.5px_rgb(0,0,0,0.16)]",
            )}
          >
            {isBeta ? "Beta" : "Updated"}
          </div>
        </div>
      )}
      {!isUpdated && !isNew && !isBeta && (
        <span className="relative z-[1] block text-sm">{name}</span>
      )}
    </Link>
  );
}
