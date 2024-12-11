import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import logo from "@/assets/logo.png";

import { RequestComponentButton } from "./RequestComponentButton";
import { AnimateEnter } from "@/app/(home)/_components/AnimateEnter";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border/50 bg-background">
      <Blur />
      <div className="relative mx-auto w-full max-w-7xl px-8 py-16 md:px-3">
        <div className="flex gap-10 max-md:flex-col md:justify-between">
          <div className="flex flex-col gap-5">
            <AnimateEnter>
              <Image src={logo} alt="Luxe's logo" width={80} height={80} />
            </AnimateEnter>
            <AnimateEnter delay={0.1} className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">
                Elevating the web design.
              </p>
              <span className="text-sm font-medium text-foreground">
                Made by{" "}
                <a
                  href="https://guhrodrigues.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 duration-200"
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
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/ui"
                className="text-foreground duration-200 hover:text-primary"
              >
                Explore Gallery
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
                Twitter
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
      className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
      }}
    />
  );
}
