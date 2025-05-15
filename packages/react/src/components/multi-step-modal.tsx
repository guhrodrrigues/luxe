'use client'

import { useState } from 'react'

import * as RadixDialog from '@radix-ui/react-dialog'
import {
  AnimatePresence,
  motion,
  type Variants,
  MotionConfig,
} from 'motion/react'
// import useMeasure from 'react-use-measure'

import { cn } from '@/registry/utils/cn'

const MultiStepModal = RadixDialog.Root
const MultiStepModalTrigger = RadixDialog.Trigger
const MultiStepModalClose = RadixDialog.Close

type MultiStepModalSteps = {
  title: string
  description: string
}

type MultiStepModalContentProps = React.CustomComponentPropsWithRef<
  typeof RadixDialog.Content
> & {
  steps: MultiStepModalSteps[]
}

function MultiStepModalContent({
  steps,
  ...props
}: MultiStepModalContentProps) {
  const TOTAL_STEPS = steps.length
  const MIN_STEP = 0

  const [activeContentIndex, setActiveContentIndex] = useState(MIN_STEP)
  const [direction, setDirection] = useState<number>(1)

  // const [ref, { height }] = useMeasure()

  const { title, description } = steps[activeContentIndex]

  function handleControlsNavigation(control: 'previous' | 'next') {
    const newDirection = control === 'next' ? 1 : -1
    setDirection(newDirection)

    setActiveContentIndex(prev => {
      const nextIndex = prev + newDirection
      return Math.min(TOTAL_STEPS - 1, Math.max(MIN_STEP, nextIndex))
    })
  }

  const slideMotionVariants: Variants = {
    initial: (dir: number) => {
      return {
        x: `${110 * dir}%`,
        opacity: 0,
      }
    },
    active: {
      x: '0%',
      opacity: 1,
    },
    exit: (dir: number) => {
      return {
        x: `${-110 * dir}%`,
        opacity: 0,
      }
    },
  }

  return (
    <MotionConfig transition={{ type: 'spring', duration: 0.6, bounce: 0 }}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className={cn(
            'fixed inset-0 bg-black/40 ease-out-quad',
            'motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:animate-in',
            'motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:animate-out',
          )}
        />

        <RadixDialog.Content
          {...props}
          className={cn(
            'max-w-96 overflow-hidden rounded-xl border border-border bg-neutral-100 focus:outline-none',
            '-translate-x-1/2 fixed top-1/3 left-1/2',
            '[--dark-bg:#111111] dark:bg-(--dark-bg)',

            // Animations
            'motion-safe:ease-out-quad',
            'motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=open]:animate-in',
            'motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=open]:zoom-out-95 motion-safe:data-[state=closed]:animate-out',
          )}
        >
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.main
              className={cn('px-4 py-3')}
              key={activeContentIndex}
              variants={slideMotionVariants}
              initial="initial"
              animate="active"
              exit="exit"
            >
              <RadixDialog.Title
                className={cn(
                  'mb-2 font-medium text-base text-neutral-700 dark:text-neutral-100',
                )}
              >
                {title}
              </RadixDialog.Title>

              <RadixDialog.Description
                className={cn(
                  'font-normal text-neutral-500 text-sm/5.5 dark:text-neutral-400',
                )}
              >
                {description}
              </RadixDialog.Description>
            </motion.main>
          </AnimatePresence>

          <footer
            className={cn(
              'mt-2 flex items-center justify-between border-border border-t bg-neutral-100 px-4 py-2',
              '[--dark-bg:#0f0f0f] dark:bg-(--dark-bg)',

              // buttons
              '*:h-8 *:w-24 *:rounded-full *:border *:border-border *:bg-neutral-100 *:px-3 *:font-medium *:text-black *:text-sm/5.5',
              '[--dark-btn-bg:#171717] dark:*:bg-(--dark-btn-bg) dark:*:text-white',
              '*:disabled:cursor-not-allowed *:disabled:opacity-50',
            )}
          >
            <button
              type="button"
              onClick={() => handleControlsNavigation('previous')}
              disabled={activeContentIndex === MIN_STEP}
            >
              Back
            </button>

            <button
              type="button"
              onClick={() => handleControlsNavigation('next')}
              disabled={activeContentIndex === TOTAL_STEPS - 1}
            >
              Continue
            </button>
          </footer>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </MotionConfig>
  )
}

export {
  MultiStepModal,
  MultiStepModalTrigger,
  MultiStepModalClose,
  MultiStepModalContent,
}
