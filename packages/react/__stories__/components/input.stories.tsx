import type { Meta, StoryObj } from '@storybook/react'

import { Input, type InputProps } from '@/components/input'

const meta: Meta<InputProps> = {
  title: 'components/Input',
  component: Input,
  args: {
    placeholder: 'Placeholder',
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj<InputProps> = {}
