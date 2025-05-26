import type { Command, ResolvedCommand } from 'package-manager-detector'

import { resolveCommand } from 'package-manager-detector/commands'
import { detect } from 'package-manager-detector/detect'

export async function resolvePackageManagerCommand(
  command: Command,
  args: string[],
) {
  const pm = await detect({
    strategies: [
      'lockfile',
      'packageManager-field',
      'install-metadata',
      'devEngines-field',
    ],
  })

  if (!pm) {
    throw new Error('Could not detect package manager.')
  }

  return resolveCommand(pm.agent, command, args) ?? ({} as ResolvedCommand)
}
