"use client";

import { useState } from "react";

import { CheckIcon, ClipboardIcon } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

type CopyCode = {
  code: string;
};

export function CopyCode({ code }: CopyCode) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      onClick={handleCopy}
      className="relative flex h-7 w-7 items-center justify-center rounded-md text-foreground dark:text-neutral-500"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{
              ease: "easeOut",
              duration: 0.15,
            }}
          >
            <CheckIcon size={14} />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{
              ease: "easeOut",
              duration: 0.15,
            }}
          >
            <Icon />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    </svg>
  );
}
