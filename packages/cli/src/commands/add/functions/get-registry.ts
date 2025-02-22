import { apiConfig } from '@/services/api-config'

import type { RegistryType, Registry } from '@/@types/registry'

async function fetchRegistry<T>(path: string): Promise<T> {
  try {
    const requestUrl = `${apiConfig.baseURL}/registry/${path}.json`

    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new ReferenceError(`Failed to fetch registry at: ${path}`)
    }

    return response.json()
  } catch (err) {
    throw new ReferenceError(`Could not retrieve registry: ${path}`)
  }
}

export async function getRegistry(type: RegistryType): Promise<string[]> {
  return await fetchRegistry<{ components: string[] }>(type).then(
    data => data.components,
  )
}

export async function getRegistryInfo(
  type: RegistryType,
  registry: string,
): Promise<Registry> {
  return await fetchRegistry<Registry>(`${type}/${registry}`)
}
