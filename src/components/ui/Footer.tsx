"use client";

import Image from "next/image";

import author from "@/assets/author.jpg";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export function Footer() {
  const pathname = usePathname();

  const isOnHomePage = pathname === "/";

  return (
    <footer
      className={cn(
        "flex justify-center items-center gap-3 py-8 xl:ml-[250px]",
        isOnHomePage && "xl:ml-0"
      )}
    >
      <div>
        <Image src={author} alt="Gustavo" width={30} className="rounded-full" />
      </div>
      <div>
        <span className="text-sm">
          Made by{" "}
          <a
            href="https://github.com/guhrodriguess"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary duration-300 hover:text-primary"
          >
            Gustavo.
          </a>
        </span>
      </div>
    </footer>
  );
}
