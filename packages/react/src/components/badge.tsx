'use client' // @NOTE: Add in case you are using Next.js

import { motion } from 'motion/react'
import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'div'>>
}

const variants = [
  {
    variant: 'default',
    component: ({ className, ...props }) => (
      <div
        {...props}
        className={cn(
          'relative overflow-hidden rounded-xl border border-transparent bg-neutral-900 px-3 py-1 text-neutral-200 shadow-inner transition-all duration-200',
          'shadow-main-foreground/70 hover:bg-main-invert/90 dark:shadow-main-foreground/80 dark:hover:bg-main-foreground/56',
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
          'relative overflow-hidden rounded-full border border-border bg-main-background px-3 py-1 transition-all duration-200',
          'text-primary-foreground hover:bg-main-foreground/50',
					className
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
          'rounded-full bg-gradient-to-t from-green-700 to-green-600 px-3 py-1 text-white',
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
          'rounded-full bg-gradient-to-t from-red-600 to-red-500 px-3 py-1 text-white',
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
          'animate-shine items-center justify-center rounded-full border border-border bg-[length:400%_100%]',
          'px-3 py-1 text-primary-invert/90 transition-colors dark:text-primary-muted',
					"bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)]",
          'dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)]',
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
          'relative rounded-full border border-primary/10 bg-main-background px-3 py-1 duration-200 hover:bg-main-foreground/40',
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
              width: 20,
              offsetPath: `rect(0 auto auto 0 round ${20}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: 'linear',
            }}
          />
        </div>
        <span className="relative z-10 text-primary-muted">
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
            'inline-flex size-full items-center justify-center rounded-full bg-main-background px-3 py-1 text-primary-foreground backdrop-blur-3xl',
            className,
          )}
        >
          {children}
        </span>
      </div>
    ),
  },
] as const satisfies readonly Variant[]

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

  const Component = variantComponent || variants[FALLBACK_INDEX].component

  return (
    <Slot.Root className={cn('font-medium text-xs')}>
      <Component {...props} className={className} />
    </Slot.Root>
  )
}
