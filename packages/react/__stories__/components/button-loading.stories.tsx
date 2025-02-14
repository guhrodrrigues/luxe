import type { Meta, StoryObj } from '@storybook/react'

import { ButtonLoading } from '@/registry/components/button-loading'

const meta: Meta = {
  title: 'components/ButtonLoading',
  component: ButtonLoading,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
