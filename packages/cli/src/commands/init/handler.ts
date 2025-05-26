import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'
import prettier from 'prettier'

import { CLIError } from '@/utils/cli-error'
import {
  DEFAULT_COMPONENTS_ALIAS,
  DEFAULT_CSS_PATH,
  DEFAULT_UTILS_ALIAS,
  FS_ERROR_CODES,
  IS_DEV,
  MANIFEST_FILE,
  PROCESS_CWD,
  REQUIRED_EXTERNAL_DEPENDENCIES,
} from '@/utils/const'
import { logger } from '@/utils/logger'
import { manifestManager } from '@/utils/manifest-manager'
import { resolveAliasToAbsolutePath } from '@/utils/resolve-alias-to-absolute-path'
import { resolvePackageManagerCommand } from '@/utils/resolve-package-manager-command'
import { runShellCommand } from '@/utils/run-shell-command'

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
        title: 'Saving utilities to alias directory',
        task: async () => {
          await saveFileWithUtilities(utilsAlias)
          return 'Utilities saved successfully.'
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
          return 'External dependencies installed successfully.'
        },
      },
    ])

    await manifestManager.saveManifest({
      tailwind: { css: cssPath },
      aliases: { components: componentsAlias, utils: utilsAlias },
    })

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

// @TODO: There may be an improvement here later if more utilities are added.
async function saveFileWithUtilities(utilsAlias: string) {
  const fileContent = await prettier.format(
    String.raw`
    import { type ClassValue, clsx } from 'clsx'
    import { twMerge } from 'tailwind-merge'

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs))
    }
  `,
    {
      parser: 'typescript',
    },
  )

  const utilitiesPath = resolveAliasToAbsolutePath(utilsAlias)

  if (!existsSync(utilitiesPath)) {
    await fs.mkdir(utilitiesPath, {
      recursive: true,
    })
  }

  const filePath = path.join(utilitiesPath, 'cn.ts')

  try {
    await fs.writeFile(filePath, fileContent, 'utf8')
  } catch (err) {
    if (err.code === FS_ERROR_CODES.PERMISSION_DENIED) {
      throw new CLIError(
        `Writing the file to the \`${filePath}\` directory is not permitted. Please check access permissions.`,
      )
    }

    throw new Error(err.message)
  }
}
