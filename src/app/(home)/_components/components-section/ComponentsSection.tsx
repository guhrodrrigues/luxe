import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import { ComponentsExample } from "./ComponentsExample";
import { ComponentsDescription } from "./ComponentsDescription";
import { AnimateEnter } from "../AnimateEnter";

export function ComponentsSection() {
  return (
    <section className="mt-56 flex flex-col items-center justify-center gap-20">
      <ComponentsDescription />
      <ComponentsExample />
      <AnimateEnter delay={0.3}>
        <Button />
      </AnimateEnter>
    </section>
  );
}

function Button() {
  return (
    <Link
      href="/ui"
      className="group relative inline-flex items-center gap-1 text-sm py-2.5 px-4 font-semibold bg-primary/80 text-black rounded-xl duration-300 overflow-hidden hover:bg-primary"
    >
      <TextGlitch text="Explore All Components" />
      <div className="absolute inset-0 flex h-full w-full justify-center animate-brightness">
        <div className="relative h-full w-8 bg-white/40 blur" />
      </div>
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible flex items-center gap-1">
        {text} <ChevronRightIcon size={14} />
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
