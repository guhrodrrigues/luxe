'use client' // @NOTE: Add in case you are using Next.js

import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

import { cn } from '@/utils/cn'

const showAnimationProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: [0.175, 0.885, 0.32, 1.1] },
}

const checkIconAnimationProps = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 0.3, ease: [0.645, 0.045, 0.355, 1] },
}

type CheckboxProps = React.ComponentProps<typeof RadixCheckbox.Root>

export function Checkbox({ checked, className, ...props }: CheckboxProps) {
  const isReducedMotion = useReducedMotion()

  return (
    <RadixCheckbox.Root
      {...props}
      className={cn(
        'relative inset-ring-1 inset-ring-border inline-block size-5 appearance-none rounded bg-main-muted',
        className,
      )}
    >
      <AnimatePresence mode="popLayout">
        <RadixCheckbox.Indicator
          className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-primary"
          asChild
        >
          <motion.div {...(!isReducedMotion && showAnimationProps)}>
            <CheckIcon
              checkedState={checked}
              isReducedMotion={isReducedMotion}
            />
          </motion.div>
        </RadixCheckbox.Indicator>
      </AnimatePresence>
    </RadixCheckbox.Root>
  )
}

type CheckIconProps = {
  checkedState: CheckboxProps['checked']
  isReducedMotion: boolean | null
}

function CheckIcon({ checkedState, isReducedMotion }: CheckIconProps) {
  const CHECK_PATH = 'M5 13 L10 18 L20 6'
  const INDETERMINATE_PATH = 'M6 12 H18'

  const path =
    checkedState === 'indeterminate' ? INDETERMINATE_PATH : CHECK_PATH

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 scale-65 stroke-4 stroke-primary-invert"
    >
      <motion.path
        d={path}
        {...(!isReducedMotion && checkIconAnimationProps)}
      />
    </svg>
  )
}
