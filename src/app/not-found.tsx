import Link from "next/link";
import { Metadata } from "next";

import { MoveLeftIcon } from "lucide-react";

import { Grid } from "./_components/Grid";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The route you're trying to access doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <main className="mt-40">
      <section className="flex flex-col items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[500px]">
        <Grid />
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
