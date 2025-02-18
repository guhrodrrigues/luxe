import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import { LUXE_JSON_FILE } from './const'

import { apiConfig } from '@/services/api-config'

export type LuxeManifest = {
  tailwind: {
    css: string
  }
  aliases: {
    components: string
    utils: string
  }
}

export const luxeManifestFile = {
  read: async (): Promise<LuxeManifest | null> => {
    const pathLuxeFile = path.resolve(process.cwd(), LUXE_JSON_FILE)
    const isLuxeManifestFileExists = existsSync(pathLuxeFile)

    if (!isLuxeManifestFileExists) {
      return null
    }

    const rawLuxeManifestFile = await fs.readFile(pathLuxeFile, 'utf8')

    const parsedLuxeManifestFile = JSON.parse(
      rawLuxeManifestFile,
    ) as LuxeManifest

    return parsedLuxeManifestFile
  },
  write: async (props: LuxeManifest): Promise<void> => {
    const stringifyManifest = JSON.stringify(
      {
        // $schema: apiConfig.luxeManifestUrl,
        ...props,
      },
      null,
      2,
    )

    await fs.writeFile(LUXE_JSON_FILE, stringifyManifest, 'utf8')
  },
}
