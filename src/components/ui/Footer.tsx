"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

export function Footer() {
  const pathname = usePathname();

  const isUiPage = pathname.startsWith("/ui");

  return (
    <footer className={cn("py-10", isUiPage && "xl:pl-[300px]")}>
      <p className="text-sm leading-loose text-center md:text-left">
        Made by{" "}
        <a
          href="https://guhrodrigues.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-decoration underline-offset-4"
        >
          Gustavo Rodrigues
        </a>
        . The source code is available on{" "}
        <a
          href="https://github.com/guhrodriguess/luxe"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline decoration-decoration underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
