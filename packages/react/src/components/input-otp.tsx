import { OTPInput, OTPInputContext } from 'input-otp'
import { AnimatePresence, type AnimationProps, motion } from 'motion/react'

import { cn } from '@/utils/cn'
import { useContext } from 'react'

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
    initial: { opacity: 0.2, y: 15 },
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
          transition={{ duration: 0.08, ease: 'easeInOut' }}
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

  return (
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
      {isActive && (
        <motion.div
          layoutId="indicator"
          className="absolute inset-0 z-10 rounded-[inherit] ring-2 ring-border"
          transition={{ duration: 0.12, ease: 'easeInOut' }}
        />
      )}
    </motion.div>
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
      <div className="h-4.5 w-px animate-caret-blink bg-primary-muted duration-1000" />
    </div>
  )
}
