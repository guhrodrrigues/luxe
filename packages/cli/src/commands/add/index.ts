import chalk from 'chalk'
import { Command } from 'commander'

import { handler } from './handler'
import { AddCommandErrors, preFlight } from './preflight'

import { CLIError } from '@/utils/cli-error'
import { logger } from '@/utils/logger'

import { apiConfig } from '@/services/api-config'

export const add = new Command()
  .name('add')
  .description('select and add the components you need.')
  .argument('[components...]', 'enter the component name(s)')
  .action(async args => {
    const { errorsFound } = preFlight()

    if (errorsFound[AddCommandErrors.MANIFEST_FILE_NOT_FOUND]) {
      logger.error(
        `Project not initialized. Run ${chalk.yellow('@luxeui/ui init')} first`,
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
    } catch (err) {
      if (err instanceof CLIError) {
        logger.error(err.message)
      }
    }
  })
