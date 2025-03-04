import type { LuxeManifest } from '@/utils/luxe-manifest-file'
import type { Eta } from 'eta'

type ResolveAliasesTemplateProps = Pick<LuxeManifest, 'aliases'> & {
  code: string
}

export function resolveAliasesTemplate(
  eta: Eta,
  { aliases, code }: ResolveAliasesTemplateProps,
): string {
  if (!eta) {
    throw new TypeError('Invalid Eta instance provided.')
  }

  if (!code) {
    throw new ReferenceError('Template code must be a non-empty string.')
  }

  return eta.renderString(code, { aliases })
}
