import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import logo from "@/assets/logo.png";

import { RequestComponentButton } from "./RequestComponentButton";
import { AnimateEnter } from "@/app/(home)/_components/AnimateEnter";

export function Footer() {
  return (
    <footer className="border-t relative z-10 border-border bg-background overflow-hidden">
      <Blur />
      <div className="relative px-8 md:px-3 mx-auto max-w-7xl w-full py-16">
        <div className="flex max-md:flex-col gap-10 md:justify-between">
          <div className="flex flex-col gap-5">
            <AnimateEnter>
              <Image src={logo} alt="Luxe's logo" width={80} height={80} />
            </AnimateEnter>
            <AnimateEnter delay={0.1} className="flex flex-col gap-1">
              <p className="text-foreground font-medium text-sm">
                Elevating the web design.
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
            </AnimateEnter>
            <AnimateEnter delay={0.2}>
              <RequestComponentButton />
            </AnimateEnter>
          </div>
          <AnimateEnter delay={0.3} className="space-y-4">
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
                className="group flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                Source code
                <ArrowUpRightIcon
                  size={10}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="https://github.com/guhrodrrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                GitHub
                <ArrowUpRightIcon
                  size={10}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="https://x.com/guhrodrrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                X (Twitter)
                <ArrowUpRightIcon
                  size={10}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </AnimateEnter>
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
