"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion, Transition } from "motion/react";
import { Children, cloneElement, useId, useState } from "react";

export type TabsProps = {
  children:
    | React.ReactElement<{ "data-id": string }>[]
    | React.ReactElement<{ "data-id": string }>;
  type?: "active" | "hover";
} & React.ComponentProps<typeof motion.div>;

export function Tabs({ children, type = "active", className }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const uniqueId = useId();

  const defaultValue = type === "active" ? activeTab : null;

  function handleTabChange(id: string | null) {
    setActiveTab(id);
  }

  const transition: Transition = {
    type: "spring",
    bounce: 0.2,
    duration: 0.3,
  };

  return Children.map(children, (child: any, index) => {
    const { props } = child;

    const id = props["data-id"];

    const tabProps = type.includes("hover")
      ? {
          onMouseEnter: () => handleTabChange(id),
          onMouseLeave: () => handleTabChange(null),
        }
      : {
          onClick: () => handleTabChange(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn("relative flex", props.className),
        "data-checked": activeTab === id,
        ...tabProps,
      },
      <>
        <div className="z-10">{child.props.children}</div>
        <AnimatePresence initial={false}>
          {activeTab === id && (
            <motion.div
              layoutId={`tab-${uniqueId}`}
              className={cn("absolute inset-0", className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
      </>,
    );
  });
}
