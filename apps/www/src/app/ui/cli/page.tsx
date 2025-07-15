import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArrowUpRightIcon } from "lucide-react";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";

import { MDX } from "@/app/_components/mdx";

import { getDocs } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "CLI",
  description: "Add components to your app instantly with Luxe CLI.",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-cli.png",
        alt: "Luxe's website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe: CLI",
    description: "Add components to your app instantly with Luxe CLI.",
    type: "website",
    url: "https://luxeui.com/ui/cli",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-cli.png",
        alt: "Luxe's website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe: CLI",
    description: "Add components to your app instantly with Luxe CLI.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

const Docs = getDocs("get-started");

export default async function CLIPage() {
  const docs = Docs.find((docs) => docs.slug === "cli");

  if (!docs) return notFound();

  const { content, title, description } = docs;

  return (
    <main className="my-2 space-y-10">
      <div className="space-y-4">
        <Breadcrumbs groupName="Get Started" currentPage="CLI" />
        <div className="space-y-4">
          <div className="space-y-3.5">
            <h1 className="text-3xl font-semibold tracking-tight text-primary">
              {title}
            </h1>
            <p className="max-w-xl text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
              {description}
            </p>
          </div>
          <a
            href="https://npmjs.com/package/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit text-xs text-neutral-700 dark:text-neutral-200 transition-all duration-200 border border-neutral-300 dark:border-neutral-800 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-200/40 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800/60"
          >
            Npm Registry
            <ArrowIconGlitch />
          </a>
        </div>
      </div>
      <MDX source={content} />
      <Pagination
        back={{
          href: "/ui/installation",
          title: "Installation",
        }}
      />
    </main>
  );
}

function ArrowIconGlitch() {
  return (
    <div className="group relative overflow-hidden font-medium">
      <span className="invisible">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 ease-in-out hover:duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full translate-y-full text-primary transition-transform duration-300 ease-in-out hover:duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRightIcon size={10} />
      </span>
    </div>
  );
}
