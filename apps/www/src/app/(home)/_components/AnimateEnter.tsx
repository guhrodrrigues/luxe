'use client'

import { motion } from 'motion/react'

import { cn } from '@/utils/cn'

type AnimateEnterProps = {
  className?: string
  delay?: number
  children: React.ReactNode
  duration?: number
}

export function AnimateEnter({
  className,
  delay,
  children,
  duration = 0.4,
}: AnimateEnterProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration, ease: 'easeOut', delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
