import { existsSync } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'

import { CLIError } from '@/utils/cli-error'
import {
  DEFAULT_COMPONENTS_ALIAS,
  DEFAULT_CSS_PATH,
  DEFAULT_UTILS_ALIAS,
  IS_DEV,
  MANIFEST_FILE,
  PROCESS_CWD,
  REQUIRED_EXTERNAL_DEPENDENCIES,
} from '@/utils/const'
import { logger } from '@/utils/logger'
import { manifestManager } from '@/utils/manifest-manager'

import { resolvePackageManagerCommand } from '@/utils/resolve-package-manager-command'
import { runShellCommand } from '@/utils/run-shell-command'

import {
  appendAndMergeThemeStyles,
  generateAndSaveUtilityFunctions,
} from './utils'

export async function handler() {
  try {
    const manifestFilePath = path.resolve(PROCESS_CWD, MANIFEST_FILE)
    const isManifestFileExists = existsSync(manifestFilePath)

    if (isManifestFileExists) {
      logger.warning(
        `Existing '${MANIFEST_FILE}' detected. Proceeding will reset all Luxe CLI configurations, removing any customizations.`,
      )

      const shouldProceedOverwrite = await p.confirm({
        message: `The '${MANIFEST_FILE}' file already exists. Do you want to overwrite it?`,
        active: 'Yes, overwrite and reset.',
        inactive: 'No, keep current configuration.',
        initialValue: false,
      })

      if (!shouldProceedOverwrite) {
        logger.info('Operation aborted. Your configuration remains intact.')
        process.exit(0)
      }
    }

    const cssPath = await askCssPath()
    const componentsAlias = await askComponentsAlias()
    const utilsAlias = await askUtilsAlias()

    await p.tasks([
      {
        title: 'Generating and saving utility functions',
        task: async () => {
          await generateAndSaveUtilityFunctions(utilsAlias)
          return 'Utility functions generated and saved successfully.'
        },
      },
      {
        title: 'Appending and merging CSS theme variables',
        task: async () => {
          await appendAndMergeThemeStyles(cssPath)
          return 'CSS theme variables appended and merged successfully.'
        },
      },
      {
        title: 'Installing required external dependencies',
        task: async () => {
          const { command, args } = await resolvePackageManagerCommand(
            'add',
            REQUIRED_EXTERNAL_DEPENDENCIES,
          )

          const fullCommandInstallation = `${command} ${args.join(' ')}`

          await runShellCommand(fullCommandInstallation)
          return 'All required external dependencies installed successfully.'
        },
      },
    ])

    await manifestManager.saveManifest({
      tailwind: { css: cssPath },
      aliases: { components: componentsAlias, utils: utilsAlias },
    })

    // @TODO: Add resume
    logger.success('Configuration saved successfully.')
  } catch (err) {
    if (err instanceof Error && IS_DEV) {
      logger.debug(`Error: ${err.message}`)
    }

    throw new CLIError(err)
  }
}

async function askCssPath() {
  const result = await p.text({
    message: 'Enter the path to your main CSS file (with Tailwind directives):',
    placeholder: DEFAULT_CSS_PATH,
    initialValue: DEFAULT_CSS_PATH,
    validate(value) {
      if (!value.trim())
        return 'Path is required. Please provide a valid value.'
    },
  })

  if (p.isCancel(result)) {
    logger.error('Configuration cancelled by user.')
    process.exit(0)
  }

  return result.toString()
}

async function askComponentsAlias() {
  const result = await p.text({
    message: 'Define the import alias for your components:',
    placeholder: DEFAULT_COMPONENTS_ALIAS,
    initialValue: DEFAULT_COMPONENTS_ALIAS,
    validate(value) {
      if (!value.trim())
        return 'Alias is required. Please provide a valid value.'
    },
  })

  if (p.isCancel(result)) {
    logger.error('Configuration cancelled by user.')
    process.exit(0)
  }

  return result.toString()
}

async function askUtilsAlias() {
  const result = await p.text({
    message: 'Define the import alias for your utils:',
    placeholder: DEFAULT_UTILS_ALIAS,
    initialValue: DEFAULT_UTILS_ALIAS,
    validate(value) {
      if (!value.trim())
        return 'Alias is required. Please provide a valid value.'
    },
  })

  if (p.isCancel(result)) {
    logger.error('Configuration cancelled by user.')
    process.exit(0)
  }

  return result.toString()
}
