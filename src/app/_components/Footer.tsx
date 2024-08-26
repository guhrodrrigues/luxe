import Link from "next/link";

import { RequestComponentButton } from "./RequestComponentButton";

import logo from "@/assets/logo.png";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t relative z-10 border-border bg-background overflow-hidden">
      <Blur />
      <div className="px-8 mx-auto max-w-[1400px] w-full py-20">
        <div className="flex max-md:flex-col gap-10 md:justify-between">
          <div className="flex flex-col gap-5">
            <Image src={logo} alt="Luxe's logo" width={80} height={80} />
            <div className="flex flex-col gap-1">
              <p className="text-foreground font-medium text-sm">
                Elevating the design.
              </p>
              <span className="text-foreground font-medium text-sm">
                Made by{" "}
                <a
                  href="https://guhrodrigues.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/90 duration-200"
                >
                  Gustavo Rodrigues.
                </a>
              </span>
            </div>
            <RequestComponentButton />
          </div>
          <div className="space-y-4">
            <div className="text-sm flex flex-col gap-4">
              <Link
                href="/ui"
                className="text-foreground duration-200 hover:text-primary"
              >
                Explore all components
              </Link>
              <a
                href="https://github.com/guhrodrrigues/luxe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                Source code
                <ArrowUpRightIcon size={10} />
              </a>
              <a
                href="https://github.com/guhrodrrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                GitHub
                <ArrowUpRightIcon size={10} />
              </a>
              <a
                href="https://twitter.com/guhrodrrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                Twitter
                <ArrowUpRightIcon size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Blur() {
  return (
    <div
      aria-hidden="true"
      className="-top-1 left-1/2 h-[200px] w-full max-w-[400px] user-select-none center pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
      }}
    />
  );
}
