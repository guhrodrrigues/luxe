'use client' // @NOTE: Add in case you are using Next.js

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/utils/cn'

type AnimatedTabsProps = {
  tabs: Array<string>
}

export function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const containerRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container && activeTab) {
      const activeTabElement = activeTabRef.current

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement

        const clipLeft = offsetLeft
        const clipRight = offsetLeft + offsetWidth

        container.style.clipPath = `inset(0 ${Number(100 - (clipRight / container.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / container.offsetWidth) * 100).toFixed()}% round 17px)`
      }
    }
  }, [activeTab])

  return (
    <div className='relative mx-auto flex w-fit flex-col items-center rounded-full'>
      <div
        ref={containerRef}
        className='absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]'
      >
        <div className='relative flex w-full justify-center bg-primary'
        >
          {tabs.map((tab, index) => (
            <button
              key={index.toString()}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                'flex h-8 items-center rounded-full p-3 font-medium text-primary-invert text-sm/5.5',
              )}
              tabIndex={-1}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex w-full justify-center">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab

          return (
            <button
              key={index.toString()}
              type="button"
              ref={isActive ? activeTabRef : null}
              onClick={() => setActiveTab(tab)}
              className='flex h-8 items-center rounded-full p-3 font-medium text-primary-muted text-sm/5.5'
            >
              {tab}
            </button>
          )
        })}
      </div>
    </div>
  )
}
