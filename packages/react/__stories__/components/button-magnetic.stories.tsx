import type { Meta, StoryObj } from '@storybook/react'

import { ButtonMagneticExample } from '@/registry/components/button-magnetic'

const meta: Meta = {
  title: 'components/ButtonMagnetic',
  component: ButtonMagneticExample,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
