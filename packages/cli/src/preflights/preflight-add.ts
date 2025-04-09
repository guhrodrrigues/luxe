import { existsSync } from 'node:fs'
import path from 'node:path'

import { loadConfig } from 'tsconfig-paths'

import * as ERRORS from '@/utils/errors'
import { ExecutionError } from '@/utils/errors/execution-error'
import { luxeConfig } from '@/utils/luxe-config-manager'

import type { LuxeAliasesProps } from '@/schemas/luxe-config-schema'

export async function preFlightAdd() {
  const errors: Record<string, boolean> = {}

  if (
    !existsSync(process.cwd()) ||
    !existsSync(path.resolve(process.cwd(), 'package.json'))
  ) {
    errors[ERRORS.DIRECTORY_NOT_FOUND_OR_EMPTY_PROJECT] = true

    return {
      errors,
      config: null,
    }
  }

  const tsConfigPath = path.resolve(process.cwd(), 'tsconfig.json')

  const tsConfig = loadConfig(tsConfigPath)

  if (tsConfig.resultType === 'failed') {
    errors[ERRORS.TS_CONFIG_FILE_NOT_FOUND] = true

    return {
      errors,
      config: null,
    }
  }

  let config = await luxeConfig.readConfig()
  const aliasesResolved: Record<string, string> = {}

  for (const [aliasKey, aliasValue] of Object.entries(config.aliases)) {
    if (!tsConfig.paths[aliasValue]) {
      continue
    }

    if (tsConfig.paths[aliasValue].length > 0) {
      aliasesResolved[aliasKey] = tsConfig.paths[aliasValue][0].slice(0, -1)
    } else {
      throw new ExecutionError(
        `Unable to find the ${aliasKey} alias in your tsconfig.json. Please check that it is defined correctly in compilerOptions.paths.`,
      )
    }
  }

  config = {
    ...config,
    aliases: aliasesResolved as LuxeAliasesProps,
  }

  return {
    errors,
    config,
  }
}
