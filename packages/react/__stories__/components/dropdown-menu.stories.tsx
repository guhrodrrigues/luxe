import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from '@/registry/components/dropdown'

const meta: Meta = {
  title: 'components/Dropdown',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
