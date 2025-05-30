import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import prettier from 'prettier'
import type { Eta } from 'eta'

import { apiConfig } from '@/services/api-config'
import { RegistrySchema, type Registry } from '@/schemas/registry'

import { logger } from '@/utils/logger'
import { manifestManager } from '@/utils/manifest-manager'
import { resolveAliasToAbsolutePath } from '@/utils/resolve-alias-to-absolute-path'
import { CLIError } from '@/utils/cli-error'

export async function fetchComponentRegistry(componentName: string) {
  try {
    const response = await fetch(
      `${apiConfig.luxeRegistry}/${componentName}.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok) {
      logger.warning(
        `Component ${componentName} not found in the registry. Please check the name.`,
      )
      return null
    }

    const parsed = RegistrySchema.safeParse(await response.json())

    if (!parsed.success) {
      logger.warning(
        `Component ${componentName} failed schema validation and will be skipped.`,
      )
      return null
    }

    return parsed.data
  } catch (error) {
    logger.error(
      `Failed to fetch registry for ${componentName}: ${(error as Error).message}`,
    )
    return null
  }
}

export async function writeComponentFileFromTemplate(
  componentRegistryEntry: Registry,
  eta: Eta,
) {
  const { file } = componentRegistryEntry
  const getManifest = manifestManager.readManifest

  try {
    const componentCode = eta.renderString(file.content, {
      aliases: getManifest.aliases,
    })

    const formattedComponentCode = await prettier.format(componentCode, {
      parser: 'typescript',
    })

    const componentsDirPath = resolveAliasToAbsolutePath(
      getManifest.aliases.components,
    )

    if (!existsSync(componentsDirPath)) {
      await fs.mkdir(componentsDirPath, {
        recursive: true,
      })
    }

    const outFilePath = path.join(componentsDirPath, file.name)

    await fs.writeFile(outFilePath, formattedComponentCode, 'utf-8')
  } catch {
    throw new CLIError(`Failed to write component file: ${file.name}`)
  }
}
