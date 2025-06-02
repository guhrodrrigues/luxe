import type { Meta, StoryObj } from '@storybook/react'

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/tooltip'
import { Button } from '@/components/button'

const meta: Meta = {
  title: 'components/Tooltip',
  component: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Add to library</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
