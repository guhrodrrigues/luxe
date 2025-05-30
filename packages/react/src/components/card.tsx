'use client' // @NOTE: Add in case you are using Next.js

import { motion, useMotionTemplate, useMotionValue } from 'motion/react'

import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'div'>>
}

const variants = [
  {
    variant: 'default',
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          'relative rounded-xl border border-primary/10 bg-main-background px-4 py-5',
          className,
        )}
      >
        {children}
      </div>
    ),
  },
  {
    variant: 'animated-border',
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          'relative rounded-xl border border-primary/10 bg-main-background px-4 py-5',
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
              'absolute aspect-square bg-gradient-to-r from-transparent via-neutral-400 to-neutral-500',
              'dark:from-transparent dark:via-neutral-600 dark:to-neutral-400',
            )}
            animate={{
              offsetDistance: ['0%', '100%'],
            }}
            style={{
              width: 42,
              offsetPath: `rect(0 auto auto 0 round ${18}px)`,
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: 'linear',
            }}
          />
        </div>
        <span className="relative z-10">
          {children}
        </span>
      </div>
    ),
  },
  {
    variant: 'shine',
    component: ({ children, className, ...props }) => (
      <div
        {...props}
        className={cn(
          'inline-flex animate-shine items-center justify-center rounded-xl border border-white/10 px-4 py-5',
          'bg-[length:400%_100%] bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)]',
          'text-sm transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)]',
          className,
        )}
      >
        {children}
      </div>
    ),
  },
  {
    variant: 'revealed-pointer',
    component: ({ children, className, ...props }) => {
      const mouseX = useMotionValue(0)
      const mouseY = useMotionValue(0)

      return (
        <div
          onMouseMove={e => {
            const { left, top } = e.currentTarget.getBoundingClientRect()

            mouseX.set(e.clientX - left)
            mouseY.set(e.clientY - top)
          }}
          className={cn(
            'group relative overflow-hidden rounded-xl bg-border/50 p-px',
          )}
        >
          <motion.div
            className={cn(
              '-inset-px pointer-events-none absolute rounded-xl opacity-0 transition duration-300 group-hover:opacity-20',
              '[--color:var(--color-primary)]',
            )}
            style={{
              background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, var(--color), transparent 80%)`,
            }}
          />
          <div
            {...props}
            className={cn(
              'relative select-none rounded-xl bg-main-background px-4 py-5',
              className,
            )}
          >
            {children}
          </div>
        </div>
      )
    },
  },
] as const satisfies readonly Variant[]

export type CardProps = {
  variant?: (typeof variants)[number]['variant']
} & React.ComponentProps<'div'>

export function Card({ variant = 'default', className, ...props }: CardProps) {
  const FALLBACK_INDEX = 0

  const variantComponent = variants.find(v => v.variant === variant)?.component

  const Component = variantComponent || variants[FALLBACK_INDEX].component

  return (
    <Slot.Root className="w-full max-w-[350px]">
      <Component {...props} className={className} />
    </Slot.Root>
  )
}
