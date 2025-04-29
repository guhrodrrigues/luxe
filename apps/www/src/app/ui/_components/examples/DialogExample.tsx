"use client";

import { useState } from "react";

import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/app/_components/ui/dialog";

import { AnimatePresence } from "motion/react";

import { Button } from "@/app/_components/ui/button";

import { cn } from "@/utils/cn";

export function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogPortal forceMount>
        <AnimatePresence mode="popLayout">
          {isOpen && <DialogOverlay />}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <DialogContent
              className={cn(
                "fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2",
                "rounded-xl shadow max-h-[85vh] w-[90vw] max-w-[400px] focus:outline-none",
              )}
            >
              <DialogTitle className="px-6 pt-5">Change Username</DialogTitle>
              <DialogDescription className="px-6 py-1">
                Make changes to your username here.
              </DialogDescription>
              <fieldset className="mb-[15px] flex items-center gap-4 px-6 py-4">
                <input
                  id="name"
                  placeholder="@guhrodrrigues"
                  className={cn(
                    "flex h-[40px] w-full flex-1 items-center justify-center rounded-lg border border-[#dddddd]",
                    "bg-neutral-100 dark:border-[#222222] dark:bg-[#111111] px-2.5 text-[15px] text-base",
                    "leading-none transition-all text-neutral-600 dark:text-neutral-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
                    "focus:outline-none focus:ring focus:ring-neutral-400 dark:focus:ring-neutral-800",
                  )}
                />
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
          )}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
}
