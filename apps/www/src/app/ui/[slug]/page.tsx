import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";
import { getDocs } from "@/lib/mdx";
import { MDX } from "@/app/_components/mdx";

import { ArrowUpRightIcon } from "lucide-react";

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
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;

  const docs = Docs.find((docs) => docs.slug === slug);

  if (!docs) {
    return;
  }

  const { title, description, slug: slugDocs } = docs;

  return {
    title,
    description,
    openGraph: {
      title: `Luxe — ${title}`,
      description,
      type: "website",
      url: `https://luxeui.com/ui/${slugDocs}`,
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const docs = Docs.find((docs) => docs.slug === slug);

  if (!docs) notFound();

  const currentComponent = Docs.indexOf(docs);
  const previousComponent = Docs[currentComponent - 1];
  const nextComponent = Docs[currentComponent + 1];

  const { title, description, content, externalDocs, externalApi } = docs;

  return (
    <main className="my-2">
      <div className="space-y-20">
        <div className="space-y-4">
          <Breadcrumbs groupName="Components" currentPage={title} />
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {title}
          </h1>
          <p className="text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
            {description}
          </p>
          {externalDocs && externalApi && (
            <div className="flex items-center gap-2">
              <a
                href={externalDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-xs text-neutral-700 dark:text-neutral-200 transition-all duration-200 border border-neutral-300 dark:border-neutral-800 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-200/40 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800/60"
              >
                Docs
                <ArrowIconGlitch />
              </a>
              <a
                href={externalApi}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-xs text-neutral-700 dark:text-neutral-200 transition-all duration-200 border border-neutral-300 dark:border-neutral-800 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-200/40 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800/60"
              >
                Component API
                <ArrowIconGlitch />
              </a>
            </div>
          )}
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
