import { promises as fs } from 'node:fs'
import path from 'node:path'

import { lilconfig } from 'lilconfig'

import chalk from 'chalk'

import { LUXE_JSON_FILE } from './const'
import { ExecutionError } from './errors/execution-error'

import {
  type LuxeConfigProps,
  luxeConfigSchema,
} from '@/schemas/luxe-config-schema'

class LuxeConfigManager {
  private _configFileName = path.parse(LUXE_JSON_FILE).name
  private _configFilePath = ''

  async readConfig(): Promise<LuxeConfigProps> {
    const configExplorer = lilconfig(this._configFileName, {
      searchPlaces: [LUXE_JSON_FILE],
    })

    const configSearchResult = await configExplorer.search()

    if (!configSearchResult) {
      throw new ExecutionError(
        `The \`${chalk.blue(LUXE_JSON_FILE)}\` file is missing. Ensure it has been created or run the \`${chalk.green('init')}\` command to generate it.`,
      )
    }

    this._configFilePath = configSearchResult.filepath

    const parsedConfig = luxeConfigSchema.safeParse(configSearchResult.config)

    if (!parsedConfig.success || configSearchResult.isEmpty) {
      throw new ExecutionError(
        `The \`${chalk.blue(LUXE_JSON_FILE)}\` file has an invalid format. Please refer to the documentation for the correct structure.`,
      )
    }

    return parsedConfig.data
  }

  async writeConfig(configProps: LuxeConfigProps): Promise<void> {
    this._configFilePath = path.resolve(process.cwd(), LUXE_JSON_FILE)

    await fs.writeFile(
      this._configFilePath,
      JSON.stringify(configProps, null, 2),
      'utf8',
    )
  }
}

export const luxeConfig = new LuxeConfigManager()
