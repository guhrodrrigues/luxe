import { cn } from '@/utils/cn'
import * as RadixAvatar from '@radix-ui/react-avatar'

export type AvatarRootProps = {
  hasBorder?: boolean
} & React.ComponentProps<typeof RadixAvatar.Root>

export function AvatarRoot({
  className,
  hasBorder,
  ...props
}: AvatarRootProps) {
  return (
    <RadixAvatar.Root
      data-has-border={hasBorder}
      className={cn(
        'group inline-flex size-10 overflow-hidden rounded-full outline outline-transparent',
        hasBorder && 'data-[has-border=true]:outline-border',
        className,
      )}
      {...props}
    />
  )
}

export type AvatarImageProps = React.ComponentProps<typeof RadixAvatar.Image>

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <RadixAvatar.Image
      className={cn('size-full object-cover', className)}
      {...props}
    />
  )
}

export type AvatarFallbackProps = React.ComponentProps<
  typeof RadixAvatar.Fallback
>

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <RadixAvatar.Fallback
      className={cn(
        'pointer !bg-main-foreground flex size-full select-none items-center justify-center text-primary-muted',
        'group-data-[has-border=true]:!bg-main-background',
        className,
      )}
      {...props}
    />
  )
}
