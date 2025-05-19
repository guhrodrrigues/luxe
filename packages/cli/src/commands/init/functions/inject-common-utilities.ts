import { promises as fs } from 'node:fs'
import path from 'node:path'

import prettier from 'prettier'

export async function injectCommonUtilities() {
  const utilities = {
    cn: String.raw`
      import { type ClassValue, clsx } from 'clsx'
      import { twMerge } from 'tailwind-merge'

      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs))
      }
    `,
  }

  for (const utility in utilities) {
    const code = await prettier.format(
      utilities[utility as keyof typeof utilities],
      {
        parser: 'typescript',
      },
    )

    await fs.writeFile(
      path.resolve(process.cwd(), 'src/utils', `${utility}.ts`),
      code,
      'utf8',
    )
  }
}
