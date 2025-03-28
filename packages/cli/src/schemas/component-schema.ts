import { z } from 'zod'

export const componentFileSchema = z.object({
  name: z.string(),
  content: z.string(),
})

export const componentSchema = z.object({
  name: z.string(),
  type: z.string(),
  externalDependencies: z.array(z.string()).default([]),
  internalDependencies: z.array(z.string()).default([]),
  files: z.array(componentFileSchema).default([]),
})

// Types

export type ComponentFile = z.infer<typeof componentFileSchema>
export type Component = z.infer<typeof componentSchema>
