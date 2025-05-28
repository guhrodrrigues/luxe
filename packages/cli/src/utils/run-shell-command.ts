import { exec } from 'node:child_process'
import { promisify } from 'node:util'

export async function runShellCommand(command: string) {
  try {
    const execAsync = promisify(exec)
    await execAsync(command)
  } catch (err) {
    throw new Error(`Command failed: ${command}`)
  }
}
