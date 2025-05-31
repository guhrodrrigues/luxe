import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import { PROCESS_CWD, TAILWIND_PACKAGE, TAILWIND_V4_REGEX } from '@/utils/const'

export enum InitCommandErrors {
  UNIDENTIFIED_NODE_PROJECT = '1',
  TAILWIND_NOT_INSTALLED = '2',
  INCOMPATIBLE_VERSION_TAILWIND = '3',
}

export async function preFlight() {
  const errorsFound = {} as Record<string, boolean>

  const packageJsonFilePath = path.resolve(PROCESS_CWD, 'package.json')

  const isPackageJsonFileExists = existsSync(packageJsonFilePath)

  if (!isPackageJsonFileExists) {
    errorsFound[InitCommandErrors.UNIDENTIFIED_NODE_PROJECT] = true
  }

  const packageJsonFileContent = await fs.readFile(packageJsonFilePath, 'utf8')

  const { dependencies, devDependencies } = JSON.parse(
    packageJsonFileContent,
  ) as {
    dependencies: Record<string, string>
    devDependencies: Record<string, string>
  }

  const isTailwindInDeps =
    TAILWIND_PACKAGE in dependencies || TAILWIND_PACKAGE in devDependencies

  if (!isTailwindInDeps) {
    errorsFound[InitCommandErrors.TAILWIND_NOT_INSTALLED] = true
  } else {
    const version =
      dependencies[TAILWIND_PACKAGE] || devDependencies[TAILWIND_PACKAGE]

    const isTailwindV4 = TAILWIND_V4_REGEX.test(version)

    if (!isTailwindV4) {
      errorsFound[InitCommandErrors.INCOMPATIBLE_VERSION_TAILWIND] = true
    }
  }

  return {
    errorsFound,
  }
}
