"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

export function Footer() {
  const pathname = usePathname();

  const isUiPage = pathname.startsWith("/ui");

  return (
    <footer className={cn("py-10", isUiPage && "xl:pl-[300px]")}>
      <p className="text-sm leading-loose text-center">
        Made by{" "}
        <a
          href="https://github.com/guhrodriguess"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline hover:underline-offset-2"
          style={{ textUnderlinePosition: "from-font" }}
        >
          Gustavo Rodrigues.
        </a>
      </p>
    </footer>
  );
}
