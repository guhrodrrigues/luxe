import type { StoryObj } from '@storybook/react'

import {
  AvatarFallback,
  AvatarImage,
  Avatar,
} from '@/components/avatar'

const meta = {
  title: 'components/Avatar',
  component: Avatar,
  argTypes: {
    hasBorder: {
      control: 'boolean',
    },
  },
  args: {
    children: (
      <Avatar>
        <AvatarImage
          src="https://github.com/guhrodrrigues.png"
          alt="Gustavo Rodrigues"
        />
        <AvatarFallback>GR</AvatarFallback>
      </Avatar>
    ),
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
