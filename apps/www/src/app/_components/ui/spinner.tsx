import { cn } from '@/utils/cn'

type SpinnerProps = {
  size?: string
} & React.ComponentProps<'div'>

export function Spinner({
  size = 'size-6',
  className,
  ...props
}: SpinnerProps) {
  const bars = Array(12).fill(0)

  return (
    <div className={cn(size)}>
      <div className={cn('relative top-1/2 left-1/2 h-[inherit] w-[inherit]')}>
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${String(i)}`}
            aria-label={`spinner-bar-${i + 1}`}
            className={cn(
              '-left-[10%] -top-[3.9%] absolute h-[8%] w-[24%] animate-spinner rounded-md bg-primary',
              `bar:nth-child(${i + 1})`,
              className,
            )}
            style={{
              animationDelay: `-${1.3 - i * 0.1}s`,
              transform: `rotate(${30 * i}deg) translate(146%)`,
            }}
            {...props}
          />
        ))}
      </div>
    </div>
  )
}
