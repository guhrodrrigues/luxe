"use client";

import { useState } from "react";

import { motion } from "framer-motion";

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
        "flex min-h-[250px] items-center justify-center overflow-hidden overflow-x-auto border-neutral-800/50 bg-background p-8 shadow max-sm:-mx-6 max-sm:border-y sm:rounded-xl sm:border",
        isReloadAnimation && "relative",
        className,
      )}
    >
      {isReloadAnimation ? <div key={reloadKey}>{children}</div> : children}
      {isReloadAnimation && (
        <div className="absolute right-4 top-3 z-[5]">
          <motion.button
            key={reloadKey}
            className="text-neutral-500"
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
