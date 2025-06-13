import type { Meta, StoryObj } from '@storybook/react'

import {
  AvatarRoot,
  type AvatarRootProps,
  AvatarImage,
  AvatarFallback,
} from '@/components/avatar'

const meta: Meta<AvatarRootProps> = {
  title: 'components/Avatar',
  component: AvatarRoot,
  argTypes: {
    hasBorder: {
      control: 'boolean',
    },
  },
  args: {
    children: (
      <AvatarRoot>
        <AvatarImage src="https://github.com/guhrodrrigues.png" alt="Gustavo Rodrigues" />
        <AvatarFallback>GH</AvatarFallback>
      </AvatarRoot>
    ),
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
