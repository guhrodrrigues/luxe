import { exec } from 'node:child_process'
import { promises as fs } from 'node:fs'
import { promisify } from 'node:util'

import * as prompts from '@clack/prompts'
import chalk from 'chalk'
import { findUp } from 'find-up'
import { detect } from 'package-manager-detector/detect'

export async function installExternalDependencies(
  dependenciesToInstall: string[],
) {
  const packageManager = await detect()
  const executeCommandAsync = promisify(exec)

  if (!packageManager) {
    throw new Error('Could not detect package manager.')
  }

  const packageJsonPath = await findUp('package.json')
  if (!packageJsonPath) return

  const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8')

  const { dependencies } = JSON.parse(packageJsonContent) as {
    dependencies: Record<string, string>
  }

  const dependenciesNotInstalled = dependenciesToInstall.filter(
    dependency => !Object.keys(dependencies).includes(dependency),
  )

  if (dependenciesNotInstalled.length > 0) {
    await prompts.tasks(
      dependenciesNotInstalled.map(dependency => {
        return {
          title: `Installing ${dependency}`,
          task: async () => {
            try {
              await executeCommandAsync(
                `${packageManager.agent} add ${dependency}`,
              )

              return `${chalk.green(dependency)} installed!`
            } catch {
              return `${chalk.red(dependency)} not installed!`
            }
          },
        }
      }),
    )
  }
}
