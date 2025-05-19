import chalk from 'chalk'

import { Command } from 'commander'

import { preFlightInit } from '@/preflights/preflight-init'

import { ensureGlobalThemeCssFile } from './functions/ensure-global-theme-css-file'
import { injectCommonUtilities } from './functions/inject-common-utilities'
import { updateTsconfigPaths } from './functions/update-tsconfig-paths'

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
      const { data } = await preFlightInit()
      const { cssPath, componentsPath } = data

      let aliasedComponentsPath = componentsPath.endsWith('/')
        ? componentsPath
        : componentsPath.concat('/')

      aliasedComponentsPath = aliasedComponentsPath
        .replace(/src\//g, '@/')
        .concat('*')

      updateTsconfigPaths({
        [aliasedComponentsPath]: [componentsPath.concat('*')],
      })

      await injectCommonUtilities()
      await ensureGlobalThemeCssFile(cssPath)

      await installExternalDependencies(REQUIRED_EXTERNAL_DEPENDENCIES)

      await luxeConfig.writeConfig({
        tailwind: {
          css: cssPath,
        },
        aliases: {
          components: aliasedComponentsPath,
        },
      })

      log.success(
        `${chalk.green('`init` command executed successfully!')}\n${chalk.white('Run `add` command to add components to your project.')}`,
      )
    } catch (err) {
      if (err instanceof ExecutionError) {
        log.error(err.message)
      }
    }
  })
