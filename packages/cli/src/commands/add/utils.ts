import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import type { Eta } from 'eta'
import prettier from 'prettier'
import chalk from 'chalk'
import { pascalCase } from 'scule'

import { type Registry, RegistrySchema } from '@/schemas/registry'
import { apiConfig } from '@/services/api-config'

import { CLIError } from '@/utils/cli-error'
import { logger } from '@/utils/logger'
import { manifestManager } from '@/utils/manifest-manager'
import { resolveAliasToAbsolutePath } from '@/utils/resolve-alias-to-absolute-path'

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
        `Component ${chalk.green(componentName)} not found in the registry. Please check the name.`,
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
    throw new CLIError(
      `Failed to fetch registry for ${componentName}: ${(error as Error).message}`,
    )
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

export function logComponentSummary(installedComponents: string[]) {
  if (!installedComponents.length) return

  const getManifest = manifestManager.readManifest

  const componentsPath = resolveAliasToAbsolutePath(
    getManifest.aliases.components,
  )

  const formattedList = installedComponents
    .map(
      component => `  ${chalk.gray('•')} ${chalk.green(pascalCase(component))}`,
    )
    .join('\n')

  logger.step(
    [
      chalk.bold('✔ Components added\n'),
      formattedList,
      '',
      `${chalk.dim('Location →')} ${chalk.yellow(componentsPath)}`,
    ].join('\n'),
  )
}
