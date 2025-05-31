import { z } from 'zod'

export const ManifestSchema = z.object({
  tailwind: z.object({
    css: z.string(),
  }),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
  }),
})

export type Manifest = z.infer<typeof ManifestSchema>
