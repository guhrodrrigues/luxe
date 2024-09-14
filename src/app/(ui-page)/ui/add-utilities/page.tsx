import { Metadata } from "next";
import Link from "next/link";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { CodeBlock } from "../_components/component-page/CodeBlock";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
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

export default async function AddUtilitiesPage() {
  const cnPath = `./src/utils/cn.ts`;
  const cnCode = await readFilePath(cnPath);

  return (
    <main className="my-2 xl:mb-24 space-y-12">
      <div className="space-y-6">
        <Breadcrumbs groupName="Get Started" currentPage="Add Utilities" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-primary">Add Utilities</h1>
          <p className="max-w-lg font-normal text-primary/80">
            This code is widely used in Luxe, it is responsible for merging
            classes when they have conditionals.
          </p>
        </div>
      </div>
      <div>
        <CodeBlock code={cnCode} fileName="utils/cn.ts" />
      </div>
      <div className="flex items-center justify-between border-t border-border pt-9">
        <Link href="/ui/installation" className="flex flex-col text-sm">
          <span>Back</span>
          <div className="flex items-center gap-1">
            <ArrowLeftIcon size={12} className="text-primary" />
            <span className="text-primary">Installation</span>
          </div>
        </Link>
        <Link href="/ui" className="flex flex-col items-end text-sm">
          <span>Next</span>
          <div className="flex items-center gap-1">
            <span className="text-primary">Browse Components</span>
            <ArrowRightIcon size={12} className="text-primary" />
          </div>
        </Link>
      </div>
    </main>
  );
}
