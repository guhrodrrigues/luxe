import { MoveRightIcon } from "lucide-react";

export function HeroContent() {
  return (
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
  );
}
