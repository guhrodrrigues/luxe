import { promises as fs } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'
import camelCase from 'camelcase'

type ComponentExistsProps = {
  componentsDirectory: string
  selectedComponents: string[]
}

export async function checkComponentBeforeAdd(
  { componentsDirectory, selectedComponents }: ComponentExistsProps,
  callback: (component: string) => void,
) {
  const existingComponentFiles = await fs.readdir(componentsDirectory, 'utf8')

  const existingComponents = new Set(
    existingComponentFiles.map(fileName => path.parse(fileName).name),
  )

  for (const componentName of selectedComponents) {
    if (existingComponents.has(componentName)) {
      const shouldOverwrite = await p.confirm({
        message: `The ${camelCase(componentName, {
          pascalCase: true,
        })} component already exists. Overwrite it?`,
      })

      if (!shouldOverwrite) {
        continue
      }
    }
    callback(componentName)
  }
}
