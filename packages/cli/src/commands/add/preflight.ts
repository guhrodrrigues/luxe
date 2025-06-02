import { manifestManager } from '@/utils/manifest-manager'

export enum AddCommandErrors {
  MANIFEST_FILE_NOT_FOUND = '1',
}

export function preFlight() {
  const errorsFound = {} as Record<string, boolean>

  try {
    manifestManager.readManifest
  } catch {
    errorsFound[AddCommandErrors.MANIFEST_FILE_NOT_FOUND] = true
  }

  return {
    errorsFound,
  }
}
