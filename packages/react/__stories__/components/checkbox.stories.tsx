import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxExample } from '@/registry/components/checkbox'

const meta: Meta = {
  title: 'components/Checkbox',
  component: CheckboxExample,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
