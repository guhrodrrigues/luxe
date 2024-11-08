import { Metadata } from "next";
import Link from "next/link";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { CodeBlock } from "../_components/component-page/CodeBlock";
import { Pagination } from "../_components/Pagination";

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
      <div className="space-y-6">
        <CodeBlock
          code="npm install clsx tailwind-merge"
          fileName="Terminal"
          lang="shellscript"
        />
        <CodeBlock code={cnCode} fileName="utils/cn.ts" />
      </div>

      <Pagination
        back={{
          href: "/ui/installation",
          name: "Installation",
        }}
        next={{
          href: "/ui",
          name: "Browse Components",
        }}
      />
    </main>
  );
}
