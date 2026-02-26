"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

type SidebarButton = {
  slug: string;
  name: string;
  isNew?: boolean;
  isUpdated?: boolean;
  onClick?: () => void;
};

export function SidebarButton({
  name,
  slug,
  isNew = false,
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
      <div className="relative z-[1] flex items-center gap-1.5">
        <span className="relative z-[1] block text-sm">{name}</span>
        {(isNew || isUpdated) && (
          <span
            className={cn("text-[10px] text-yellow-500 dark:text-[#eaec8a]", {
              "text-amber-600 dark:text-amber-500": isUpdated,
              "text-yellow-500 dark:text-[#eaec8a]": isNew,
            })}
          >
            {isUpdated ? "Updated" : "New"}
          </span>
        )}
      </div>
    </Link>
  );
}
