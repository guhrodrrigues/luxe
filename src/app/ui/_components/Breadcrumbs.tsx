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
          className="flex w-fit items-center gap-1 text-sm duration-200 hover:opacity-60"
        >
          {groupName}
        </Link>
      ) : (
        <span className="flex w-fit items-center gap-1 text-sm">
          {groupName}
        </span>
      )}
      <ChevronRight size={14} />
      <span className="text-sm text-primary">{currentPage}</span>
    </div>
  );
}
