import type { Meta, StoryObj } from "@storybook/react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/registry/components/dialog";

const meta: Meta = {
  title: "components/Dialog",
  component: Dialog,
  args: {
    children: (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog.
            </DialogDescription>
            <DialogFooter>
              <DialogClose />
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    ),
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Basic: StoryObj = {};
