import type { Meta, StoryObj } from '@storybook/react'

import {
  InputFocusBlur,
  type InputFocusBlurProps,
} from '@/registry/components/input-focus-blur'

const meta: Meta<InputFocusBlurProps> = {
  title: 'components/InputFocusBlur',
  component: InputFocusBlur,
  args: {
    placeholder: 'Placeholder',
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj<InputFocusBlurProps> = {}
