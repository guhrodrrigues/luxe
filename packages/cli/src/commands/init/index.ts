import * as p from '@clack/prompts'
import { Command } from 'commander'

import { CLIError } from '@/utils/cli-error'
import { logger } from '@/utils/logger'

import { handler } from './handler'
import { InitCommandErrors, preFlight } from './preflight'

export const init = new Command()
  .name('init')
  .description('initialize your project and install dependencies.')
  .action(async () => {
    try {
      const { errorsFound } = await preFlight()

      if (errorsFound[InitCommandErrors.UNIDENTIFIED_NODE_PROJECT]) {
        logger.error(
          `No Node.js project detected. Ensure 'package.json' exists in the current directory.`,
        )
      }

      if (errorsFound[InitCommandErrors.TAILWIND_NOT_INSTALLED]) {
        logger.warning(
          'TailwindCSS is not installed. Continuing may cause issues during initialization.',
        )

        const shouldProceedWithoutTailwind = await p.confirm({
          message: 'Proceed without TailwindCSS?',
          active: 'Yes, proceed anyway.',
          inactive: 'No, abort setup.',
          initialValue: false,
        })

        if (!shouldProceedWithoutTailwind) {
          logger.info(
            'Setup aborted. Install TailwindCSS first:\n→ https://tailwindcss.com/docs/installation',
          )
          process.exit(0)
        }
      }

      if (errorsFound[InitCommandErrors.INCOMPATIBLE_VERSION_TAILWIND]) {
        logger.error(
          'Incompatible TailwindCSS version detected. Please use version 4.x.x or higher.',
        )
      }

      await handler()
    } catch (err) {
      if (err instanceof CLIError) {
        logger.error(err.message)
      }
    }
  })
