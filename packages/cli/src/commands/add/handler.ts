import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'
import chalk from 'chalk'
import { Eta } from 'eta'
import { pascalCase } from 'scule'

import { manifestManager } from '@/utils/manifest-manager'
import { resolveAliasToAbsolutePath } from '@/utils/resolve-alias-to-absolute-path'
import { resolvePackageManagerCommand } from '@/utils/resolve-package-manager-command'
import { runShellCommand } from '@/utils/run-shell-command'
import { logger } from '@/utils/logger'

import {
  fetchComponentRegistry,
  writeComponentFileFromTemplate,
  logComponentSummary,
} from './utils'

export async function handler(
  availableComponents: string[],
  cliArgs: string[],
) {
  const etaEngine = new Eta()
  const getManifest = manifestManager.readManifest

  let selectedComponents = cliArgs

  if (selectedComponents.length === 0) {
    selectedComponents = (await p.multiselect({
      message:
        'Select your components › (`Space` to select) (`A` to toggle all) (`Enter` to confirm).',
      options: availableComponents.sort().map(componentName => ({
        label: pascalCase(componentName),
        value: componentName,
      })),
    })) as string[]

    if (p.isCancel(selectedComponents)) {
      logger.warning('Component selection was canceled. No changes were made.')
      process.exit(0)
    }
  }

  const componentsDirPath = resolveAliasToAbsolutePath(
    getManifest.aliases.components,
  )

  const skippedComponents: string[] = []

  if (existsSync(componentsDirPath)) {
    const existingFiles = await fs.readdir(componentsDirPath)
    const existingComponentNames = existingFiles.map(
      file => path.parse(file).name,
    )

    for (const componentName of selectedComponents) {
      if (!existingComponentNames.includes(componentName)) continue

      const shouldOverwrite = await p.confirm({
        message: `${chalk.cyan(pascalCase(componentName))} already exists. Do you want to overwrite it?`,
        active: 'Yes, overwrite',
        inactive: 'No, skip',
        initialValue: false,
      })

      if (!shouldOverwrite) {
        skippedComponents.push(componentName)
      }
    }
  }

  if (skippedComponents.length > 0) {
    logger.info(
      `${chalk.cyan(
        skippedComponents.join(', '),
      )} already existed and were kept.`,
    )

    selectedComponents = selectedComponents.filter(
      component => !skippedComponents.includes(component),
    )
  }

  const installedComponents: string[] = []

  for (const componentName of selectedComponents) {
    const componentData = await fetchComponentRegistry(componentName)

    if (!componentData) continue

    await p.tasks([
      {
        title: `Installing dependencies for component ${chalk.cyan(pascalCase(componentName))}`,
        task: async () => {
          const { command, args } = await resolvePackageManagerCommand(
            'add',
            componentData.externalDependencies,
          )

          const fullCommand = `${command} ${args.join(' ')}`
          await runShellCommand(fullCommand)

          return `${chalk.blue(componentData.externalDependencies.join(', '))} installed for component ${chalk.cyan(pascalCase(componentName))}.`
        },
        enabled: componentData.externalDependencies.length > 0,
      },
      {
        title: 'Adding dependent components',
        task: async () => {
          for (const dependencyName of componentData.internalDependencies) {
            const componentAbsolutePath = path.join(
              resolveAliasToAbsolutePath(getManifest.aliases.components),
              dependencyName,
            )

            const isComponentInstalled = existsSync(componentAbsolutePath)

            if (!isComponentInstalled) {
              const componentData = await fetchComponentRegistry(dependencyName)

              if (componentData) {
                await writeComponentFileFromTemplate(componentData, etaEngine)
              }
            }
          }

          return 'Dependent components added successfully.'
        },
        enabled: componentData.internalDependencies.length > 0,
      },
    ])

    await writeComponentFileFromTemplate(componentData, etaEngine)
    installedComponents.push(componentName)
  }

  logComponentSummary(installedComponents)
  logger.success('Components installed and ready!\n')
}
