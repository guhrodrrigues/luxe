import { promises as fs } from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import type { Eta } from 'eta'

import { getRegistryInfo } from './get-registry'
import { resolveAliasesTemplate } from './resolve-aliases-template'

import type { LuxeManifest } from '@/utils/luxe-manifest-file'

type AddComponentsProps = Pick<LuxeManifest, 'aliases'> & {
  eta: Eta
  allAvailableComponents: string[]
  selectedComponents: string[]
  UI_PATH: string
}

export async function addComponents({
  eta,
  allAvailableComponents,
  selectedComponents,
  UI_PATH,
  aliases,
}: AddComponentsProps) {
  for (const component of selectedComponents) {
    if (!allAvailableComponents.includes(component)) {
      throw new Error(`The component ${chalk.blue(component)} not found.`)
    }

    const { files } = await getRegistryInfo('components', component)

    const componentCode = resolveAliasesTemplate(eta, {
      aliases,
      code: files[0].content, // @TODO: Implement if registry has more files
    })

    const componentFilePath = path.resolve(path.join(UI_PATH, files[0].name))

    await fs.writeFile(componentFilePath, componentCode, 'utf8')
  }
}
