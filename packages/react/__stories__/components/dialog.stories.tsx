import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog'
import { Input } from '@/components/input'

const meta: Meta = {
  title: 'components/Dialog',
  component: Dialog,
  args: {
    children: (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle asChild>
            <span className="block">Change Username</span>
          </DialogTitle>
          <DialogDescription>
            Make changes to your username here.
          </DialogDescription>
          <div className="mb-[15px] flex items-center gap-4 px-6 py-4">
            <Input placeholder="@guhrodrrigues" className="w-full" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Save Changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ),
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Basic: StoryObj = {}
