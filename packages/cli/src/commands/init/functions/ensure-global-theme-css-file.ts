import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import prettier from 'prettier'

import { THEME_BASE_CSS } from '@/utils/const'

export async function ensureGlobalThemeCssFile(cssFilePath: string) {
  const { dir } = path.parse(cssFilePath)
  const resolvedDir = path.resolve(process.cwd(), dir)

  if (!existsSync(resolvedDir)) {
    await fs.mkdir(resolvedDir, {
      recursive: true,
    })
  }

  const formattedContent = await prettier.format(THEME_BASE_CSS, {
    parser: 'css',
  })

  await fs.writeFile(cssFilePath, formattedContent, 'utf8')
}
