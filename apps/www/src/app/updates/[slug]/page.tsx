import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDocs } from "@/lib/mdx";
import { MDX } from "@/app/_components/mdx";
import { ArrowUpRightIcon } from "lucide-react";
import { BlurImage } from "@/app/_components/BlurImage";

const Docs = getDocs("updates").sort((a, b) => a.title.localeCompare(b.title));

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

  const { title, description, slug, banner } = docs;

  return {
    title,
    description,
    openGraph: {
      title: `Luxe — ${title}`,
      description,
      type: "website",
      url: `https://luxeui.com/updates/${slug}`,
      images: [
        {
          width: 1920,
          height: 1080,
          url: `https://luxeui.com${banner}`,
          alt: `${title} cover`,
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
          url: `https://luxeui.com${banner}`,
          alt: `${title} cover`,
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

  if (!docs) notFound();

  const { title, content, date, author, author_image, author_twitter, banner } =
    docs;

  return (
    <main className="flex flex-col gap-10 w-full max-w-5xl mx-auto px-6 py-32">
      <div className="space-y-14">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href={author_twitter!}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
              >
                <div className="rounded-full overflow-hidden">
                  <BlurImage
                    src={author_image!}
                    alt={`${author!.split(" ")[0]}'s profile picture`}
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-gradient text-sm font-[460]">
                  {author}
                </span>
              </a>
              <Divider />
              <span className="text-gradient text-sm font-[460]">{date}</span>
            </div>
            <h1 className="font-normal text-4xl text-gradient tracking-tight md:text-5xl">
              {title}
            </h1>
          </div>
          <div className="overflow-hidden border border-transparent dark:border-neutral-900 rounded-2xl">
            <BlurImage src={banner!} alt="Luxe 2.0" />
          </div>
        </div>
        <MDX source={content} />
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
      <span className="absolute left-0 top-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
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
