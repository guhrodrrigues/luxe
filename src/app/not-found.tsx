import Link from "next/link";
import { Metadata } from "next";

import { MoveLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The route you're trying to access doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <main className="mt-40">
      <section className="flex flex-col items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[500px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden transition-opacity backdrop-brightness-200 backdrop-contrast-125 opacity-0 duration-1000"
        >
          <div className="absolute aspect-square min-w-[200vw] min-h-[200vh] translate-x-[calc(var(--tx)-50%)] translate-y-[calc(var(--ty)-50%)]">
            <div className="absolute inset-0 bg-center bg-no-repeat [background-image:radial-gradient(300px_300px_at_center,transparent,rgba(0,0,0,.9)_70%)]"></div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none container"
          >
            <div className="w-full h-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h1 className="text-5xl font-bold text-gradient">Not Found</h1>
          <p className="max-w-md mx-auto text-secondary">
            The route you're trying to access doesn't exist.
          </p>
          <Link
            href="/"
            className="flex items-center mt-1 gap-1 text-sm py-2 px-4 font-semibold bg-primary text-black rounded-xl mx-auto duration-300 hover:bg-primary/70"
          >
            <MoveLeftIcon size={10} />
            <span>Back</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
