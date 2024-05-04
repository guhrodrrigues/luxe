import { ChevronRightIcon } from "lucide-react";

export function RequestComponentButton() {
  return (
    <a
      href="https://tally.so/r/3lN02V"
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit group relative grid overflow-hidden rounded-full px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-[9998px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
      <span className="z-10 text-secondary text-xs font-medium flex items-center gap-1">
        Request a component <ChevronRightIcon size={12} />
      </span>
    </a>
  );
}
