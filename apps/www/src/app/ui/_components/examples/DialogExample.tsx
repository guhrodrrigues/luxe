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
  );
}
