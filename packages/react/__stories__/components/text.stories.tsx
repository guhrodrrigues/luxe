import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/components/text'

const meta: Meta = {
  title: 'components/Text',
  component: Text,
  args: {
    children: 'This is a text',
  },
  argTypes: {
    variant: {
      options: ['shine', 'generate-effect', 'glitch', 'hover-enter', 'shake'],
      control: 'radio',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
