import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

export function GetStartedButton() {
  return (
    <Link
      href="/ui/installation"
      className="group relative inline-flex items-center gap-1 text-sm py-2.5 px-4 font-semibold rounded-xl duration-300 hover:bg-neutral-800 hover:text-primary"
    >
      <TextGlitch text="Get Started" />
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="flex items-center gap-1 invisible">
        {text}
        <ChevronRightIcon size={14} />
      </span>
      <span className="flex items-center gap-1 font-semibold absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
        <ChevronRightIcon size={14} />
      </span>
      <span className="flex items-center gap-1 font-semibold absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
        <ChevronRightIcon size={14} />
      </span>
    </div>
  );
}
