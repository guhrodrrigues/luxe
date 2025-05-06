import type { Metadata } from "next";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/ui/_components/Tabs";
import { ComponentView } from "../_components/ComponentView";
import { CopyCode } from "../_components/CopyCode";
import { getDocs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDX } from "../_components/mdx";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8",
  );

  return fileContent;
}

export const metadata: Metadata = {
  title: "Add Utilities",
  description:
    "This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-add-utilities.png",
        alt: "Luxe's website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe — Add Utilities",
    description:
      "This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.",
    type: "website",
    url: "https://luxeui.com/ui/add-utilities",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-add-utilities.png",
        alt: "Luxe's website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe — Add Utilities",
    description:
      "This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

const Docs = getDocs("get-started");

export default async function AddUtilitiesPage() {
  const docs = Docs.find((docs) => docs.slug === "add-utilities");

  if (!docs) return notFound();

  const { content, title, description } = docs;

  return (
    <main className="my-2 space-y-10 xl:mb-24">
      <div className="space-y-4">
        <Breadcrumbs groupName="Get Started" currentPage="Add Utilities" />
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {title}
          </h1>
          <p className="max-w-lg text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
            {description}
          </p>
        </div>
      </div>
      <MDX source={content} />
      <Pagination
        back={{
          href: "/ui/installation",
          title: "Installation",
        }}
        next={{
          href: "/ui/cli",
          title: "CLI",
        }}
      />
    </main>
  );
}
