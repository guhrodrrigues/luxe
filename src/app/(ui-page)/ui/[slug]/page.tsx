import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { ArrowLeft } from "lucide-react";

import { COMPONENTS } from "@/data/components";

import { CodeBlock } from "../_components/component-page/CodeBlock";
import { ComponentView } from "../_components/component-page/ComponentView";

export async function generateStaticParams() {
  const component = COMPONENTS.map((component) => ({
    slug: component.slug,
  }));

  return component;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const component = COMPONENTS.find(
    (component) => component.slug === params.slug
  );

  if (!component) {
    return;
  }

  const { name, slug } = component;

  return {
    title: name,
    openGraph: {
      title: `Luxe — ${name}`,
      description: `Navigate to ${name} component, which will make your application sophisticated and luxurious.`,
      type: "website",
      url: `https://luxeui.com/ui/${slug}`,
      images: [
        {
          width: 1920,
          height: 1080,
          url: "/open-graphs/og-luxe-website.png",
          alt: "Luxe's website cover",
        },
      ],
    },
    twitter: {
      title: `Luxe — ${name}`,
      description: `Navigate to ${name} component, which will make your application sophisticated and luxurious.`,
      card: "summary_large_image",
      images: [
        {
          width: 1920,
          height: 1080,
          url: "/open-graphs/og-luxe-website.png",
          alt: "Luxe's website cover",
        },
      ],
    },
  };
}

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}

export default async function ComponentPage({
  params,
}: {
  params: { slug: string };
}) {
  const component = COMPONENTS.find(
    (component) => component.slug === params.slug
  );

  if (!component) {
    notFound();
  }

  const filePath = `./src/app/_components/ui/${
    component.type
  }/${component.name.replace(/\s+/g, "")}.tsx`;

  const code = await readFilePath(filePath);

  const cnPath = `./src/utils/cn.ts`;
  const cnCode = await readFilePath(cnPath);

  const twConfig = JSON.stringify(component.twConfig, null, 2);

  return (
    <main className="my-2 xl:my-24">
      <section className="space-y-6">
        <Link
          href="/ui"
          className="flex select-none items-center text-sm gap-1 text-primary/80 w-fit"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
        <div className="space-y-7">
          <h1 className="text-3xl font-semibold text-primary">
            {component.name}
          </h1>
          <ComponentView>{component.component}</ComponentView>
          {component.download && (
            <CodeBlock
              code={component.download}
              fileName="Install dependencies"
            />
          )}
          {component.cnFunction && (
            <CodeBlock code={cnCode} fileName="utils/cn.ts" />
          )}
          <CodeBlock
            code={code}
            fileName={`${component.name.replace(/\s+/g, "")}.tsx`}
          />
          {twConfig && (
            <CodeBlock code={twConfig} fileName="tailwind.config.ts" />
          )}
        </div>
      </section>
    </main>
  );
}
