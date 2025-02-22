import chalk from 'chalk'
import { ValidationError, Validator } from 'jsonschema'

import type { LuxeManifest } from './luxe-manifest-file'

import { apiConfig } from '@/services/api-config'

type ValidadeLuxeManifestProps = {
  manifest: LuxeManifest
}

export async function validadeLuxeManifest({
  manifest,
}: ValidadeLuxeManifestProps) {
  try {
    const validator = new Validator()

    const responseSchema = await fetch(apiConfig.luxeManifestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const dataSchema = await responseSchema.json()

    const validation = validator.validate(manifest, dataSchema)

    if (!validation.valid) {
      throw new ValidationError(
        `Invalid Luxe Manifest.\nRefer to ${chalk.white.underline(apiConfig.luxeManifestUrl)}`,
      )
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new Error(err.message)
    }
  }
}
