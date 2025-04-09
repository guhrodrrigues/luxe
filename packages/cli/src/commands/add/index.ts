import * as p from '@clack/prompts'
import { Command } from 'commander'
import { z } from 'zod'

import chalk from 'chalk'
import { Eta } from 'eta'
import { pascalCase } from 'scule'

import * as ERRORS from '@/utils/errors'
import { ExecutionError } from '@/utils/errors/execution-error'
import { installExternalDependencies } from '@/utils/install-external-dependencies'

import { addComponent } from './functions/add-component'
import { fetchComponentInfo } from './functions/fetch-component-info'
import { getRegistryData } from './functions/get-registry-data'

import { preFlightAdd } from '@/preflights/preflight-add'

const addCommandSchema = z.array(z.string())

export const add = new Command()
  .name('add')
  .summary('run this command to add Luxe components to your app.')
  .argument('[components...]', 'select the components you want.')
  .action(async components => {
    try {
      const eta = new Eta()

      const { errors, config } = await preFlightAdd()

      if (errors[ERRORS.DIRECTORY_NOT_FOUND_OR_EMPTY_PROJECT]) {
        throw new ExecutionError(
          'The add command was run in a directory without a package.json.\nMake sure you are in a Node.js project initialized with npm init or yarn init.',
        )
      }

      let selectedComponents = addCommandSchema.parse(components)

      const registryComponents = await getRegistryData('components')

      if (selectedComponents.length === 0) {
        selectedComponents = (await p.multiselect({
          message:
            'Select your components › (`Space` to select) (`A` to toggle all) (`Enter` to confirm).',
          options: registryComponents.map(component => ({
            label: pascalCase(component),
            value: component,
          })),
        })) as string[]

        if (p.isCancel(selectedComponents)) {
          p.cancel('Operation cancelled.')
          process.exit(0)
        }
      }

      const componentsNotFound = selectedComponents.filter(
        component => !registryComponents.includes(component),
      )

      if (componentsNotFound.length > 0) {
        throw new ExecutionError(
          `The following components were not found in the registry: ${componentsNotFound
            .map(c => chalk.blue(c))
            .join(', ')}`,
        )
      }

      const infoSelectedComponents =
        await fetchComponentInfo(selectedComponents)

      for (const component of infoSelectedComponents) {
        await installExternalDependencies(component.externalDependencies)
        await addComponent(component.files, config!.aliases, eta)
      }
    } catch (err) {
      if (err instanceof ExecutionError) {
        process.exit(0)
      }
    }
  })
