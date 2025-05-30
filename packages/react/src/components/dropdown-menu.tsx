'use client' // @NOTE: Add in case you are using Next.js

import { useState, createContext, useContext } from 'react'

import { motion, type Variants } from 'motion/react'

import { cn } from '@/utils/cn'

import { Slot } from '@radix-ui/react-slot'

const content: Variants = {
  hidden: {
    clipPath: 'inset(10% 50% 90% 50% round 12px)',
  },
  show: {
    clipPath: 'inset(0% 0% 0% 0% round 12px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.5,
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    filter: 'blur(20px)',
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
}

type DropdownMenuProps = React.ComponentProps<'nav'>

export function DropdownMenu({
  className,
  children,
  ...props
}: DropdownMenuProps) {
  return (
    <DropdownMenuProvider>
      <nav
        className={cn('mx-auto w-full max-w-[200px] space-y-2', className)}
        {...props}
      >
        {children}
      </nav>
    </DropdownMenuProvider>
  )
}

type DropdownMenuTriggerProps = {
  asChild?: boolean
} & React.ComponentProps<'button'>

export function DrodpownMenuTrigger({
  asChild = false,
  children,
  className,
  ...props
}: DropdownMenuTriggerProps) {
  const { isOpen, setIsOpen } = useDropdownMenu()

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'flex w-full max-w-[300px] items-center justify-between rounded-xl border border-border bg-main-secondary px-3.5 py-2.5 ease-out active:scale-[0.97]',
        'focus-visible:border-border focus-visible:outline-none',
				className
      )}
      onClick={() => setIsOpen(prev => !prev)}
      {...props}
    >
      {children}
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        className={cn(
          'text-neutral-400 duration-300 ease-out',
          isOpen && 'rotate-180',
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Chevron</title>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </Comp>
  )
}

type DropdownMenuContentProps = {
  floating?: boolean
} & React.ComponentProps<typeof motion.ul>

export function DropdownMenuContent({
  children,
  floating = false,
  className,
  ...props
}: DropdownMenuContentProps) {
  const { isOpen } = useDropdownMenu()

  return (
    <motion.ul
      className={cn(
        'z-[1] mx-auto flex w-full max-w-[200px] flex-col gap-1.5 rounded-xl px-1.5 py-2.5',
        'border border-border bg-main-secondary',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        floating ? 'absolute' : 'relative',
        className,
      )}
      variants={content}
      initial="hidden"
      animate={isOpen ? 'show' : 'hidden'}
      exit="hidden"
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.ul>
  )
}

type DropdownMenuItemProps = {
  asChild?: boolean
} & React.ComponentProps<'button'>

export function DropdownMenuItem({
  asChild = false,
  children,
  className,
  ...props
}: DropdownMenuItemProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <motion.li variants={item} transition={{ duration: 0.2 }}>
      <Comp
        className={cn(
          'flex w-full items-center gap-2 rounded-lg border border-transparent py-1 text-primary-muted transition-colors',
          'hover:text-primary-foreground focus-visible:border-border focus-visible:text-primary-foreground focus-visible:outline-none',
          'select-none px-1.5 hover:bg-main-foreground/60 focus-visible:bg-main-foreground/60',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    </motion.li>
  )
}

const Context = createContext(
  {} as {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  },
)

function DropdownMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = { isOpen, setIsOpen }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

function useDropdownMenu() {
  const { isOpen, setIsOpen } = useContext(Context)

  return { isOpen, setIsOpen }
}
