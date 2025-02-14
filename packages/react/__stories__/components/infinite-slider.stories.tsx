import type { Meta, StoryObj } from '@storybook/react'

import { InfiniteSliderExample } from '@/registry/components/infinite-slider'

const meta: Meta = {
  title: 'components/InfiniteSlider',
  component: InfiniteSliderExample,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
