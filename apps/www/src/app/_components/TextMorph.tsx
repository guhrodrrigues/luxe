'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useId, useMemo } from 'react'

import { cn } from '@/utils/cn'

type TextMorphProps = {
  children: string
} & React.ComponentProps<'p'>

export function TextMorph({ children, className }: TextMorphProps) {
  const id = useId()

  const characters = useMemo(() => {
    const charCounts: Record<string, number> = {}

    return children.split('').map((char, index) => {
      const lowerChar = char.toLowerCase()
      charCounts[lowerChar] = (charCounts[lowerChar] || 0) + 1

      return {
        id: `${id}-${lowerChar}${charCounts[lowerChar]}`,
        label: index === 0 ? char.toUpperCase() : lowerChar,
      }
    })
  }, [children, id])

  return (
    <p className={cn(className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        {characters.map(character => (
          <motion.span
            key={character.id}
            layoutId={character.id}
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 360,
              damping: 18,
              mass: 0.3,
            }}
          >
            {character.label}
          </motion.span>
        ))}
      </AnimatePresence>
    </p>
  )
}
