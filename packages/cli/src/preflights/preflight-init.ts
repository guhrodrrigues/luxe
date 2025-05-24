import { existsSync } from 'node:fs'
import path from 'node:path'

import * as p from '@clack/prompts'
import * as tsconfigPaths from 'tsconfig-paths'

import * as ERRORS from '@/utils/errors'

import { LUXE_JSON_FILE } from '@/utils/const'

import { log } from '@/lib/log'

export async function preFlightInit() {
  const errors: Record<string, boolean> = {}

  const luxeFilePath = path.resolve(process.cwd(), LUXE_JSON_FILE)
  const isLuxeFileExists = existsSync(luxeFilePath)

  const tsConfig = tsconfigPaths.loadConfig()

  if (tsConfig.resultType === 'success') {
    const isImportAliasDefined = 'paths' in tsConfig && '@/*' in tsConfig.paths
    errors[ERRORS.IMPORT_ALIAS_NOT_CONFIG] = !isImportAliasDefined
  }

  if (isLuxeFileExists) {
    const isOverwrite = await p.confirm({
      message: 'Previous `init` detected. Do you want to overwrite?',
    })

    if (!isOverwrite) {
      log.message('No changes have been made to your configuration.')
      process.exit(0)
    }
  }

  const GLOBALS_CSS_PATH_DEFAULT = './src/globals.css'

  const globalsCssPath = (await p.text({
    message: 'Enter the path to your global CSS file:',
    placeholder: GLOBALS_CSS_PATH_DEFAULT,
    defaultValue: GLOBALS_CSS_PATH_DEFAULT,
    // @TODO:
    // validate(value) {
    //   if (
    //     !existsSync(path.resolve(value)) &&
    //     value !== GLOBALS_CSS_PATH_DEFAULT
    //   ) {
    //     return 'Error'
    //   }
    // },
  })) as string

  return {
    errors,
    globalsCssPath,
  }
}
