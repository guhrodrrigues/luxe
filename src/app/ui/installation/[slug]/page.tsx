import { Metadata } from "next";
import { notFound } from "next/navigation";

import { promisify } from "util";
import fs from "fs";
import path from "path";

import { INSTALLATION } from "../_data/installation";
import { CodeBlock } from "../../_components/CodeBlock";
import { Breadcrumbs } from "../../_components/Breadcrumbs";
import { Pagination } from "../../_components/Pagination";

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
    title: `${name} Installation`,
    description: `How to install dependencies and structure your application with ${name}`,
    openGraph: {
      title: `Luxe — ${name} Installation`,
      description: `How to install dependencies and structure your application with ${name}`,
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
      title: `Luxe — ${name} Installation`,
      description: `How to install dependencies and structure your application with ${name}`,
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
      `./src/app/ui/installation/_data/_prompts/${filePath}.txt`,
    ),
    "utf8",
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
    <main className="my-2 space-y-12 xl:mb-24">
      <div className="space-y-4">
        <Breadcrumbs
          category="Get Started"
          backLink="/ui/installation"
          groupName="Installation"
          currentPage={name}
        />
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            {name}
          </h1>
          <p className="font-normal text-black/80 dark:text-white/90">
            Install and configure {name}.
          </p>
        </div>
      </div>
      <div aria-label={`${name} installation guide`}>
        {slug === "next" ? (
          <>
            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">1</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    Create a new project
                  </h2>
                  <CodeBlock
                    fileName="Terminal"
                    code="npx create-next-app@latest my-app"
                    lang="shellscript"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">2</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    After the above command, it is mandatory to select these
                    values in the prompts
                  </h2>
                  <CodeBlock
                    code={await readFilePath("next")}
                    lang="shellscript"
                    copyCode={false}
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">3</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pl-8 pt-1">
                  <h2 className="font-medium text-primary">Start the app</h2>
                  <CodeBlock
                    fileName="Terminal"
                    code={"cd my-app && npm run dev"}
                    lang="shellscript"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">1</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    Create a new project
                  </h2>
                  <CodeBlock
                    fileName="Terminal"
                    code="npm create vite my-app"
                    lang="shellscript"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">2</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    Install dependencies
                  </h2>
                  <CodeBlock
                    fileName="Terminal"
                    code="cd my-app && npm i"
                    lang="shellscript"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">3</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">Add Tailwind CSS</h2>
                  <CodeBlock
                    fileName="Terminal"
                    code={
                      "npm i -D tailwindcss postcss autoprefixer" +
                      "\n" +
                      "npx tailwindcss init -p"
                    }
                    lang="shellscript"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">4</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    Edit{" "}
                    <code className="rounded bg-neutral-300/80 px-1 py-1 font-mono text-sm dark:bg-neutral-800/80">
                      tsconfig.json
                    </code>{" "}
                    file
                  </h2>
                  <CodeBlock
                    fileName="tsconfig.json"
                    code={await readFilePath("tsconfig.json")}
                    lang="json"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">5</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pb-10 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    Edit{" "}
                    <code className="rounded bg-neutral-300/80 px-1 py-1 font-mono text-sm dark:bg-neutral-800/80">
                      tsconfig.app.json
                    </code>{" "}
                    file
                  </h2>
                  <CodeBlock
                    code={await readFilePath("tsconfig.app.json")}
                    fileName="tsconfig.app.json"
                    lang="json"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
                <span className="font-semibold text-primary">6</span>
              </div>
              <div className="ml-[1.1rem] border-l border-border dark:border-neutral-900">
                <div className="space-y-4 pl-8 pt-1">
                  <h2 className="font-medium text-primary">
                    Update{" "}
                    <code className="rounded bg-neutral-300/80 px-1 py-1 font-mono text-sm dark:bg-neutral-800/80">
                      vite.config.ts
                    </code>
                  </h2>
                  <div className="space-y-3.5">
                    <CodeBlock
                      fileName="Terminal"
                      code={
                        "# So you can import 'path' without error" +
                        "\n" +
                        "npm i -D @types/node"
                      }
                      lang="shellscript"
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

      <Pagination
        back={{
          href: previousPage ? `/ui/installation/${previousPage.slug}` : "",
          name: previousPage ? previousPage.name : "",
        }}
        next={{
          href: nextPage ? `/ui/installation/${nextPage.slug}` : "",
          name: nextPage ? nextPage.name : "",
        }}
      />
    </main>
  );
}
