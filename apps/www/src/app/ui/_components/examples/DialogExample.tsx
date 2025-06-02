import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/app/_components/ui/dialog";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle asChild>
          <span className="block px-6 pt-5">Change Username</span>
        </DialogTitle>
        <DialogDescription className="px-6 py-1">
          Make changes to your username here.
        </DialogDescription>
        <fieldset className="mb-[15px] flex items-center gap-4 px-6 py-4">
          <Input id="name" placeholder="@guhrodrrigues" className="w-full" />
        </fieldset>
        <DialogFooter className="flex justify-between gap-4 px-6 py-3">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Save Changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
