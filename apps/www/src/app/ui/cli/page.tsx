import type { Metadata } from "next";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";

import { getDocs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDX } from "@/app/_components/mdx";

export const metadata: Metadata = {
  title: "CLI",
  description:
    "This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.",
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
    title: "Luxe — Add Utilities",
    description:
      "This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.",
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
    title: "Luxe — Add Utilities",
    description:
      "This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.",
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
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {title}
          </h1>
          <p className="max-w-xl text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
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
      />
    </main>
  );
}
