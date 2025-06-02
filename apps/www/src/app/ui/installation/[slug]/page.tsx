import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Pagination } from "../../_components/Pagination";
import { getDocs } from "@/lib/mdx";
import { MDX } from "@/app/_components/mdx";

const Docs = getDocs("get-started").filter((docs) => docs.slug !== "cli");

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

  const { title, slug: slugDocs } = docs;

  return {
    title: `${title} Installation`,
    description: `How to install dependencies and structure your application with ${title}`,
    openGraph: {
      title: `Luxe — ${title} Installation`,
      description: `How to install dependencies and structure your application with ${title}`,
      type: "website",
      url: `https://luxeui.com/ui/installation/${slugDocs}`,
      images: [
        {
          width: 1920,
          height: 1080,
          url: "https://luxeui.com/open-graphs/og-installation.png",
          alt: "Luxe's website cover",
        },
      ],
    },
    twitter: {
      title: `Luxe — ${title} Installation`,
      description: `How to install dependencies and structure your application with ${title}`,
      card: "summary_large_image",
      images: [
        {
          width: 1920,
          height: 1080,
          url: "https://luxeui.com/open-graphs/og-installation.png",
          alt: "Luxe's website cover",
        },
      ],
    },
  };
}

export default async function InstallationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const docs = Docs.find((docs) => docs.slug === slug);

  if (!docs) notFound();

  const { title, description, content } = docs;

  const currentPage = Docs.indexOf(docs);
  const nextPage = Docs[currentPage + 1];
  const previousPage = Docs[currentPage - 1];

  return (
    <main className="my-2 space-y-10">
      <div className="space-y-4">
        <Breadcrumbs
          category="Get Started"
          backLink="/ui/installation"
          groupName="Installation"
          currentPage={title}
        />
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {title}
          </h1>
          <p className="font-normal text-black/80 dark:text-white/90">
            {description}
          </p>
        </div>
      </div>
      <MDX source={content} />
      <Pagination
        back={{
          href: previousPage ? `/ui/installation/${previousPage.slug}` : "",
          title: previousPage ? previousPage.title : "",
        }}
        next={{
          href: nextPage ? `/ui/installation/${nextPage.slug}` : "",
          title: nextPage ? nextPage.title : "",
        }}
      />
    </main>
  );
}
