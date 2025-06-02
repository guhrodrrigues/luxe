"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { CheckIcon } from "lucide-react";

import { TextMorph } from "@/app/_components/TextMorph";

type CopyCode = {
  code: string;
  example?: boolean;
  mode?: "text" | "icon";
};

export function CopyCode({ code, example = false, mode = "icon" }: CopyCode) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return mode === "icon" ? (
    <button
      onClick={handleCopy}
      className="relative flex gap-0.5 size-7 items-center justify-center rounded-md text-foreground outline-none dark:text-neutral-500 dark:focus-visible:ring-neutral-800"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            className="ml-px"
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
            className="ml-px"
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
  ) : (
    <button
      onClick={handleCopy}
      className="flex items-center whitespace-nowrap gap-0.5 text-xs font-medium"
    >
      <TextMorph>{copied ? "Copied" : "Copy"}</TextMorph> Code
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    </svg>
  );
}
