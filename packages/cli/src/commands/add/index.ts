import path from 'node:path'

import { Command } from 'commander'
import chalk from 'chalk'

import * as p from '@clack/prompts'
import { Eta } from 'eta'

import { luxeManifestFile } from '@/utils/luxe-manifest-file'
import { validadeLuxeManifest } from '@/utils/validate-luxe-manifest'
import { ensureFolderExists } from '@/utils/ensure-folder-exists'

import { log } from '@/lib/log'

import { getRegistry } from './functions/get-registry'
import { getSelectedComponents } from './functions/get-selected-components'
import { addComponents } from './functions/add-components'

export const add = new Command()
  .name('add')
  .summary('run this command to add Luxe components to your app.')
  .argument('[components...]', 'select the components you want.')
  .action(async components => {
    try {
      const eta = new Eta()
      const luxeManifestFileContent = await luxeManifestFile.read()

      if (!luxeManifestFileContent) {
        throw new Error(
          "The `luxe.json` file doesn't exist. Run the `luxe init` command",
        )
      }

      await validadeLuxeManifest({
        manifest: luxeManifestFileContent,
      })

      const { aliases } = luxeManifestFileContent

      const UI_PATH = path.resolve(aliases.components.replace('@/', 'src/'))

      await ensureFolderExists(UI_PATH)

      const allAvailableComponents = await getRegistry('components')

      const selectedComponents = await getSelectedComponents(
        allAvailableComponents,
        components,
      )

      const spinner = p.spinner()

      spinner.start(
        selectedComponents.length > 1
          ? 'Adding your components'
          : 'Adding your component',
      )

      await addComponents({
        eta,
        allAvailableComponents,
        selectedComponents,
        UI_PATH,
        aliases,
      })

      spinner.stop(chalk.green('Success!'))

      p.outro(
        selectedComponents.length > 1
          ? 'Your components are ready.'
          : 'Your component is ready.',
      )
    } catch (err) {
      log.error(
        err instanceof Error ? err.message : 'An unknown error occurred.',
      )
      process.exit(0)
    }
  })
