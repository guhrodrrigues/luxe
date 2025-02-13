'use client' // @NOTE: Add in case you are using Next.js

import { useRef, useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/utils/cn'

export function ButtonMagneticExample() {
  return <ButtonMagnetic>Move Me</ButtonMagnetic>
}

type ButtonMagneticProps = React.ComponentProps<'button'>

function ButtonMagnetic({ className, children }: ButtonMagneticProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<any>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    setPosition({ x: middleX, y: middleY })
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.button
      ref={ref}
      className={cn(
        'relative rounded-xl bg-black px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black',
        className,
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
}
