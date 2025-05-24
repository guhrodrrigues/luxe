import { log as _log } from '@clack/prompts'

export const log = {
  ..._log,
  error(log: string) {
    _log.error(log)
    process.exit(0)
  },
}
