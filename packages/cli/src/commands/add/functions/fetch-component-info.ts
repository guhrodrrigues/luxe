import { apiConfig } from '@/services/api-config'

import { type Component, componentSchema } from '@/schemas/component-schema'

export async function fetchComponentInfo(
  componentNames: string[],
): Promise<Component[]> {
  return await Promise.all(
    componentNames.map(async componentName => {
      const response = await fetch(
        `${apiConfig.baseURL}/registry/components/${componentName}.json`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const componentData = await response.json()

      return componentSchema.parse(componentData)
    }),
  )
}
