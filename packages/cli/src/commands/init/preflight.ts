import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import { PROCESS_CWD } from '@/utils/const'

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

  const { dependencies } = JSON.parse(packageJsonFileContent) as {
    dependencies: Record<string, string>
  }

  const tailwindDependency = 'tailwindcss'
  const regexValidateTailwindVersion =
    /^\s*(?:\^|~|>=|<=|>|<|=)?\s*4\.\d+(?:\.\d+)?(?:-[0-9A-Za-z.-]+)?\s*$/ // 4.x or 4.x.x

  if (!(tailwindDependency in dependencies)) {
    errorsFound[InitCommandErrors.TAILWIND_NOT_INSTALLED] = true
  }

  if (!regexValidateTailwindVersion.test(dependencies[tailwindDependency])) {
    errorsFound[InitCommandErrors.INCOMPATIBLE_VERSION_TAILWIND] = true
  }

  return { errorsFound }
}
