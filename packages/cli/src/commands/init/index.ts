import chalk from 'chalk'

import { Command } from 'commander'

import { preFlightInit } from '@/preflights/preflight-init'

import * as ERRORS from '@/utils/errors'

import { ensureGlobalThemeCssFile } from './functions/ensure-global-theme-css-file'
import { injectCommonUtilities } from './functions/inject-common-utilities'

import { REQUIRED_EXTERNAL_DEPENDENCIES } from '@/utils/const'
import { ExecutionError } from '@/utils/errors/execution-error'
import { installExternalDependencies } from '@/utils/install-external-dependencies'
import { luxeConfig } from '@/utils/luxe-config-manager'

import { log } from '@/lib/log'

export const init = new Command()
  .name('init')
  .summary('initialize your project and install dependencies.')
  .action(async () => {
    try {
      const { errors, globalsCssPath } = await preFlightInit()

      if (errors[ERRORS.IMPORT_ALIAS_NOT_CONFIG]) {
        log.error(
          `Invalid or missing import alias. Please verify your alias configuration in \`${chalk.blue('tsconfig.json')}\`.`,
        )
      }

      await injectCommonUtilities()
      await ensureGlobalThemeCssFile(globalsCssPath)

      await installExternalDependencies(REQUIRED_EXTERNAL_DEPENDENCIES)

      await luxeConfig.writeConfig({
        tailwind: {
          css: globalsCssPath,
        },
        aliases: {
          components: '@/components/ui',
          utils: '@/utils',
        },
      })

      log.success(
        `${chalk.green('`init` command executed successfully!')}\n\n${chalk.white(`Run ${chalk.blue('@luxeui/ui add')} to add components to your project.`)}\n`,
      )
    } catch (err) {
      if (err instanceof ExecutionError) {
        log.error(err.message)
      }
    }
  })
