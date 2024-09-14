import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Breadcrumbs = {
  groupName: string;
  backLink?: string;
  currentPage: string;
};

export function Breadcrumbs({ groupName, backLink, currentPage }: Breadcrumbs) {
  return (
    <div className="flex items-center gap-1">
      {backLink ? (
        <Link
          href={backLink}
          className="flex select-none items-center text-sm gap-1 w-fit"
        >
          {groupName}
        </Link>
      ) : (
        <span className="flex select-none items-center text-sm gap-1 w-fit">
          {groupName}
        </span>
      )}
      <ChevronRight size={12} />
      <span className="text-sm text-primary">{currentPage}</span>
    </div>
  );
}
