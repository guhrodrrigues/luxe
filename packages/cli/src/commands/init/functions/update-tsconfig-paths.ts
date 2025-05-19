import { promises as fs } from 'node:fs'
import path from 'node:path'

import * as tsConfigPaths from 'tsconfig-paths'

export async function updateTsconfigPaths(aliases: Record<string, string[]>) {
  const tsconfig = tsConfigPaths.loadConfig()

  if (tsconfig.resultType === 'success') {
    const { configFileAbsolutePath } = tsconfig

    const fileContent = await fs.readFile(
      path.resolve(process.cwd(), configFileAbsolutePath),
      'utf8',
    )

    const tsconfigJson = JSON.parse(fileContent)

    const updatedConfig = {
      ...tsconfigJson,
      compilerOptions: {
        ...tsconfigJson.compilerOptions,
        paths: {
          ...tsconfigJson.compilerOptions.paths,
          '@/*': ['./src/*'],
          ...aliases,
        },
      },
    }

    await fs.writeFile(
      configFileAbsolutePath,
      JSON.stringify(updatedConfig, null, 2),
    )
  }
}
