import { MoveRightIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[500px]">
      <div className="absolute inset-0 z-[-1] grid h-full grid-cols-3 pointer-events-none before:content before:absolute before:inset-0 before:shadow-[inset_0_0_1000px_150px_rgb(10,10,10)] md:grid-cols-4">
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
        <span className="max-md:hidden aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent duration-300"></span>
      </div>
      <div className="space-y-4 text-center">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold text-gradient">Luxe</h1>
          <p className="max-w-md mx-auto text-secondary">
            Library of dark mode components to illuminate your applications with
            elegance and sophistication.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <a
            href="https://github.com/guhrodriguess/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 py-1.5 text-sm px-4 font-semibold bg-primary text-black rounded-xl mx-auto duration-300 hover:bg-primary/70"
          >
            GitHub <MoveRightIcon size={10} />
          </a>
          <span className="text-xs text-muted">
            Crafted with{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-neutral-600 underline-offset-2 hover:decoration-neutral-500"
            >
              Tailwind CSS
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
