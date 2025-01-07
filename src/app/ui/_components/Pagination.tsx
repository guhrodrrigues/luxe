import Link from "next/link";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type PaginationProps = {
  back?: {
    href: string;
    name: string;
  };
  next?: {
    href: string;
    name: string;
  };
};

export function Pagination({ back, next }: PaginationProps) {
  return (
    <div className="top-dotted flex items-center justify-between pt-9">
      <div>
        {back?.href && back?.name && (
          <Link href={back.href} className="group flex flex-col gap-1.5">
            <span className="ml-[18px] text-[13px] font-medium leading-none">
              Previous
            </span>
            <div className="flex items-center gap-1">
              <ChevronIconGlitch />
              <span className="text-sm font-medium leading-none text-primary">
                {back.name}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div>
        {next?.href && next?.name && (
          <Link href={next.href} className="group flex flex-col gap-1.5">
            <span className="mr-[18px] text-end text-[13px] font-medium leading-none">
              Next
            </span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium leading-none text-primary">
                {next.name}
              </span>
              <ChevronIconGlitch direction="right" />
            </div>
          </Link>
        )}
      </div>
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
          <ChevronLeftIcon size={14} />
        ) : (
          <ChevronRightIcon size={14} />
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
          <ChevronLeftIcon size={14} />
        ) : (
          <ChevronRightIcon size={14} />
        )}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 text-primary transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0",
          direction === "left" ? "translate-x-full" : "-translate-x-full",
        )}
      >
        {direction === "left" ? (
          <ChevronLeftIcon size={14} />
        ) : (
          <ChevronRightIcon size={14} />
        )}
      </span>
    </div>
  );
}

function ChevronRight() {}
