import Link from "next/link";

import { cn } from "@/utils/cn";

type ButtonGlitchProps = {
  href: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>;

export function ButtonGlitch({
  href,
  children,
  className,
}: ButtonGlitchProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex justify-center items-center gap-1 overflow-hidden rounded-xl outline-none",
				"bg-black/80 p-4 h-10 sm:h-11 text-sm sm:text-base font-semibold text-white backdrop-blur-sm duration-300",
				" hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white focus-visible:bg-black dark:focus-visible:bg-white",
        className,
      )}
    >
      <TextGlitch>{children}</TextGlitch>
    </Link>
  );
}

function TextGlitch({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{children}</span>
      <span className="absolute dark:[text-shadow:0_0.5px_0_rgb(255,255,255,.48)] left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-focus-visible:-translate-y-full group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute dark:[text-shadow:0_0.5px_0_rgb(255,255,255,.48)] left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-focus-visible:translate-y-0 group-hover:translate-y-0">
        {children}
      </span>
    </div>
  );
}
