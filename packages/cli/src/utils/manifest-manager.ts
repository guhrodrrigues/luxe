import { promises as fs } from 'node:fs'
import path from 'node:path'

import { lilconfigSync } from 'lilconfig'

import { type Manifest, ManifestSchema } from '@/schemas/manifest'

import { CLIError } from './cli-error'
import { FS_ERROR_CODES, MANIFEST_FILE, PROCESS_CWD } from './const'

class ManifestManager {
  public async saveManifest(content: Manifest) {
    try {
      const result = ManifestSchema.safeParse(content)

      if (!result.success) {
        throw new Error(
          'Invalid manifest data format received. Ensure it complies with the expected schema.',
        )
      }

      const structuredFileContent = JSON.stringify(result.data, null, 2)

      await fs.writeFile(
        path.resolve(PROCESS_CWD, MANIFEST_FILE),
        structuredFileContent,
        'utf8',
      )
    } catch (err) {
      if (err.code === FS_ERROR_CODES.PERMISSION_DENIED) {
        throw new CLIError(
          `Unable to write to the manifest file. Please ensure you have the necessary permissions\nto write to the directory: ${PROCESS_CWD}.`,
        )
      }
    }
  }

  public get readManifest(): Manifest {
    const manifestFile = lilconfigSync('luxe', {
      searchPlaces: [MANIFEST_FILE],
    }).search()

    if (!manifestFile) {
      throw new CLIError('Could not read your manifest file.')
    }

    return manifestFile.config
  }
}

export const manifestManager = new ManifestManager()
