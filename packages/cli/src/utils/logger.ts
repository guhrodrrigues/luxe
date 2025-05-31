import { log } from '@clack/prompts'
import chalk from 'chalk'

import type { ForegroundColorName } from 'chalk'

export const logger = {
  info(message: string) {
    log.info(chalk.blue(message))
  },
  success(message: string) {
    log.success(chalk.green(message))
  },
  error(message: string) {
    log.error(chalk.red(message))
    process.exit(0)
  },
  warning(message: string) {
    log.warning(chalk.yellow(message))
  },
  custom(
    message: string,
    options: {
      color?: ForegroundColorName
    },
  ) {
    const { color } = options
    log.message(chalk[color ?? 'grey'](message))
  },
  step: log.step,

  // Used only in dev environment
  debug(message: string) {
    log.message(chalk.magenta(`[DEV] ${message}`))
  },
}
