import Link from "next/link";

import { cn } from "@/utils/cn";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type PaginationProps = {
  back?: {
    href: string;
    title: string;
  };
  next?: {
    href: string;
    title: string;
  };
};

export function Pagination({ back, next }: PaginationProps) {
  return (
    <div className="flex gap-3 border-t border-neutral-200 pt-8 dark:border-neutral-900 max-sm:flex-col sm:items-center">
      {back?.href && back?.title && (
        <Link
          href={back.href}
          className="group flex flex-1 flex-col gap-2 whitespace-nowrap rounded-xl border border-neutral-200 p-3.5 outline-none transition-colors hover:bg-[#eeeeee] focus-visible:border-neutral-300 dark:border-neutral-900 dark:hover:bg-[#111111] dark:focus-visible:border-neutral-800"
        >
          <div className="flex items-center gap-1">
            <ChevronIconGlitch />
            <span className="mb-px text-sm leading-none">Previous</span>
          </div>
          <span className="ml-1 text-sm font-medium leading-none text-primary">
            {back.title}
          </span>
        </Link>
      )}
      {next?.href && next?.title && (
        <Link
          href={next.href}
          className="group flex flex-1 flex-col items-end gap-2 whitespace-nowrap rounded-xl border border-neutral-200 p-3.5 outline-none transition-colors hover:bg-[#eeeeee] focus-visible:border-neutral-300 dark:border-neutral-900 dark:hover:bg-[#111111] dark:focus-visible:border-neutral-800"
        >
          <div className="flex items-center gap-1">
            <span className="mb-px text-sm leading-none text-foreground">
              Next
            </span>
            <ChevronIconGlitch direction="right" />
          </div>
          <span className="mr-1 text-sm font-medium leading-none text-primary">
            {next.title}
          </span>
        </Link>
      )}
    </div>
  );
}

function ChevronIconGlitch({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden font-medium">
      <span className="invisible">
        {direction === "left" ? (
          <ChevronLeftIcon size={15} />
        ) : (
          <ChevronRightIcon size={15} />
        )}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 text-neutral-400 transition-transform duration-300 ease-in-out hover:duration-150",
          direction === "left"
            ? "group-hover:-translate-x-full"
            : "group-hover:translate-x-full",
        )}
      >
        {direction === "left" ? (
          <ChevronLeftIcon size={15} />
        ) : (
          <ChevronRightIcon size={15} />
        )}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 text-neutral-400 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0",
          direction === "left" ? "translate-x-full" : "-translate-x-full",
        )}
      >
        {direction === "left" ? (
          <ChevronLeftIcon size={15} />
        ) : (
          <ChevronRightIcon size={15} />
        )}
      </span>
    </div>
  );
}
