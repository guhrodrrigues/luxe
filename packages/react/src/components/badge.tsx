'use client' // @NOTE: Add in case you are using Next.js

import { motion } from 'motion/react'
import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'div'>>
}

const variants: readonly Variant[] = [
  {
    variant: 'default',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'group relative w-fit overflow-hidden rounded-xl border border-transparent bg-[#161616] px-3 py-1 font-medium text-neutral-200 shadow-inner shadow-neutral-400 transition-all duration-200',
          'hover:bg-neutral-900/90 dark:shadow-neutral-800/80 dark:hover:bg-neutral-800/50',
          className,
        )}
      />
    ),
  },
  {
    variant: 'outline',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'group relative w-fit overflow-hidden rounded-full border border-neutral-300 px-3 py-1 font-medium text-neutral-700 transition-all duration-200',
          'dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900',
        )}
      />
    ),
  },
  {
    variant: 'success',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'rounded-full bg-gradient-to-t from-green-700 to-green-600 px-3 py-1 font-medium text-white',
          className,
        )}
      />
    ),
  },
  {
    variant: 'destructive',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'rounded-full bg-gradient-to-t from-red-600 to-red-500 px-3 py-1 font-medium text-white',
          className,
        )}
      />
    ),
  },
  {
    variant: 'shine',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'animate-shine items-center justify-center rounded-full border border-white/10 bg-[length:400%_100%] bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)]',
          'px-3 py-1 text-neutral-200 transition-colors dark:border-neutral-800',
          'dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] dark:text-neutral-400',
          className,
        )}
      />
    ),
  },
  {
    variant: 'animated-border',
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          'relative rounded-full border border-black/10 px-3 py-1 duration-200 hover:bg-neutral-200',
          'dark:border-white/10 dark:hover:bg-neutral-900',
          className,
        )}
      >
        <div
          className={cn(
            '-inset-px pointer-events-none absolute rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box]',
            '[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]',
          )}
        >
          <motion.div
            className={cn(
              'absolute aspect-square bg-gradient-to-r from-transparent via-neutral-300 to-neutral-400',
              'dark:from-transparent dark:via-neutral-600 dark:to-neutral-400',
            )}
            animate={{
              offsetDistance: ['0%', '100%'],
            }}
            style={{
              width: 18,
              offsetPath: `rect(0 auto auto 0 round ${18}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: 'linear',
            }}
          />
        </div>
        <span className="relative z-10 text-neutral-500 dark:text-neutral-400">
          {children}
        </span>
      </div>
    ),
  },
  {
    variant: 'rotate-border',
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className="relative inline-flex overflow-hidden rounded-full p-px"
      >
        <span
          className={cn(
            'absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]',
            'dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]',
          )}
        />
        <span
          className={cn(
            'inline-flex size-full items-center justify-center rounded-full bg-neutral-100 px-3 py-1 text-neutral-500 backdrop-blur-3xl',
            'dark:bg-neutral-950 dark:text-neutral-100',
            className,
          )}
        >
          {children}
        </span>
      </div>
    ),
  },
] as const

export type BadgeProps = {
  variant?: (typeof variants)[number]['variant']
} & React.ComponentProps<'div'>

export function Badge({
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  const FALLBACK_INDEX = 0

  const variantComponent = variants.find(v => v.variant === variant)?.component

  if (!variantComponent) {
    return variants[FALLBACK_INDEX].component(props)
  }

  return (
    <Slot.Root className={cn('font-medium text-xs')}>
      {variantComponent
        ? variantComponent({ className, ...props })
        : variants[FALLBACK_INDEX].component({ className, ...props })}
    </Slot.Root>
  )
}
