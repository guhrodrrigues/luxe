import { Metadata } from "next";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";
import { promisify } from "util";

import { COMPONENTS } from "@/data/components";

import { cn } from "@/utils/cn";

import { CodeBlock } from "../_components/CodeBlock";
import { ComponentView } from "../_components/ComponentView";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";

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
    (component) => component.slug === params.slug,
  );

  if (!component) {
    return;
  }

  const { name, slug } = component;

  return {
    title: name,
    description: `Navigate to ${name} component, which will make your application sophisticated and luxurious.`,
    openGraph: {
      title: `Luxe — ${name}`,
      description: `Navigate to ${name} component, which will make your application sophisticated and luxurious.`,
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
      title: `Luxe — ${name}`,
      description: `Navigate to ${name} component, which will make your application sophisticated and luxurious.`,
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

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8",
  );

  return fileContent;
}

export default async function ComponentPage({
  params,
}: {
  params: { slug: string };
}) {
  const component = COMPONENTS.find(
    (component) => component.slug === params.slug,
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
      <div className="space-y-8">
        <div className="space-y-4">
          <Breadcrumbs
            backLink="/ui"
            groupName="Components"
            currentPage={component.name}
          />
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {component.name}
          </h1>
        </div>
        <ComponentView
          isReloadAnimation={component.isReloadAnimation}
          className={cn(component.className)}
        >
          {component.component}
        </ComponentView>
        {component.download && (
          <CodeBlock
            code={component.download}
            fileName="Terminal"
            lang="shellscript"
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

        <Pagination
          back={{
            href: previousComponent ? `/ui/${previousComponent.slug}` : "",
            name: previousComponent ? previousComponent.name : "",
          }}
          next={{
            href: nextComponent ? `/ui/${nextComponent.slug}` : "",
            name: nextComponent ? nextComponent.name : "",
          }}
        />
      </div>
    </main>
  );
}
