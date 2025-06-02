'use client'

import { useEffect } from 'react'

import { motion, stagger, useAnimate, useInView } from 'motion/react'

const words = [
  {
    text: 'Illuminate',
  },
  {
    text: 'your',
  },
  {
    text: 'applications.',
  },
]

export function TypewriterTitle() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        },
      )
    }
  }, [isInView, animate])

  const wordsArray = words.map(word => {
    return {
      ...word,
      text: word.text.split(''),
    }
  })

  function renderWords() {
    return (
      <>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className="text-neutral-300">
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className="flex gap-x-1">
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}
        viewport={{ once: true }}
      >
        <div className="whitespace-nowrap text-2xl font-bold max-[400px]:text-xl lg:text-5xl">
          {renderWords()}
        </div>
      </motion.div>
      <Cursor />
    </div>
  )
}

function Cursor() {
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
      }}
      className="block h-8 w-[4px] rounded-sm bg-neutral-500 max-[400px]:h-[26px] lg:h-12"
    />
  )
}
