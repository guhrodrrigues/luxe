'use client' // @NOTE: Add in case you are using Next.js

import { useContext } from 'react'

import { OTPInput, OTPInputContext } from 'input-otp'
import {
  AnimatePresence,
  type AnimationProps,
  MotionConfig,
  motion,
} from 'motion/react'

import { cn } from '@/utils/cn'

type InputOTPProps = React.ComponentProps<typeof OTPInput>

export function InputOTP({
  containerClassName,
  className,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

type InputOTPGroupProps = React.ComponentProps<'div'>

export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center gap-1', className)}
      {...props}
    />
  )
}

type InputOTPAnimatedNumberProps = {
  value: string | null
}

function InputOTPAnimatedNumber({ value }: InputOTPAnimatedNumberProps) {
  const animationProps: AnimationProps = {
    initial: { opacity: 0.2, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
  }

  return (
    <div className="relative flex size-[inherit] items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          data-slot="input-otp-animated-number"
          className="absolute"
          transition={{ duration: 0.09, ease: 'easeOut' }}
          {...animationProps}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

type InputOTPSlotProps = {
  index: number
} & React.ComponentProps<typeof motion.div>

export function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps) {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  const activeSlots = inputOTPContext?.slots.filter(slot => slot.isActive) ?? []
  const isMultiSelect = activeSlots.length > 1

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        data-slot="input-otp-slot"
        className={cn(
          'group relative flex h-10 w-9 items-center justify-center rounded-[10px] border border-border bg-main-muted font-medium text-base text-primary-foreground',
          'aria-invalid:border-red-500 data-[active=true]:aria-invalid:border-red-500 data-[active=true]:aria-invalid:ring-2 data-[active=true]:aria-invalid:ring-red-500',
          className,
        )}
        {...props}
      >
        {char && <InputOTPAnimatedNumber value={char} />}

        {hasFakeCaret && <FakeCaret />}

        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={`${isActive}-${isMultiSelect}`}
              layoutId={isMultiSelect ? `indicator-${index}` : 'indicator'}
              className="absolute inset-0 z-10 rounded-[inherit] ring-2 ring-border"
              transition={{ duration: 0.12, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  )
}

type InputOTPSeparatorProps = React.ComponentProps<'div'>

export function InputOTPSeparator({
  className,
  ...props
}: InputOTPSeparatorProps) {
  return (
    <div
      data-slot="input-otp-separator"
      aria-hidden
      className={cn('h-0.5 w-2 rounded-full bg-border', className)}
      {...props}
    />
  )
}

function FakeCaret() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="h-4.5 w-px bg-primary-muted motion-safe:animate-caret-blink motion-safe:duration-1000" />
    </div>
  )
}
