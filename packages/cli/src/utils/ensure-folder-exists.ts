import { promises as fs, existsSync } from 'node:fs'

export async function ensureFolderExists(path: string): Promise<void> {
  if (!existsSync(path)) {
    await fs.mkdir(path, {
      recursive: true,
    })
  }
}
