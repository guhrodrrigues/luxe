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
        "relative text-sm select-none -mx-3 px-3 py-2.5 border border-transparent rounded-lg",
        isActive
          ? "z-0 text-primary"
          : "text-foreground/80 duration-300 hover:text-neutral-300"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active"
          transition={{ duration: 0.2 }}
          className="absolute inset-0 border rounded-[inherit] bg-neutral-900 border-border"
        />
      )}
      {isNew ? (
        <div className="relative flex items-center justify-between z-[1]">
          <span className="relative block z-[1]">{name}</span>
          <span className="bg-emerald-400 text-black px-1.5 py-[0.5px] text-[10px] leading-4 rounded-md font-semibold">
            New
          </span>
        </div>
      ) : isUpdated ? (
        <div className="relative flex items-center justify-between z-[1]">
          <span className="relative block z-[1]">{name}</span>
          <span className="bg-amber-400 text-black px-1.5 py-[0.5px] text-[10px] leading-4 rounded-md font-semibold">
            Updated
          </span>
        </div>
      ) : (
        <span className="relative block z-[1]">{name}</span>
      )}
    </Link>
  );
}
