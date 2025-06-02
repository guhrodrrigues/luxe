import type { Meta, StoryObj } from '@storybook/react'

import { Button, type ButtonProps } from '@/components/button'

const meta: Meta<ButtonProps> = {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Button',
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
        'glitch-brightness',
        'default',
      ],
      control: 'radio',
    },
    magnetic: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
