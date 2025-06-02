import { cn } from '@/utils/cn'

export function RequestComponentButton() {
  return (
    <a
      href="https://tally.so/r/3lN02V"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'relative w-fit rounded-full font-[460] text-neutral-200',
        'bg-[#161616] px-4 py-2 text-xs shadow-inner shadow-neutral-400 transition-all duration-200 dark:shadow-neutral-800/80',
        'hover:bg-gradient-to-t hover:from-neutral-500/40 dark:to-neutral-500/60 dark:hover:from-neutral-900/40 dark:hover:to-neutral-800/60',
      )}
    >
      Request a component
    </a>
  )
}
