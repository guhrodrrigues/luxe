import type { Meta, StoryObj } from '@storybook/react'

import { TextGlitch } from '@/registry/components/text-glitch'

const meta: Meta = {
  title: 'components/TextGlitch',
  component: TextGlitch,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
