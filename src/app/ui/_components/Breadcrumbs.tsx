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
          className="flex w-fit items-center gap-1 text-sm font-medium duration-200 hover:text-primary"
        >
          {groupName}
        </Link>
      ) : (
        <span className="flex w-fit items-center gap-1 text-sm font-medium">
          {groupName}
        </span>
      )}
      <ChevronRight size={14} />
      <span className="text-sm font-medium text-primary">{currentPage}</span>
    </div>
  );
}
