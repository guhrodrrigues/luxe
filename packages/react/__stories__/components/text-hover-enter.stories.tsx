import type { Meta, StoryObj } from '@storybook/react'

import { TextHoverEnterExample } from '@/registry/components/text-hover-enter'

const meta: Meta = {
  title: 'components/TextHoverEnter',
  component: TextHoverEnterExample,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
