"use client"; // @NOTE: Add in case you are using Next.js

import { useState } from "react";

import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { cn } from "@/utils/cn";

type NavigationMenuProps = React.ComponentProps<
  typeof RadixNavigationMenu.Root
>;

export function NavigationMenu({
  className,
  children,
  ...props
}: NavigationMenuProps) {
  return (
    <RadixNavigationMenu.Root
      data-slot="navigation-menu"
      data-viewport={false}
      className={cn(
        "relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </RadixNavigationMenu.Root>
  );
}

type NavigationMenuListProps = React.ComponentProps<
  typeof RadixNavigationMenu.List
>;

export function NavigationMenuList({
  className,
  ...props
}: NavigationMenuListProps) {
  return (
    <RadixNavigationMenu.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className,
      )}
      {...props}
    />
  );
}

type NavigationMenuItemProps = React.ComponentProps<
  typeof RadixNavigationMenu.Item
>;

export function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuItemProps) {
  return (
    <RadixNavigationMenu.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

type NavigationMenuTriggerProps = React.ComponentProps<
  typeof RadixNavigationMenu.Trigger
>;

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <RadixNavigationMenu.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-main-background px-4 py-2 font-medium text-sm hover:bg-main-foreground hover:text-primary",
        "text-primary-muted focus:bg-main-foreground focus:text-primary disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-primary",
        "outline-none data-[state=open]:bg-main-foreground data-[state=open]:focus:bg-main-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        className="relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Chevron Down</title>
        <path d="m6 9 6 6 6-6" />
      </svg>
    </RadixNavigationMenu.Trigger>
  );
}

type NavigationMenuContentProps = React.ComponentProps<
  typeof RadixNavigationMenu.Content
>;

export function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuContentProps) {
  return (
    <RadixNavigationMenu.Content
      data-slot="navigation-menu-content"
      className={cn(
        "top-full mt-1.5 overflow-hidden rounded-xl border bg-main-muted z-50 text-primary-muted shadow left-0 w-full border-border p-2.5 md:absolute md:left-1/2 md:w-auto",
        "**:data-[slot=navigation-menu-link]:focus:outline-none **:data-[slot=navigation-menu-link]:focus:ring-0",
        "motion-safe:data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52",
        "motion-safe:data-[motion=to-end]:slide-out-to-right-52 motion-safe:data-[motion=to-start]:slide-out-to-left-52 md:-translate-x-1/2",
        "motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[motion^=from-]:animate-in motion-safe:data-[motion^=to-]:animate-out",
        "motion-safe:duration-200 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:animate-in",
        "motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

type NavigationMenuLinkProps = React.ComponentProps<
  typeof RadixNavigationMenu.Link
>;

export function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuLinkProps) {
  return (
    <RadixNavigationMenu.Link
      data-slot="navigation-menu-link"
      className={cn(
        "text-primary-muted data-[active=true]:bg-main-foreground data-[active=true]:text-primary data-[active=true]:focus:bg-main-foreground",
        "flex hover:bg-main-foreground hover:text-primary focus:bg-main-foreground focus:text-primary data-[active=true]:hover:bg-main-foreground",
        "h-9 flex-col gap-1 rounded-md px-4 py-2 font-medium text-sm outline-none transition-all focus-within:ring-border focus-visible:outline-1",
        'focus-visible:ring-1 [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="text-"])]:text-main-muted',
        className,
      )}
      {...props}
    />
  );
}

type NavigationMenuListItemProps = React.ComponentProps<
  typeof RadixNavigationMenu.Link
>;

export function NavigationMenuListItem({
  children,
  className,
  ...props
}: NavigationMenuListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isReducedMotion = useReducedMotion();

  return (
    <RadixNavigationMenu.Link
      {...props}
      data-slot="navigation-menu-list-item"
      className="relative rounded-lg p-3 outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className={cn("relative z-10 flex flex-col gap-0.5", className)}>
        {children}
      </div>
      {!isReducedMotion && (
        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-[1] rounded-[inherit] bg-main-foreground"
              layoutId="background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                bounce: 0,
              }}
            />
          )}
        </AnimatePresence>
      )}
    </RadixNavigationMenu.Link>
  );
}
