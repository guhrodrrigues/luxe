import * as p from '@clack/prompts'
import { Command } from 'commander'

import { InitLogMessage } from '@/utils/enums'
import { luxeManifestFile } from '@/utils/luxe-manifest-file'
import { validadeLuxeManifest } from '@/utils/validate-luxe-manifest'

import { log } from '@/lib/log'

export const init = new Command()
  .name('init')
  .summary(
    'initialize your project with ready to use Luxe components. Practical, fast, and customizable.',
  )
  .action(async () => {
    try {
      let luxeManifestFileContent = await luxeManifestFile.get()

      if (!luxeManifestFileContent) {
        const { tailwind: tailwindCSS, aliases } = await p.group({
          tailwind: () =>
            p.text({
              message: InitLogMessage.CSS_FILE_QUESTION,
              defaultValue: './src/styles/globals.css',
            }),
          aliases: () => {
            log.info(InitLogMessage.CONFIGURE_PATH_ALIAS)

            return p.group({
              components: () =>
                p.text({
                  message: InitLogMessage.COMPONENTS_FOLDER_QUESTION,
                  defaultValue: './src/components/ui',
                }),
              utils: () =>
                p.text({
                  message: InitLogMessage.UTILS_FOLDER_QUESTION,
                  defaultValue: './src/utils',
                }),
            })
          },
        })

        await luxeManifestFile.set({
          tailwind: {
            css: Object.keys(tailwindCSS).reduce((acc, aliasKey) => {
							const key = aliasKey as keyof typeof tailwindCSS
							acc[key] = (tailwindCSS[key] as string).replace('./', '@/')
							
							return acc
						},
						{} as Record<keyof typeof tailwindCSS, string>,
					),
          },
          aliases: Object.keys(aliases).reduce(
            (acc, aliasKey) => {
              const key = aliasKey as keyof typeof aliases
              acc[key] = aliases[key].replace('./', '@/')

              return acc
            },
            {} as Record<keyof typeof aliases, string>,
          ),
        })

        luxeManifestFileContent = await luxeManifestFile.get()

        await validadeLuxeManifest({
          manifest: luxeManifestFileContent!,
        })

        log.success(InitLogMessage.SETUP_SUCCESS)

        return
      }

      await validadeLuxeManifest({
        manifest: luxeManifestFileContent,
      })

      log.warn(InitLogMessage.EXISTS_MANIFEST)
    } catch {}
  })
