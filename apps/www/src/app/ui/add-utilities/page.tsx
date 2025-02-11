import type { Metadata } from 'next'

import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { Breadcrumbs } from '../_components/Breadcrumbs'
import { CodeBlock } from '../_components/CodeBlock'
import { Pagination } from '../_components/Pagination'

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile)

  const fileContent = await readFile(path.join(process.cwd(), filePath), 'utf8')

  return fileContent
}

export const metadata: Metadata = {
  title: 'Add Utilities',
  description:
    'This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.',
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: 'https://luxeui.com/open-graphs/og-add-utilities.png',
        alt: "Luxe's website cover",
      },
    ],
    locale: 'en',
    siteName: 'Gustavo Rodrigues',
    title: 'Luxe — Add Utilities',
    description:
      'This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.',
    type: 'website',
    url: 'https://luxeui.com/ui/add-utilities',
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: 'https://luxeui.com/open-graphs/og-add-utilities.png',
        alt: "Luxe's website cover",
      },
    ],
    card: 'summary_large_image',
    title: 'Luxe — Add Utilities',
    description:
      'This code is widely used in Luxe, it is responsible for merging classes when they have conditionals.',
    site: '@guhrodrrigues',
    creator: 'Gustavo Rodrigues',
  },
}

export default async function AddUtilitiesPage() {
  const cnPath = `./src/utils/cn.ts`
  const cnCode = await readFilePath(cnPath)

  return (
    <main className="my-2 space-y-10 xl:mb-24">
      <div className="space-y-4">
        <Breadcrumbs groupName="Get Started" currentPage="Add Utilities" />
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            Add Utilities
          </h1>
          <p className="max-w-lg text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
            This code is widely used in Luxe, it is responsible for merging
            classes when they have conditionals and for organizing the code.
          </p>
        </div>
      </div>
      <div>
        <div className="relative">
          <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
            <span className="font-semibold text-primary">1</span>
          </div>
          <div className="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900">
            <div className="space-y-4 pb-10 pl-8 pt-1">
              <h2 className="font-medium text-primary">Install dependencies</h2>
              <CodeBlock
                code="npm i clsx tailwind-merge"
                fileName="Terminal"
                lang="shellscript"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute flex h-9 w-9 select-none items-center justify-center rounded-full border-[3px] border-background bg-neutral-300 dark:bg-neutral-800">
            <span className="font-semibold text-primary">2</span>
          </div>
          <div className="ml-[1.1rem] border-l border-neutral-200 dark:border-neutral-900">
            <div className="space-y-4 pl-8 pt-1">
              <h2 className="font-medium text-primary">
                Create a file with the path{' '}
                <code className="rounded bg-neutral-300/80 px-1 py-1 font-mono text-sm text-foreground dark:bg-neutral-800/80">
                  utils/cn.ts
                </code>
              </h2>
              <CodeBlock code={cnCode} fileName="utils/cn.ts" />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        back={{
          href: '/ui/installation',
          name: 'Installation',
        }}
        next={{
          href: '/ui',
          name: 'Browse Components',
        }}
      />
    </main>
  )
}
