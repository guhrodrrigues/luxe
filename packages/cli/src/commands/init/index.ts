import { Command } from 'commander'

import { preFlightInit } from '@/preflights/preflight-init'

import { injectCommonUtilities } from './functions/inject-common-utilities'
import { updateTsconfigPaths } from './functions/update-tsconfig-paths'

import { REQUIRED_EXTERNAL_DEPENDENCIES } from '@/utils/const'
import { ExecutionError } from '@/utils/errors/execution-error'
import { installExternalDependencies } from '@/utils/install-external-dependencies'
import { luxeConfig } from '@/utils/luxe-config-manager'

import { log } from '@/lib/log'

export const init = new Command()
  .name('init')
  .summary(
    'initialize your project with ready to use Luxe components. Practical, fast, and customizable.',
  )
  .action(async () => {
    try {
      const { data } = await preFlightInit()
      const { cssPath, componentsPath } = data

      updateTsconfigPaths()
      injectCommonUtilities()

      await installExternalDependencies(REQUIRED_EXTERNAL_DEPENDENCIES)

      await luxeConfig.writeConfig({
        tailwind: {
          css: cssPath,
        },
        aliases: {
          components: componentsPath.replace(/^\.\/src\//, '@/').concat('*'),
        },
      })
    } catch (err) {
      if (err instanceof ExecutionError) {
        log.error(err.message)
      }
    }
  })
