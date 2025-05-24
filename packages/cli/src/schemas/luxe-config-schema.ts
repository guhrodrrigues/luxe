import { z } from 'zod'

export const luxeAliasesSchema = z.object({
  components: z.string(),
  utils: z.string(),
})

export const luxeConfigSchema = z.object({
  tailwind: z.object({
    css: z.string(),
  }),
  aliases: luxeAliasesSchema,
})

// Types

export type LuxeAliasesProps = z.infer<typeof luxeAliasesSchema>
export type LuxeConfigProps = z.infer<typeof luxeConfigSchema>
