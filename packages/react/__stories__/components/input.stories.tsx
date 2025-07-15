import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/input'

type InputProps = React.ComponentPropsWithRef<'input'>

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
