'use client' // @NOTE: Add in case you are using Next.js

import { useRef, useState } from 'react'

import { motion } from 'motion/react'
import * as Slot from '@radix-ui/react-slot'

import { cn } from '@/utils/cn'

type Variant = {
  variant: string
  component: React.FC<React.ComponentProps<'button'>>
}

const variants: readonly Variant[] = [
  {
    variant: 'default',
    component: ({ className, ...props }) => (
      <button
        {...props}
        className={cn(
          'group relative w-fit overflow-hidden rounded-xl border border-transparent px-4 py-2 text-neutral-200',
          'bg-[#161616] shadow-inner shadow-neutral-400',
          'shadow-neutral-400 hover:bg-neutral-900/90',
          'dark:shadow-neutral-800/80 dark:hover:bg-neutral-800/50',
          'transition-all duration-200',
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
          'group relative rounded-xl border border-neutral-300 px-4 py-2 text-neutral-700 transition-all duration-200',
          'hover:bg-neutral-200 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900',
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
          'animate-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)] px-4 py-2',
          'bg-[length:400%_100%] text-neutral-200 transition-colors dark:border-neutral-800',
          'dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] dark:text-neutral-400',
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
          'relative rounded-xl border border-black/10 px-4 py-2 duration-200',
          'hover:bg-neutral-200 dark:border-white/10 dark:hover:bg-neutral-900',
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
            'inline-flex size-full items-center justify-center rounded-xl bg-neutral-100 px-4 py-2 text-neutral-500 backdrop-blur-3xl',
            'dark:bg-neutral-950 dark:text-neutral-100',
            className,
          )}
        >
          {children}
        </span>
      </button>
    ),
  },
  {
    variant: 'magnetic',
    component: ({ children, ...props }) => {
      const { ref, handleMouseLeave, handleMouseMove, x, y } = useMagnetic()

      return (
        <motion.button
          ref={ref}
          className={cn(
            'relative rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black',
            props.className,
          )}
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
        </motion.button>
      )
    },
  },
  {
    variant: 'glitch-brightness',
    component: ({ children, className, ...props }) => {
      return (
        <button
          {...props}
          className={cn(
            'group relative overflow-hidden rounded-xl bg-black/80 px-4 py-2 text-white duration-300',
            'hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white',
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
              className={cn(
                'group-hover:-translate-y-full absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:duration-300',
                'hover:duration-300',
              )}
            >
              {children}
            </span>
            <span
              className={cn(
                'absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0',
              )}
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
            className={cn(
              'absolute inset-0 flex h-full w-full animate-brightness justify-center',
            )}
          >
            <div
              className={cn(
                'relative h-full w-8 bg-white/20 blur dark:bg-white/40',
              )}
            />
          </div>
        )
      }
    },
  },
] as const

export type ButtonProps = {
  variant?: (typeof variants)[number]['variant']
} & React.ComponentProps<'button'>

export function Button({
  variant = 'default',
  className,
  ...props
}: ButtonProps) {
  const FALLBACK_INDEX = 0

  const variantComponent = variants.find(v => v.variant === variant)?.component

  if (!variantComponent) {
    return variants[FALLBACK_INDEX].component(props)
  }

  return (
    <Slot.Root className={cn('font-medium text-sm')}>
      {variantComponent
        ? variantComponent({ ...props, className })
        : variants[FALLBACK_INDEX].component({ ...props, className })}
    </Slot.Root>
  )
}

// HOOKS ↴

function useMagnetic() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement>(null)

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
