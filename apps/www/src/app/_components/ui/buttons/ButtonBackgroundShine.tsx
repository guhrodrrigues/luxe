import { cn } from '@/utils/cn'

export function ButtonBackgroundShine() {
  return (
    <button
      className={cn(
        'animate-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000000,45%,#303030,55%,#000000)]',
        'bg-[length:400%_100%] px-4 py-2 text-sm font-medium text-neutral-200 transition-colors dark:border-neutral-800',
        'dark:bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] dark:text-neutral-400',
      )}
    >
      Button
    </button>
  )
}
