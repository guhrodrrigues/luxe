import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { COMPONENTS } from "@/data/components";

import { CodeBlock } from "../_components/component-page/CodeBlock";
import { ComponentView } from "../_components/component-page/ComponentView";
import { Breadcrumbs } from "../_components/Breadcrumbs";

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
          url: "https://luxeui.com/open-graphs/og-luxe-website.png",
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
          url: "https://luxeui.com/open-graphs/og-luxe-website.png",
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

  const currentComponent = COMPONENTS.indexOf(component);
  const previousComponent = COMPONENTS[currentComponent - 1];
  const nextComponent = COMPONENTS[currentComponent + 1];

  return (
    <main className="my-2 xl:mb-24">
      <div className="space-y-12">
        <div className="space-y-6">
          <Breadcrumbs
            backLink="/ui"
            groupName="Components"
            currentPage={component.name}
          />
          <h1 className="text-3xl font-semibold text-primary">
            {component.name}
          </h1>
        </div>
        <div className="space-y-10">
          <ComponentView>{component.component}</ComponentView>
          {component.download && (
            <CodeBlock
              code={component.download}
              fileName="Install dependencies"
              lang="shell"
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
        <div className="flex items-center justify-between border-t border-border pt-9">
          <div>
            {previousComponent && (
              <Link
                href={`/ui/${previousComponent.slug}`}
                className="flex flex-col text-sm"
              >
                <span>Back</span>
                <div className="flex items-center gap-1">
                  <ArrowLeftIcon size={12} className="text-primary" />
                  <span className="text-primary">{previousComponent.name}</span>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextComponent && (
              <Link
                href={`/ui/${nextComponent.slug}`}
                className="flex flex-col items-end text-sm"
              >
                <span>Next</span>
                <div className="flex items-center gap-1">
                  <span className="text-primary">{nextComponent.name}</span>
                  <ArrowRightIcon size={12} className="text-primary" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
