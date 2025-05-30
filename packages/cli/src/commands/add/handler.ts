import { existsSync } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'
import { pascalCase } from 'scule'
import chalk from 'chalk'
import { Eta } from 'eta'

import { resolvePackageManagerCommand } from '@/utils/resolve-package-manager-command'
import { runShellCommand } from '@/utils/run-shell-command'
import { resolveAliasToAbsolutePath } from '@/utils/resolve-alias-to-absolute-path'
import { manifestManager } from '@/utils/manifest-manager'

import { fetchComponentRegistry, writeComponentFileFromTemplate } from './utils'

export async function handler(
  availableComponents: string[],
  cliArgs: string[],
) {
  const etaEngine = new Eta()

  let selectedComponents = cliArgs

  if (selectedComponents.length === 0) {
    selectedComponents = (await p.multiselect({
      message:
        'Select your components › (`Space` to select) (`A` to toggle all) (`Enter` to confirm).',
      options: availableComponents.map(componentName => ({
        label: pascalCase(componentName),
        value: componentName,
      })),
    })) as string[]
  }

  for (const componentName of selectedComponents) {
    const componentData = await fetchComponentRegistry(componentName)

    if (!componentData) continue

    await p.tasks([
      {
        title: `Installing dependencies for component ${chalk.cyan(componentName)}`,
        task: async () => {
          const { command, args } = await resolvePackageManagerCommand(
            'add',
            componentData.externalDependencies,
          )

          const fullCommand = `${command} ${args.join(' ')}`
          await runShellCommand(fullCommand)

          return `Dependencies ${chalk.blue(
            componentData.externalDependencies.join(', '),
          )} installed successfully for ${chalk.cyan(componentName)}.`
        },
      },
      {
        title: 'Adding dependent components',
        task: async () => {
          for (const dependencyName of componentData.internalDependencies) {
            const getManifest = manifestManager.readManifest

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

          return 'All dependent components were successfully added.'
        },
      },
    ])

    await writeComponentFileFromTemplate(componentData, etaEngine)
  }
}
