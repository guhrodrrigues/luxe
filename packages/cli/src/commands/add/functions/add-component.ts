import { promises as fs } from 'node:fs'
import path from 'node:path'

import chalk from 'chalk'
import { Eta } from 'eta'
import prettier from 'prettier'

import { installExternalDependencies } from '@/utils/install-external-dependencies'
import { getRegistryInfo } from './get-registry'
import { resolveAliasesTemplate } from './resolve-aliases-template'

import type { LuxeManifest } from '@/utils/luxe-manifest-file'

type AddComponentProps = Pick<LuxeManifest, 'aliases'> & {
  componentName: string
  registryComponents: string[]
  componentsDirectory: string
}

const eta = new Eta()

export async function addComponent({
  componentName,
  registryComponents,
  componentsDirectory,
  aliases,
}: AddComponentProps) {
  if (!registryComponents.includes(componentName)) {
    throw new Error(`The component ${chalk.blue(componentName)} not found.`)
  }

  const { files, externalDependencies } = await getRegistryInfo(
    'components',
    componentName,
  )

  const componentFilePath = path.resolve(
    path.join(componentsDirectory, files[0].name),
  )

  let componentCode = resolveAliasesTemplate(eta, {
    aliases,
    code: files[0].content,
  })

  componentCode = await prettier.format(componentCode, {
    parser: 'typescript',
  })

  await installExternalDependencies(externalDependencies)
  await fs.writeFile(componentFilePath, componentCode, 'utf8')
}
