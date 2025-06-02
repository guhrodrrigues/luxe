import type { Meta, StoryObj } from '@storybook/react'

import { AnimatedTabs } from '@/components/animated-tabs'

const meta: Meta = {
  title: 'components/AnimatedTabs',
  component: AnimatedTabs,
  args: {
    tabs: ['All Posts', 'Interactions', 'Resources', 'Docs'],
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
