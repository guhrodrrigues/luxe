import type { Meta, StoryObj } from '@storybook/react'

import { CardComment } from '@/registry/components/card-comment'

const meta: Meta = {
  title: 'components/CardComment',
  component: CardComment,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
