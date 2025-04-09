import { existsSync } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'

import { LUXE_JSON_FILE } from '@/utils/const'

import { log } from '@/lib/log'

export async function preFlightInit() {
  const errors: Record<string, boolean> | null = null

  const luxeFilePath = path.resolve(process.cwd(), LUXE_JSON_FILE)
  const isLuxeFileExists = existsSync(luxeFilePath)

  let promptsAnswered = {} as {
    cssPath: string
    componentsPath: string
  }

  if (isLuxeFileExists) {
    const isOverwrite = await p.confirm({
      message: 'Previous `init` detected. Do you want to overwrite?',
    })

    if (!isOverwrite) {
      log.message('No changes have been made to your configuration.')
      process.exit(0)
    }

    const { cssPath, componentsPath } = await askInitialSetupPaths()

    promptsAnswered = {
      cssPath,
      componentsPath,
    }
  } else {
    const { cssPath, componentsPath } = await askInitialSetupPaths()

    promptsAnswered = {
      cssPath,
      componentsPath,
    }
  }

  const { cssPath, componentsPath } = promptsAnswered

  return {
    data: {
      cssPath,
      componentsPath,
    },
    errors,
  }
}

async function askInitialSetupPaths() {
  const defaultPaths = {
    cssPath: './src/styles/globals.css',
    componentsPath: './src/components/ui/',
  }

  const { cssPath, componentsPath } = await p.group({
    cssPath: () =>
      p.text({
        message: 'Enter the path to your global CSS file:',
        placeholder: defaultPaths.cssPath,
        defaultValue: defaultPaths.cssPath,
        validate(value) {
          if (!existsSync(path.resolve(value)))
            return 'The specified CSS file was not found. Please check the path and try again.'
        },
      }),
    componentsPath: () =>
      p.text({
        message: 'Enter the folder path where components should be added:',
        placeholder: defaultPaths.componentsPath,
        defaultValue: defaultPaths.componentsPath,
        validate(value) {
          if (!existsSync(path.resolve(value)))
            return 'The specified folder was not found. Please make sure the path is correct.'
        },
      }),
  })

  return {
    cssPath,
    componentsPath,
  }
}
