"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { CheckIcon, ClipboardIcon, CopyIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type CopyCode = {
  code: string;
};

export function CopyCode({ code }: CopyCode) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  const key = copied ? "copied" : "default";

  return (
    <motion.button
      onClick={handleCopy}
      className="rounded-full py-1.5 w-[70px] border bg-neutral-900 border-border cursor-copy"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key={key}
            className="flex items-center justify-center gap-1.5 text-neutral-200 text-xs font-medium"
            initial={{ opacity: 0, filter: "blur(4px)", y: "-6px" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            exit={{ opacity: 0, filter: "blur(4px)", y: "6px" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key={key}
            className="flex items-center justify-center gap-1.5 text-xs font-medium"
            initial={{ opacity: 0, filter: "blur(4px)", y: "-6px" }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            exit={{ opacity: 0, filter: "blur(4px)", y: "6px" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ClipboardIcon size={10} />
            Copy
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
