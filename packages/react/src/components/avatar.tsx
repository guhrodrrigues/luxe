import * as RadixAvatar from '@radix-ui/react-avatar'

import { cn } from '@/utils/cn'

type AvatarProps = {
  hasBorder?: boolean
} & React.ComponentProps<typeof RadixAvatar.Root>

export function Avatar({
  className,
  hasBorder,
  ...props
}: AvatarProps) {
  return (
    <RadixAvatar.Root
      data-has-border={hasBorder}
			data-slot="avatar"
      className={cn(
        'group inline-flex size-10 overflow-hidden rounded-full outline-2 outline-transparent',
        hasBorder && 'data-[has-border=true]:outline-border',
        className,
      )}
      {...props}
    />
  )
}

type AvatarImageProps = React.ComponentProps<typeof RadixAvatar.Image>

export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <RadixAvatar.Image
      data-slot="avatar-image"
      className={cn('size-full object-cover', className)}
      {...props}
    />
  )
}

type AvatarFallbackProps = React.ComponentProps<
  typeof RadixAvatar.Fallback
>

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <RadixAvatar.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'pointer flex size-full select-none items-center justify-center bg-main-foreground text-primary-muted',
        'group-data-[has-border=true]:bg-main-background',
        className,
      )}
      {...props}
    />
  )
}
