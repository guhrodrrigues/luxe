"use client";

import {
  createContext,
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cn";

export const Tabs = TabsPrimitive.Root;

export const TabsContext = createContext<string>("");

export const TabsRoot = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => {
  const uniqueId = useId();

  return (
    <TabsContext.Provider value={uniqueId}>
      <Tabs ref={ref} {...props} />
    </TabsContext.Provider>
  );
});

export const TabsList = forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-[44px] gap-4 w-full items-center justify-start rounded-t-lg bg-background",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    classNameIndicator?: string;
    isIndicator?: boolean;
  }
>(
  (
    { className, children, classNameIndicator, isIndicator = false, ...props },
    ref,
  ) => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const element = triggerRef.current;

      if (element) {
        setIsActive(element.dataset.state === "active");

        const observer = new MutationObserver(() => {
          setIsActive(element.dataset.state === "active");
        });

        observer.observe(element, { attributes: true });

        return () => observer.disconnect();
      }
    }, []);

    return (
      <TabsPrimitive.Trigger
        ref={triggerRef}
        className={cn(
          "group relative inline-flex -mx-2 px-2 items-center justify-center rounded-none bg-transparent py-2 text-sm font-medium whitespace-nowrap transition-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-neutral-500 data-[state=active]:text-primary",
          isIndicator && "border border-transparent py-[3px]",
          isIndicator &&
            isActive &&
            "bg-main-foreground dark:bg-main-secondary border-border rounded-lg",
          className,
        )}
        {...props}
      >
        {children}
      </TabsPrimitive.Trigger>
    );
  },
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "pt-1 relative rounded-md focus-visible:outline-none",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
