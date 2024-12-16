import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

export function GetStartedButton() {
  return (
    <Link
      href="/ui/installation"
      className="group relative inline-flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold duration-300 hover:bg-neutral-800 hover:text-primary"
    >
      <TextGlitch text="Get Started" />
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible flex items-center gap-1">
        {text}
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 flex items-center gap-1 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 flex translate-y-full items-center gap-1 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
        <ChevronRightIcon size={14} />
      </span>
    </div>
  );
}
