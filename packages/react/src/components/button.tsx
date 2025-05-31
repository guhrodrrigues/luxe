'use client' // @NOTE: Add in case you are using Next.js

import { useRef, useState } from 'react'

import { motion } from 'motion/react'
import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'button'>>
}

const variants = [
  {
    variant: 'default',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'relative overflow-hidden rounded-xl border border-transparent bg-neutral-900 px-4 py-2 text-neutral-200 shadow-inner transition-all duration-200',
          'shadow-main-foreground/70 hover:bg-main-invert/90 dark:shadow-main-foreground/80 dark:hover:bg-main-foreground/56',
          className,
        )}
      />
    ),
  },
  {
    variant: 'outline',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'relative rounded-xl border border-border bg-main-background px-4 py-2 transition-all duration-200',
          'text-primary-foreground hover:bg-main-foreground/40',
          className,
        )}
      />
    ),
  },
  {
    variant: 'success',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'rounded-xl bg-gradient-to-t from-green-700 to-green-600 px-4 py-2 text-white',
          className,
        )}
      />
    ),
  },
  {
    variant: 'destructive',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'rounded-xl bg-gradient-to-t from-red-600 to-red-500 px-4 py-2 text-white',
          className,
        )}
      />
    ),
  },
  {
    variant: 'shine',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'animate-shine items-center justify-center rounded-xl border border-border bg-[length:400%_100%]',
          'px-4 py-2 text-primary-invert/90 transition-colors dark:text-primary-muted',
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
      <button
        {...props}
        className={cn(
          'relative rounded-xl border border-primary/10 bg-main-background px-4 py-2 duration-200 hover:bg-main-foreground/40',
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
      </button>
    ),
  },
  {
    variant: 'rotate-border',
    component: ({ children, className, ...props }) => (
      <button
        {...props}
        className="relative inline-flex overflow-hidden rounded-xl p-px"
      >
        <span
          className={cn(
            'absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]',
            'dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]',
          )}
        />
        <span
          className={cn(
            'inline-flex size-full items-center justify-center rounded-[11px] bg-main-background px-4 py-2 text-primary-foreground backdrop-blur-3xl',
            className,
          )}
        >
          {children}
        </span>
      </button>
    ),
  },
  {
    variant: 'glitch-brightness',
    component: ({ children, className, ...props }) => {
      return (
        <button
          {...props}
          className={cn(
            'group relative overflow-hidden rounded-xl px-4 py-2 text-primary-invert duration-300',
            'bg-primary/80 dark:hover:bg-primary',
            className,
          )}
        >
          <TextGlitch>{children}</TextGlitch>
          <Brightness />
        </button>
      )

      function TextGlitch({ children }: { children: React.ReactNode }) {
        return (
          <div className="relative overflow-hidden">
            <span className="invisible">{children}</span>
            <span
              className='group-hover:-translate-y-full absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:duration-300'
            >
              {children}
            </span>
            <span
              className='absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0'
            >
              {children}
            </span>
          </div>
        )
      }

      function Brightness() {
        return (
          <div
            aria-hidden
            className='absolute inset-0 flex h-full w-full animate-brightness justify-center'
          >
            <div className='relative h-full w-8 bg-white/20 blur dark:bg-white/40' />
          </div>
        )
      }
    },
  },
] as const satisfies readonly Variant[]

export type ButtonProps = {
  variant?: (typeof variants)[number]['variant']
  isMagnetic?: boolean
} & React.ComponentProps<'button'>

export function Button({
  variant = 'default',
  isMagnetic = false,
  className,
  ...props
}: ButtonProps) {
  const FALLBACK_INDEX = 0
  
  const variantComponent = variants.find(v => v.variant === variant)?.component

  const Component = variantComponent || variants[FALLBACK_INDEX].component

  const buttonContent = (
    <Slot.Root className={cn('font-medium text-sm')}>
      <Component {...props} className={className} />
    </Slot.Root>
  )

  if (isMagnetic) {
    return (
      <Magnetic>
        {buttonContent}
      </Magnetic>
    )
  }

  return buttonContent
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const { ref, handleMouseMove, handleMouseLeave, x, y } = useMagnetic()

  return (
    <motion.div 
      ref={ref} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}

function useMagnetic() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX, y: middleY })
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return { ref, handleMouseMove, handleMouseLeave, x, y }
}
