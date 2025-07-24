import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import { AnimateEnter } from "../AnimateEnter";
import { ComponentsExample } from "./ComponentsExample";

import { cn } from "@/utils/cn";

export function ComponentsSection() {
  return (
    <section className="mt-14 flex flex-col items-center justify-center gap-12 sm:gap-16">
      <AnimateEnter className="space-y-4 text-center">
        <div className="space-y-2">
          <Link
            href="/ui/accordion"
            className="group w-fit mx-auto flex items-center justify-center gap-1.5 text-[15px] font-semibold text-gradient duration-300"
          >
            <span>See more</span>
            <ChevronIconGlitch className="text-gradient" />
          </Link>
          <h1 className="text-gradient mx-auto text-5xl font-medium leading-none tracking-tight">
            Refined user <br className="md:hidden" /> interfaces
          </h1>
        </div>
        <p className="mx-auto max-sm:px-8 text-base md:text-lg max-w-lg text-foreground">
          Choose a component, copy the code, and instantly elevate your
          interface. With just a few clicks, watch your app shine.
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

function ChevronIconGlitch({ className }: { className?: string }) {
  return (
    <div className="relative overflow-hidden font-medium">
      <span className="invisible">
        <ChevronRightIcon size={14} />
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 text-white transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full dark:text-black",
          className,
        )}
      >
        <ChevronRightIcon size={14} />
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 -translate-x-full text-white transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 dark:text-black",
          className,
        )}
      >
        <ChevronRightIcon size={14} />
      </span>
    </div>
  );
}
