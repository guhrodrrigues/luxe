import { Link } from "next-view-transitions";

import { ChevronRightIcon } from "lucide-react";

export function GetStartedButton() {
  return (
    <Link
      href="/ui/installation"
      className="group flex items-center gap-1.5 rounded-xl bg-background px-4 py-[11px] text-[15px] font-semibold text-neutral-600 duration-300 hover:bg-neutral-200 dark:border-transparent dark:bg-transparent dark:text-foreground dark:hover:bg-neutral-800 dark:hover:text-primary"
    >
      <span>Get Started</span>
      <ChevronIconGlitch />
    </Link>
  );
}

function ChevronIconGlitch() {
  return (
    <div className="relative overflow-hidden font-medium">
      <span className="invisible">
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 text-neutral-600 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full dark:text-foreground">
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full text-neutral-600 transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 dark:text-primary">
        <ChevronRightIcon size={14} />
      </span>
    </div>
  );
}
