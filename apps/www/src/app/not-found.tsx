import type { Metadata } from "next";
import Link from "next/link";

import { MoveLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The route you're trying to access doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <main className="mt-40 px-4">
      <section className="relative flex min-h-[300px] flex-col items-center justify-center [@media(min-height:793px)]:min-h-[500px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 backdrop-brightness-200 backdrop-contrast-125 transition-opacity duration-1000"
        >
          <div className="absolute aspect-square min-h-[200vh] min-w-[200vw] translate-x-[calc(var(--tx)-50%)] translate-y-[calc(var(--ty)-50%)]">
            <div className="absolute inset-0 bg-center bg-no-repeat [background-image:radial-gradient(300px_300px_at_center,transparent,rgba(0,0,0,.9)_70%)]"></div>
          </div>
          <div
            aria-hidden="true"
            className="container pointer-events-none absolute inset-0"
          >
            <div className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-gradient text-5xl font-bold">Not Found</h1>
          <p className="mx-auto max-w-md text-neutral-600 dark:text-neutral-300">
            The route you're trying to access doesn't exist.
          </p>
          <Link
            href="/"
            className="mx-auto mt-1 flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-black/70 dark:bg-white dark:text-black dark:hover:bg-white/70"
          >
            <MoveLeftIcon size={10} />
            <span>Back to home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
