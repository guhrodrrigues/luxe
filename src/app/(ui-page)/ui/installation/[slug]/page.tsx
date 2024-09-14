import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { promisify } from "util";
import fs from "fs";
import path from "path";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { INSTALLATION } from "../_data/installation";
import { CodeBlock } from "../../_components/component-page/CodeBlock";
import { Breadcrumbs } from "../../_components/Breadcrumbs";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const installation = INSTALLATION.find((el) => el.slug === params.slug);

  if (!installation) {
    return;
  }

  const { name, slug } = installation;

  return {
    title: name,
    openGraph: {
      title: `Luxe — ${name}`,
      description: `How to install dependencies and structure your application with ${name} to use Luxe.`,
      type: "website",
      url: `https://luxeui.com/ui/installation/${slug}`,
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
      title: `Luxe — ${name}`,
      description: `How to install dependencies and structure your application with ${name} to use Luxe.`,
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

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(
      process.cwd(),
      `./src/app/(ui-page)/ui/installation/_data/_prompts/${filePath}.txt`
    ),
    "utf8"
  );

  return fileContent;
}

export default async function InstallationSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const installation = INSTALLATION.find((el) => el.slug === params.slug);

  if (!installation) {
    notFound();
  }

  const { name, slug } = installation;

  const currentPage = INSTALLATION.indexOf(installation);
  const nextPage = INSTALLATION[currentPage + 1];
  const previousPage = INSTALLATION[currentPage - 1];

  return (
    <main className="my-2 xl:mb-24 space-y-12">
      <div className="space-y-6">
        <Breadcrumbs
          backLink="/ui/installation"
          groupName="Installation"
          currentPage={name}
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-primary">{name}</h1>
          <p className="max-w-lg font-normal text-primary/80">
            Install and configure {name}.
          </p>
        </div>
      </div>
      <div aria-label={`${name} installation guide`}>
        {slug === "next" ? (
          <>
            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">1</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    Create a new project:
                  </h1>
                  <CodeBlock code="npx create-next-app@latest" lang="shell" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">2</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    After the above command, you will see the following prompts:
                  </h1>
                  <CodeBlock
                    code={await readFilePath("next")}
                    lang="shell"
                    copyCode={false}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">3</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1">
                  <h1 className="text-primary font-medium">Start the app:</h1>
                  <CodeBlock code={"cd my-app && npm run dev"} lang="shell" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">1</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    Create a new project:
                  </h1>
                  <CodeBlock
                    code="npm create vite@latest my-app"
                    lang="shell"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">2</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    After the above command, install and enter the application:
                  </h1>
                  <CodeBlock code="cd my-app && npm install" lang="shell" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">3</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    Add Tailwind CSS:
                  </h1>
                  <CodeBlock
                    code={
                      "npm install -D tailwindcss postcss autoprefixer" +
                      "\n" +
                      "npx tailwindcss init -p"
                    }
                    lang="shell"
                    copyCode={false}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">4</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    Edit{" "}
                    <code className="bg-neutral-800 p-1 text-sm rounded">
                      tsconfig.json
                    </code>{" "}
                    file:
                  </h1>
                  <CodeBlock
                    fileName="tsconfig.json"
                    code={await readFilePath("tsconfig.json")}
                    lang="json"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">5</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1 pb-10">
                  <h1 className="text-primary font-medium">
                    Edit{" "}
                    <code className="bg-neutral-800 p-1 text-sm rounded">
                      tsconfig.app.json
                    </code>{" "}
                    file:
                  </h1>
                  <CodeBlock
                    code={await readFilePath("tsconfig.app.json")}
                    fileName="tsconfig.app.json"
                    lang="json"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center bg-neutral-800 border-[3px] border-background w-9 h-9 rounded-full">
                <span className="text-primary">6</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border">
                <div className="pl-8 space-y-4 pt-1">
                  <h1 className="text-primary font-medium">
                    Update{" "}
                    <code className="bg-neutral-800 p-1 text-sm rounded">
                      vite.config.ts
                    </code>
                    :
                  </h1>
                  <div className="space-y-5">
                    <CodeBlock
                      code={
                        "# So you can import 'path' without error" +
                        "\n" +
                        "npm i -D @types/node"
                      }
                      lang="shell"
                    />
                    <CodeBlock
                      fileName="vite.config.ts"
                      code={await readFilePath("vite")}
                      lang="ts"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-border pt-9">
        <div>
          {previousPage && (
            <Link
              href={`/ui/installation/${previousPage.slug}`}
              className="flex flex-col text-sm"
            >
              <span>Back</span>
              <div className="flex items-center gap-1">
                <ArrowLeftIcon size={12} className="text-primary" />
                <span className="text-primary">{previousPage.name}</span>
              </div>
            </Link>
          )}
        </div>
        <div>
          {nextPage && (
            <Link
              href={`/ui/installation/${nextPage.slug}`}
              className="flex flex-col items-end text-sm"
            >
              <span>Next</span>
              <div className="flex items-center gap-1">
                <span className="text-primary">{nextPage.name}</span>
                <ArrowRightIcon size={12} className="text-primary" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
