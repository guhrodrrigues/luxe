import type { Registry } from '@/utils/enums'

import { apiConfig } from '@/services/api-config'

type RegistryType = Lowercase<keyof typeof Registry>

export async function getRegistryData(
  registryType: RegistryType,
): Promise<string[]> {
  const response = await fetch(
    `${apiConfig.baseURL}/registry/${registryType}.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  if (!response.ok) {
    throw new Error(
      `Failed to access the ${registryType} registry. Ensure the service is available and try again.`,
    )
  }

  const data = (await response.json()) as Record<RegistryType, string[]>

  return data[registryType]
}
