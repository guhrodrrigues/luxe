"use client";

import { type ElementRef, type HTMLAttributes, useRef } from "react";

import { cn } from "@/registry/utils/cn";

import { AlbumIcon, HomeIcon, MonitorIcon } from "lucide-react";

import {
  type MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export function DockMenu() {
  const items = [
    { icon: <HomeIcon size={24} /> },
    { icon: <AlbumIcon size={24} /> },
    { icon: <MonitorIcon size={24} /> },
  ];

  return <Dock items={items} />;
}

type DockItem = {
  icon: JSX.Element;
};

type DockContainerProps = {
  side?: "top" | "bottom";
  items: DockItem[];
} & HTMLAttributes<HTMLDivElement>;

function Dock({
  side = "bottom",
  className,
  items,
  ...props
}: DockContainerProps) {
  const mouseX = useMotionValue(Infinity);
  const containerX = useMotionValue(0);

  const containerRef = useRef<ElementRef<"div">>(null);

  return (
    <div
      {...props}
      className={cn(side === "top" ? "top-4" : "bottom-4", className)}
    >
      <motion.div
        ref={containerRef}
        className="flex h-14 items-end gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 pb-1.5 dark:border-neutral-800/50 dark:bg-neutral-950"
        onMouseLeave={() => mouseX.set(Infinity)}
        onMouseMove={(e: MouseEvent) => {
          const rect = containerRef.current?.getBoundingClientRect();

          if (rect) {
            mouseX.set(e.clientX - rect.left);
            containerX.set(rect.x);
          }
        }}
      >
        {items.map(({ icon }, idx) => (
          <DockItem key={idx} containerX={containerX} mouseX={mouseX}>
            {icon}
          </DockItem>
        ))}
      </motion.div>
    </div>
  );
}

interface DockItemProps extends HTMLAttributes<HTMLElement> {
  mouseX: MotionValue<number>;
  containerX: MotionValue<number>;
}

function DockItem({ children, containerX, mouseX }: DockItemProps) {
  const itemRef = useRef<ElementRef<"div">>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = itemRef.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
      left: 0,
    };

    const XDiffToContainerX = bounds?.x - containerX.get();

    return val - bounds?.width / 2 - XDiffToContainerX;
  });

  const widthSync = useTransform(distance, [-125, 0, 125], [44, 85, 44]);
  const width = useSpring(widthSync);

  return (
    <motion.div
      role="button"
      ref={itemRef}
      className="group flex aspect-square items-center justify-center overflow-hidden rounded-full bg-neutral-200 p-2 text-neutral-500 transition duration-500 active:-translate-y-10 active:duration-1000 active:ease-out dark:bg-neutral-900 dark:text-neutral-400"
      style={{
        width,
      }}
    >
      {children}
    </motion.div>
  );
}
