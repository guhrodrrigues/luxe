import { Command } from 'commander'
import chalk from 'chalk'

import { preFlight, AddCommandErrors } from './preflight'
import { handler } from './handler'

import { logger } from '@/utils/logger'
import { apiConfig } from '@/services/api-config'

export const add = new Command()
  .name('add')
  .description('')
  .argument('[components...]')
  .action(async args => {
    const { errorsFound } = preFlight()

    if (errorsFound[AddCommandErrors.MANIFEST_FILE_NOT_FOUND]) {
      logger.error(
        `Warning: the project has not been initialized yet. Run ${chalk.yellow('@luxeui/ui init')} to set up the environment before adding components.`,
      )
    }

    try {
      const response = await fetch(`${apiConfig.luxeRegistry}/index.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { components } = await response.json()
      const availableComponents = components as string[]

      handler(availableComponents, args)
    } catch {}
  })
