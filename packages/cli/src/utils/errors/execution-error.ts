import { log } from '@/lib/log'

export class ExecutionError {
  constructor(public message: string) {
    log.error(message)
  }
}
