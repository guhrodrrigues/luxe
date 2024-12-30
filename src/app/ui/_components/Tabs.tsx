"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cn";

import { motion } from "motion/react";

const Tabs = TabsPrimitive.Root;

const TabsContext = React.createContext<string>("");

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => {
  const uniqueId = React.useId();
  return (
    <TabsContext.Provider value={uniqueId}>
      <Tabs ref={ref} {...props} />
    </TabsContext.Provider>
  );
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("space-x-3", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = React.useState(false);
  const id = React.useContext(TabsContext);

  React.useEffect(() => {
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
        "group relative inline-flex h-10 items-center justify-center whitespace-nowrap rounded-none bg-transparent text-sm font-medium leading-none text-neutral-500 transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:data-[state=active]:text-white",
        className,
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layout
          className="absolute -bottom-0.5 flex h-0.5 w-full justify-center"
          transition={{
            type: "spring",
            bounce: 0.1,
            duration: 0.4,
          }}
          layoutId={`active-underline-${id}`}
        >
          <div className="h-px w-full dark:bg-white" />
        </motion.div>
      )}
      {children}
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent };
