import type { Meta, StoryObj } from '@storybook/react'

import { TextGradient } from '@/registry/components/text-gradient'

const meta: Meta = {
  title: 'components/TextGradient',
  component: TextGradient,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
