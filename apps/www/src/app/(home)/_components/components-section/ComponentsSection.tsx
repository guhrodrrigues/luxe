import { Link } from "next-view-transitions";

import { ChevronRightIcon } from "lucide-react";

import { AnimateEnter } from "../AnimateEnter";
import { ComponentsExample } from "./ComponentsExample";

export function ComponentsSection() {
  return (
    <section className="mt-14 flex flex-col items-center justify-center gap-20">
      <AnimateEnter className="space-y-7 text-center">
        <h1 className="text-gradient mx-auto max-w-2xl text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          Elevate your web apps with sophisticated interfaces
        </h1>
        <p className="mx-auto text-lg max-w-lg text-foreground">
          Choose a component, copy the code, and instantly elevate your
          interface. With just a few clicks, and your app shines.
        </p>
      </AnimateEnter>
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
      href="/ui/accordion"
      className="group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-black/80 px-4 py-2.5 text-sm font-semibold text-white duration-300 hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white"
    >
      <span className="[text-shadow:0_0.5px_0_rgb(255,255,255,.48)]">
        Explore All Components
      </span>
      <ChevronIconGlitch />
      <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
        <div className="relative h-full w-8 bg-white/20 blur dark:bg-white/40" />
      </div>
    </Link>
  );
}

function ChevronIconGlitch() {
  return (
    <div className="relative overflow-hidden font-medium">
      <span className="invisible">
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 text-white transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full dark:text-black">
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full text-white transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 dark:text-black">
        <ChevronRightIcon size={14} />
      </span>
    </div>
  );
}
