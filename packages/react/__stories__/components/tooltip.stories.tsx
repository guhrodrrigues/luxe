import type { Meta, StoryObj } from '@storybook/react'

import { TooltipExample } from '@/registry/components/tooltip'

const meta: Meta = {
  title: 'components/Tooltip',
  component: TooltipExample,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
