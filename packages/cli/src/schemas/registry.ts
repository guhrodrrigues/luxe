import { z } from 'zod'

export const RegistrySchema = z.object({
  name: z.string(),
  externalDependencies: z.array(z.string()),
  internalDependencies: z.array(z.string()),
  file: z.object({
    name: z.string(),
    content: z.string(),
  }),
})

export type Registry = z.infer<typeof RegistrySchema>
