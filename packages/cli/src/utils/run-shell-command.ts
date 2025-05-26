import { promisify } from 'node:util'
import { exec } from 'node:child_process'

export async function runShellCommand(command: string) {
  try {
    const execAsync = promisify(exec)
    await execAsync(command)
  } catch (err) {
    throw new Error(`Command failed: ${command}`)
  }
}
