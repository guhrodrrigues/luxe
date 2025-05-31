import path from 'node:path'
import * as tsConfigPaths from 'tsconfig-paths'

import { PROCESS_CWD } from './const'

export function resolveAliasToAbsolutePath(aliasImport: string) {
  const configResult = tsConfigPaths.loadConfig(PROCESS_CWD)

  if (configResult.resultType === 'failed') {
    throw new Error(`Failed to load tsconfig: ${configResult.message}`)
  }

  const { absoluteBaseUrl, paths } = configResult

  if (!paths) {
    throw new Error('No paths found in tsconfig configuration.')
  }

  for (const aliasPattern in paths) {
    const aliasPrefix = aliasPattern.replace(/\*$/, '')
    const targetPatterns = paths[aliasPattern]

    if (aliasImport.startsWith(aliasPrefix)) {
      const remainingPath = aliasImport.slice(aliasPrefix.length)

      const targetPattern = targetPatterns[0]
      const targetPrefix = targetPattern.replace(/\*$/, '')

      const resolvedPath = path.resolve(
        absoluteBaseUrl,
        targetPrefix,
        remainingPath,
      )

      return resolvedPath
    }
  }

  throw new Error(
    `Failed to resolve the alias '${aliasImport}' to an absolute path. Please verify that the alias is correctly configured in tsconfig.json.`,
  )
}
