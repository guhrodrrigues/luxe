import { cn } from '@/utils/cn'

type BadgeAnimatedBorderProps = React.ComponentPropsWithRef<'div'>

export function BadgeAnimatedBorder({
  children,
  className,
  ...props
}: BadgeAnimatedBorderProps) {
  return (
    <div className="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_85%)_inset] transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]">
      <span>
        <span
          className={cn(
            'spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full',
            '[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] dark:[mask:linear-gradient(white,_transparent_50%)]',
            'before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)] dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]',
            "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
          )}
        />
      </span>
      <span className="backdrop absolute inset-px rounded-full bg-neutral-100 transition-colors duration-200 dark:bg-neutral-950" />
      <span
        className={cn(
          'z-10 text-xs font-medium text-neutral-500 dark:text-neutral-400',
          className,
        )}
      >
        {children}
      </span>
    </div>
  )
}
