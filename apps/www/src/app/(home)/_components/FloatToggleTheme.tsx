'use client'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { Icons } from '@/app/_components/Icons'
import { TextMorph } from '@/app/_components/TextMorph'
import { AnimatePresence, motion, useScroll } from 'motion/react'

export function FloatToggleTheme() {
  const [visible, setVisible] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', value => {
      setVisible(value > 100)
    })

    return () => unsubscribe()
  }, [scrollY])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          initial={{ width: 0, y: -100, opacity: 0 }}
          animate={{ width: 112, y: 0, opacity: 1 }}
          exit={{ width: 0, y: -100, opacity: 0 }}
          className="fixed left-0 right-0 top-4 z-[999] mx-auto flex h-8 items-center justify-between rounded-2xl border border-border bg-background px-2 text-primary shadow dark:border-transparent dark:bg-[#161616] dark:shadow-inner dark:shadow-neutral-800/80"
        >
          <AnimatePresence mode="wait" initial={false}>
            {resolvedTheme === 'dark' ? (
              <motion.span
                key="moon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.1,
                }}
              >
                <Icons.moon />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.1,
                }}
              >
                <Icons.sun />
              </motion.span>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0)' }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{
              ease: 'easeOut',
              duration: 0.15,
              delay: 0.3,
            }}
          >
            <span className="flex items-center gap-0.5 whitespace-nowrap text-xs font-medium">
              <TextMorph>
                {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
              </TextMorph>
              mode
            </span>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
