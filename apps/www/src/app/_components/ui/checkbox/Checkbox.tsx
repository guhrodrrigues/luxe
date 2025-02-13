'use client' // @NOTE: Add in case you are using Next.js

import { motion } from 'motion/react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'

export function CheckboxExample() {
  return (
    <form className="flex items-start gap-3">
      <Checkbox />
      <div className="grid gap-1.5">
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
        >
          Accept terms and conditions
        </label>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          You agree to our Terms of Service and Privacy Policy.
        </span>
      </div>
    </form>
  )
}

function Checkbox() {
  return (
    <RadixCheckbox.Root
      className="flex h-5 w-5 flex-shrink-0 appearance-none items-center justify-center rounded border border-neutral-300 bg-neutral-100 outline-none dark:border-neutral-800 dark:bg-neutral-900"
      id="terms"
    >
      <RadixCheckbox.Indicator>
        <motion.div
          className="h-[inherit] w-[inherit] rounded bg-black dark:bg-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <CheckIcon />
        </motion.div>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5 7.5L7 9.5L7.40859 8.81902C8.13346 7.6109 9.00376 6.49624 10 5.5V5.5"
        className="stroke-white dark:stroke-black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        exit={{
          pathLength: 0,
        }}
        transition={{
          delay: 0.025,
          duration: 0.35,
        }}
      />
    </svg>
  )
}
