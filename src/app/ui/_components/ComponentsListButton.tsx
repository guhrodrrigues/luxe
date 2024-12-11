"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type ComponentsListButton = {
  slug: string;
  name: string;
  isNew?: boolean;
  isUpdated?: boolean;
};

export function ComponentsListButton({
  name,
  slug,
  isNew = false,
  isUpdated = false,
}: ComponentsListButton) {
  const pathname = usePathname();

  const isActive = pathname === slug;

  return (
    <Link
      href={slug}
      className={cn(
        "relative -mx-3 select-none rounded-lg border border-transparent px-3 py-2 text-sm font-[460]",
        isActive
          ? "z-0 text-primary"
          : "text-foreground duration-300 hover:text-neutral-300",
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active"
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-[inherit] border border-[#222222]/80 bg-[#111111]"
        />
      )}
      {isNew ? (
        <div className="relative z-[1] flex items-center justify-between">
          <span className="relative z-[1] block text-[13px]">{name}</span>
          <span className="rounded-md bg-emerald-400 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-black">
            New
          </span>
        </div>
      ) : isUpdated ? (
        <div className="relative z-[1] flex items-center justify-between">
          <span className="relative z-[1] block text-[13px]">{name}</span>
          <span className="rounded-md bg-amber-400 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-black">
            Updated
          </span>
        </div>
      ) : (
        <span className="relative z-[1] block text-[13px]">{name}</span>
      )}
    </Link>
  );
}
