import type { Meta, StoryObj } from '@storybook/react'

import { Badge, type BadgeProps } from '@/components/badge'

const meta: Meta<BadgeProps> = {
  title: 'components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      options: [
        'shine',
        'outline',
        'animated-border',
        'rotate-border',
        'success',
        'destructive',
        'default',
      ],
      control: 'radio',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
