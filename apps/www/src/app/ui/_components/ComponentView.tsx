"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { RotateCwIcon } from "lucide-react";

import { cn } from "@/utils/cn";

type ComponentViewProps = {
  isReloadAnimation?: boolean;
} & React.ComponentProps<"div">;

export function ComponentView({
  isReloadAnimation,
  className,
  children,
}: ComponentViewProps) {
  const [reloadKey, setReloadKey] = useState(0);

  function handleReload() {
    setReloadKey((prevKey) => prevKey + 1);
  }

  return (
    <div
      className={cn(
        "relative border-neutral-300/50 bg-background dark:border-neutral-800/40 rounded-xl border px-4",
        className,
      )}
    >
      {isReloadAnimation ? <div key={reloadKey}>{children}</div> : children}
      {isReloadAnimation && (
        <div className="absolute right-4 top-3 z-[5]">
          <motion.button
            key={reloadKey}
            className="rounded-md p-1 text-neutral-500 outline-none focus-within:ring-neutral-300 focus-visible:ring-1 dark:focus-within:ring-neutral-800"
            animate={{ rotate: reloadKey ? 360 : 0 }}
            onClick={handleReload}
          >
            <RotateCwIcon size={16} />
          </motion.button>
        </div>
      )}
    </div>
  );
}
