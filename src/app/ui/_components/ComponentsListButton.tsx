"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

type ComponentsListButton = {
  slug: string;
  name: string;
  isNew?: boolean;
  onClick?: () => void;
  isUpdated?: boolean;
};

export function ComponentsListButton({
  name,
  slug,
  isNew = false,
  isUpdated = false,
  onClick,
}: ComponentsListButton) {
  const pathname = usePathname();

  const isActive = pathname === slug;

  return (
    <Link
      href={slug}
      onClick={onClick}
      className={cn(
        "relative -mx-2.5 mt-1 select-none rounded-lg px-2.5 py-1.5 text-sm font-medium",
        isActive
          ? "z-0 text-primary"
          : "text-foreground duration-300 hover:text-neutral-300",
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active"
          transition={{ duration: 0.2 }}
          className="absolute inset-0 rounded-[inherit] bg-[#161616]"
        />
      )}
      {isNew ? (
        <div className="relative z-[1] flex items-center justify-between">
          <span className="relative z-[1] block text-[13px]">{name}</span>
          <span className="rounded-md bg-emerald-400/10 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-emerald-400">
            New
          </span>
        </div>
      ) : isUpdated ? (
        <div className="relative z-[1] flex items-center justify-between">
          <span className="relative z-[1] block text-[13px]">{name}</span>
          <span className="rounded-md bg-amber-400/10 px-1.5 py-[0.5px] text-[10px] font-semibold leading-4 text-amber-400">
            Updated
          </span>
        </div>
      ) : (
        <span className="relative z-[1] block text-[13px]">{name}</span>
      )}
    </Link>
  );
}
