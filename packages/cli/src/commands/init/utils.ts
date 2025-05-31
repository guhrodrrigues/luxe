import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import prettier from 'prettier'
import chalk from 'chalk'

import { FS_ERROR_CODES, THEME_BASE_CSS } from '@/utils/const'
import { resolveAliasToAbsolutePath } from '@/utils/resolve-alias-to-absolute-path'
import { logger } from '@/utils/logger'

import { postcss } from '@/lib/postcss'
import {
  postcssMergeRootBlocks,
  postcssMergeRules,
} from '@/lib/postcss/plugins'

// @TODO: There may be an improvement here later if more utilities are added.
export async function generateAndSaveUtilityFunctions(utilsAlias: string) {
  const fileContent = await prettier.format(
    String.raw`
    import { type ClassValue, clsx } from 'clsx'
    import { twMerge } from 'tailwind-merge'

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs))
    }
  `,
    {
      parser: 'typescript',
    },
  )

  const utilitiesPath = resolveAliasToAbsolutePath(utilsAlias)

  if (!existsSync(utilitiesPath)) {
    await fs.mkdir(utilitiesPath, {
      recursive: true,
    })
  }

  const filePath = path.join(utilitiesPath, 'cn.ts')

  try {
    await fs.writeFile(filePath, fileContent, 'utf8')
  } catch (err) {
    if (err.code === FS_ERROR_CODES.PERMISSION_DENIED) {
      throw new Error(
        `Writing the file to the \`${filePath}\` directory is not permitted. Please check access permissions.`,
      )
    }
  }
}

export async function appendAndMergeThemeStyles(cssPath: string) {
  try {
    const { dir: stylesDirectoryPath } = path.parse(cssPath)

    const cssFileWithVariables = await prettier.format(THEME_BASE_CSS, {
      parser: 'css',
    })

    if (!existsSync(stylesDirectoryPath)) {
      await fs.mkdir(stylesDirectoryPath, {
        recursive: true,
      })

      await fs.writeFile(cssPath, cssFileWithVariables, 'utf8')
    } else {
      const rawOldCSS = await fs.readFile(cssPath, 'utf8')
      const cssCombined = `${rawOldCSS}\n\n${cssFileWithVariables}`

      const { css } = await postcss([
        postcssMergeRules,
        postcssMergeRootBlocks,
      ]).process(cssCombined, {
        from: undefined,
      })

      const cssLuxeMergedWithPrevious = await prettier.format(css, {
        parser: 'css',
      })

      await fs.writeFile(cssPath, cssLuxeMergedWithPrevious, 'utf8')
    }
  } catch (err) {
    if (err.code === FS_ERROR_CODES.PERMISSION_DENIED) {
      throw new Error(
        `Writing the file to the \`${cssPath}\` directory is not permitted. Please check access permissions.`,
      )
    }
  }
}

export function logInitSummary({
  cssPath,
  componentsAlias,
  utilsAlias,
}: {
  cssPath: string
  componentsAlias: string
  utilsAlias: string
}) {
  logger.step(
    [
      chalk.bold('Init complete'),
      '',
      `CSS path         ${chalk.cyan(cssPath)}`,
      `Components alias ${chalk.cyan(componentsAlias)}`,
      `Utils alias      ${chalk.cyan(utilsAlias)}`,
      '',
      '✔ Utility functions generated',
      '✔ Theme variables merged',
      '✔ External dependencies installed',
      '',
      chalk.green.bold('Luxe is ready! You can now start building.'),
    ].join('\n'),
  )
}
