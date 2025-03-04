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

  for (const dependency of dependenciesToInstall) {
    if (dependency in dependencies) {
      continue
    }

    await prompts.tasks(
      dependenciesToInstall.map(dependency => {
        return {
          title: `Installing ${dependency}`,
          task: async () => {
            await executeCommandAsync(
              `${packageManager.agent} add ${dependency}`,
            )
            return `${chalk.green(dependency)} installed!`
          },
        }
      }),
    )
  }
}
