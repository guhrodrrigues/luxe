import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

export function Button() {
  return (
    <Link
      href="/ui"
      className="flex items-center gap-1 text-sm py-2 px-4 font-semibold bg-primary/90 text-black rounded-xl duration-300 hover:bg-primary/70"
    >
      Explore all components
      <ChevronRightIcon size={14} />
    </Link>
  );
}
