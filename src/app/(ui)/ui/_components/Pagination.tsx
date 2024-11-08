import Link from "next/link";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

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
    <div className="flex items-center justify-between border-t border-dashed border-neutral-800/70 pt-9">
      <div>
        {back?.href && back?.name && (
          <Link
            href={back.href}
            className="flex flex-col gap-0.5 text-sm duration-200 hover:opacity-60"
          >
            <span>Back</span>
            <div className="flex items-center gap-1">
              <ArrowLeftIcon size={12} className="text-primary" />
              <span className="text-primary">{back.name}</span>
            </div>
          </Link>
        )}
      </div>
      <div>
        {next?.href && next?.name && (
          <Link
            href={next.href}
            className="flex flex-col items-end gap-0.5 text-sm duration-200 hover:opacity-60"
          >
            <span>Next</span>
            <div className="flex items-center gap-1">
              <span className="text-primary">{next.name}</span>
              <ArrowRightIcon size={12} className="text-primary" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
