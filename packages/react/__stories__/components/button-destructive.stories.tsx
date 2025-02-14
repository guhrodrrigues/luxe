import type { Meta, StoryObj } from '@storybook/react'

import { ButtonDestructive } from '@/registry/components/button-destructive'

const meta: Meta = {
  title: 'components/ButtonDestructive',
  component: ButtonDestructive,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
