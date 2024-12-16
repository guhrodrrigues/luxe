"use client";

import Link from "next/link";
import Image from "next/image";

import { GET_STARTED } from "@/data/get-started";
import { COMPONENTS } from "@/data/components";

import { ComponentsListButton } from "./ComponentsListButton";

import logo from "@/assets/logo.png";
import { Icons } from "@/app/_components/Icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ComponentsList() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const orderedComponents = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const SOCIALS = [
    {
      content: (
        <Icons.github className="h-3.5 w-3.5 text-neutral-600 duration-200 group-hover:text-white" />
      ),
      href: "https://github.com/guhrodrrigues/luxe",
    },
    {
      content: (
        <Icons.twitter className="h-3.5 w-3.5 fill-neutral-600 duration-200 group-hover:fill-white" />
      ),
      href: "https://twitter.com/guhrodrrigues",
    },
  ];

  return (
    <aside className="bottom-0 left-0 top-0 h-screen w-[240px] flex-1 border-r border-dashed border-neutral-800/40 pt-6 max-lg:hidden lg:fixed">
      <div className="flex items-center justify-between px-6 pb-[18px]">
        <Link href="/">
          <Image src={logo} alt="Luxe's logo" className="w-16" />
        </Link>
        <div className="-mr-3 flex items-center">
          {SOCIALS.map(({ content, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-[5px]"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.span
                    className="absolute inset-0 z-0 block h-full w-full rounded-md bg-[#161616]"
                    layoutId="cardHoverEffect"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="relative z-[1]">{content}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="mx-4 h-px border-t border-dashed border-neutral-800/40" />
      <nav
        className="h-full overflow-y-auto px-6 pb-10 pt-8 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(#0d0d0d,#0d0d0d,transparent 0,#0d0d0d 40px,#0d0d0d calc(100% - 100px),transparent)",
        }}
      >
        <div className="mb-8 flex flex-col gap-1">
          <span className="text-xs text-neutral-50">Get Started</span>
          <div className="flex flex-col">
            {GET_STARTED.map((component) => (
              <ComponentsListButton
                key={component.slug}
                name={component.name}
                slug={component.slug}
              />
            ))}
          </div>
        </div>
        <ul className="flex flex-col gap-1">
          <span className="relative z-[1] text-xs text-neutral-50">
            Components
          </span>
          <div className="flex flex-col pb-8">
            {orderedComponents.map((component) => (
              <ComponentsListButton
                key={component.name}
                name={component.name}
                slug={`/ui/${component.slug}`}
                isNew={component.isNew}
                isUpdated={component.isUpdated}
              />
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
}
