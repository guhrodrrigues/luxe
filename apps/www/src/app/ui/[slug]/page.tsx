import type { Metadata } from "next";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { COMPONENTS } from "@/data/components";

import { cn } from "@/utils/cn";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { CodeBlock } from "../_components/CodeBlock";
import { ComponentView } from "../_components/ComponentView";
import { Pagination } from "../_components/Pagination";
import { getDocs } from "@/lib/mdx";
import { MDX } from "../_components/mdx";

const Docs = getDocs().sort((a, b) => a.title.localeCompare(b.title));

export async function generateStaticParams() {
  return Docs.map((docs) => ({
    slug: docs.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const docs = Docs.find((docs) => docs.slug === params.slug);

  if (!docs) {
    return;
  }

  const { title, description, slug } = docs;

  return {
    title,
    description,
    openGraph: {
      title: `Luxe — ${title}`,
      description,
      type: "website",
      url: `https://luxeui.com/ui/${slug}`,
      images: [
        {
          width: 1920,
          height: 1080,
          url: "https://luxeui.com/open-graphs/og-browse-components.png",
          alt: "Luxe's website cover",
        },
      ],
    },
    twitter: {
      title: `Luxe — ${title}`,
      description,
      card: "summary_large_image",
      images: [
        {
          width: 1920,
          height: 1080,
          url: "https://luxeui.com/open-graphs/og-browse-components.png",
          alt: "Luxe's website cover",
        },
      ],
    },
  };
}

export default async function ComponentPage({
  params,
}: {
  params: { slug: string };
}) {
  const docs = Docs.find((docs) => docs.slug === params.slug);

  if (!docs) {
    notFound();
  }

  const currentComponent = Docs.indexOf(docs);
  const previousComponent = Docs[currentComponent - 1];
  const nextComponent = Docs[currentComponent + 1];

  const { title, description, content } = docs;

  return (
    <main className="my-2 xl:mb-24">
      <div className="space-y-10">
        <div className="space-y-4">
          <Breadcrumbs
            backLink="/ui"
            groupName="Components"
            currentPage={title}
          />
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {title}
          </h1>
          <p className="text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
            {description}
          </p>
        </div>
        <MDX source={content} />
        <Pagination
          back={{
            href: previousComponent ? `/ui/${previousComponent.slug}` : "",
            title: previousComponent ? previousComponent.title : "",
          }}
          next={{
            href: nextComponent ? `/ui/${nextComponent.slug}` : "",
            title: nextComponent ? nextComponent.title : "",
          }}
        />
      </div>
    </main>
  );
}
