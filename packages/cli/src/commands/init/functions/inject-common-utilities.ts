import { promises as fs, existsSync } from 'node:fs'
import path from 'node:path'

import prettier from 'prettier'

export async function injectCommonUtilities() {
  const contentUtilities = String.raw`
    import { type ClassValue, clsx } from 'clsx'
    import { twMerge } from 'tailwind-merge'

    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs))
    }
  `

  const pathUtilities = path.resolve(process.cwd(), 'src/utils')

  if (!existsSync(pathUtilities)) {
    await fs.mkdir(pathUtilities, {
      recursive: true,
    })
  }

  const code = await prettier.format(contentUtilities, {
    parser: 'typescript',
  })

  await fs.writeFile(path.join(pathUtilities, 'cn.ts'), code, 'utf8')
}
