const DEFAULT_ERROR_MESSAGE =
  'An internal error occurred in the Luxe CLI. Please report this issue if it persists.'

export class CLIError extends Error {
  constructor(
    message: string = DEFAULT_ERROR_MESSAGE,
    public readonly cause?: unknown,
  ) {
    super(message)
    this.name = 'CLIError'

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CLIError)
    }
  }
}
