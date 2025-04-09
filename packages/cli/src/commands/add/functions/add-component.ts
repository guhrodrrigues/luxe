import { promises as fs } from 'node:fs'
import path from 'node:path'

import type { Eta } from 'eta'
import prettier from 'prettier'

import { ensureFolderExists } from '@/utils/ensure-folder-exists'
import { luxeConfig } from '@/utils/luxe-config-manager'

import {
  type ComponentFile,
  componentFileSchema,
} from '@/schemas/component-schema'
import type { LuxeAliasesProps } from '@/schemas/luxe-config-schema'

/**
 * Function responsible for adding the component code to the project.
 */
export async function addComponent(
  componentFiles: ComponentFile[],
  aliases: LuxeAliasesProps,
  etaEngine: Eta,
) {
  const targetPath = aliases.components
  const projectConfig = await luxeConfig.readConfig()

  const resolvedAliases = Object.entries(aliases).reduce(
    (acc, [aliasKey]) => {
      const typedKey = aliasKey as keyof LuxeAliasesProps
      acc[aliasKey] = projectConfig.aliases[typedKey].slice(0, -2)

      return acc
    },
    {} as Record<string, string>,
  )

  ensureFolderExists(targetPath)

  for (const file of componentFiles) {
    const { name: fileName, content: rawContent } =
      componentFileSchema.parse(file)

    const resolvedContent = await etaEngine.renderStringAsync(rawContent, {
      aliases: resolvedAliases,
    })

    const formattedContent = await prettier.format(resolvedContent, {
      parser: 'typescript',
      plugins: ['prettier-plugin-tailwindcss'],
    })

    await fs.writeFile(
      path.resolve(targetPath, fileName),
      formattedContent,
      'utf8',
    )
  }
}
