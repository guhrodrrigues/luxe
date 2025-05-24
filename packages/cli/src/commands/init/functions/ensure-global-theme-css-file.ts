import { promises as fs } from 'node:fs'
import path from 'node:path'

import prettier from 'prettier'

import { THEME_BASE_CSS, LUXE_CSS_FILE } from '@/utils/const'

export async function ensureGlobalThemeCssFile(globalsCssPath: string) {
  const code = await prettier.format(THEME_BASE_CSS, {
    parser: 'css',
  })

  const luxeImport = '@import "luxe.css";'

  const resolvedPath = path.resolve(globalsCssPath)
  const stylesPath = path.dirname(resolvedPath)

  const currentCssContent = await fs.readFile(resolvedPath, 'utf8')

  const cssFileLines = currentCssContent
    .split('\n')
    .filter(line => line !== luxeImport)

  cssFileLines.splice(2, 0, luxeImport)

  const rewrittenCssContent = cssFileLines.join('\n')

  await fs.writeFile(path.join(stylesPath, LUXE_CSS_FILE), code, 'utf8')
  await fs.writeFile(resolvedPath, rewrittenCssContent, 'utf8')
}
