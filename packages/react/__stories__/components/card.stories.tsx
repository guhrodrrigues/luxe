import type { Meta, StoryObj } from '@storybook/react'

import { Card, type CardProps } from '@/components/card'

const meta: Meta<CardProps> = {
  title: 'components/Card',
  component: Card,
  args: {
    children: (
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-200">
          Luxe
        </h3>
        <p className="text-sm leading-[1.5] text-neutral-500 dark:text-neutral-400">
          Explore the new website that simplifies the creation of sophisticated
          dark mode components.
        </p>
      </div>
    ),
  },
  argTypes: {
    variant: {
      options: ['default', 'animated-border', 'shine', 'revealed-pointer'],
      control: 'radio',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
