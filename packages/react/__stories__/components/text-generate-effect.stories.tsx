import type { Meta, StoryObj } from '@storybook/react'

import { TextGenerateEffectExample } from '@/registry/components/text-generate-effect'

const meta: Meta = {
  title: 'components/TextGenerateEffect',
  component: TextGenerateEffectExample,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
