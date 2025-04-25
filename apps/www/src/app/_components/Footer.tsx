import { Link } from "next-view-transitions";

import { ArrowUpRightIcon } from "lucide-react";

import { AnimateEnter } from "@/app/(home)/_components/AnimateEnter";
import { Icons } from "./Icons";
import { RequestComponentButton } from "./RequestComponentButton";

export const NAVIGATE = [
  {
    name: "Documentation",
    slug: "/ui/installation",
  },
  {
    name: "Browse Components",
    slug: "/ui/animated-tabs",
  },
  {
    name: "Updates",
    slug: "/updates",
  },
];

export function Footer() {
  function getFullYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="relative z-10">
      <div className="relative mx-auto w-full max-w-7xl px-8 pb-6">
        <div className="flex gap-10 max-md:flex-col items-center md:justify-between">
          <AnimateEnter className="flex flex-col gap-1">
            <p className="text-[13px] text-foreground">
              &#169; {getFullYear()},{" "}
              <a
                href="https://guhrodrigues.com"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-200 hover:text-primary"
              >
                Gustavo Rodrigues.
              </a>
            </p>
          </AnimateEnter>
          <div className="flex items-start gap-6 max-sm:flex-col">
            <AnimateEnter delay={0.1} className="flex gap-6">
              {NAVIGATE.map(({ name, slug }, idx) => (
                <Link
                  key={idx}
                  href={slug}
                  className="group flex w-fit items-center gap-1 text-[13px] text-foreground duration-200 hover:text-primary"
                >
                  {name}
                </Link>
              ))}
            </AnimateEnter>
            <Divider />
            <AnimateEnter delay={0.2} className="flex gap-6">
              <a
                href="https://github.com/guhrodrrigues/luxe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-1 text-[13px] text-foreground duration-200 hover:text-primary"
              >
                GitHub
                <ArrowIconGlitch />
              </a>
              <a
                href="https://twitter.com/guhrodrrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-1 text-[13px] text-foreground duration-200 hover:text-primary"
              >
                X (Twitter)
                <ArrowIconGlitch />
              </a>
            </AnimateEnter>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowIconGlitch() {
  return (
    <div className="group relative overflow-hidden font-medium">
      <span className="invisible">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 text-neutral-400 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full translate-y-full text-primary transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRightIcon size={10} />
      </span>
    </div>
  );
}

function Divider() {
  return <div aria-hidden className="h-[21px] w-px bg-border" />;
}
