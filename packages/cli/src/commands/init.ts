import * as p from '@clack/prompts'
import chalk from 'chalk'
import { Command } from 'commander'

import { INIT_DEFAULT_PROMPTS } from '@/utils/const'
import { convertPathToAlias } from '@/utils/convert-path-to-alias'
import { InitLogMessage } from '@/utils/enums'
import { luxeManifestFile } from '@/utils/luxe-manifest-file'
import { validadeLuxeManifest } from '@/utils/validate-luxe-manifest'

import { log } from '@/lib/log'

export const init = new Command()
  .name('init')
  .summary('initialize your project with ready to use Luxe components.')
  .action(async () => {
    try {
      let luxeManifestFileContent = await luxeManifestFile.read()

      if (luxeManifestFileContent) {
        await validadeLuxeManifest({
          manifest: luxeManifestFileContent,
        })

        log.warn(InitLogMessage.EXISTS_MANIFEST)

        return
      }

      function validateAliasPath(pathValue: string) {
        const ALIAS_PATH_REGEX = /^(\/?[a-z0-9A-Z\-]+)+$/

        if (ALIAS_PATH_REGEX.test(pathValue)) {
          return InitLogMessage.INVALID_PATH_ALIAS
        }
      }

      const promptResponse = await p.group(
        {
          tailwind: () =>
            p.text({
              message: InitLogMessage.CSS_FILE_QUESTION,
              defaultValue: INIT_DEFAULT_PROMPTS.TAILWIND,
              placeholder: INIT_DEFAULT_PROMPTS.TAILWIND,
              validate: validateAliasPath,
            }),
          aliases: () => {
            log.info(InitLogMessage.CONFIGURE_PATH_ALIAS)

            return p.group({
              components: () =>
                p.text({
                  message: InitLogMessage.COMPONENTS_FOLDER_QUESTION,
                  defaultValue: INIT_DEFAULT_PROMPTS.ALIASES.COMPONENTS,
                  placeholder: INIT_DEFAULT_PROMPTS.ALIASES.COMPONENTS,
                  validate: validateAliasPath,
                }),
              utils: () =>
                p.text({
                  message: InitLogMessage.UTILS_FOLDER_QUESTION,
                  defaultValue: INIT_DEFAULT_PROMPTS.ALIASES.UTILS,
                  placeholder: INIT_DEFAULT_PROMPTS.ALIASES.UTILS,
                  validate: validateAliasPath,
                }),
            })
          },
        },
        {
          onCancel() {
            p.cancel('Operation cancelled.')
            process.exit(0)
          },
        },
      )

      await luxeManifestFile.write({
        tailwind: {
          css: convertPathToAlias(promptResponse.tailwind),
        },
        aliases: {
          components: convertPathToAlias(promptResponse.aliases.components),
          utils: convertPathToAlias(promptResponse.aliases.utils),
        },
      })

      luxeManifestFileContent = await luxeManifestFile.read()

      await validadeLuxeManifest({
        manifest: luxeManifestFileContent!,
      })

      log.success(chalk.green(InitLogMessage.SETUP_SUCCESS))
    } catch (err) {
      log.error(err.message)
    }
  })
