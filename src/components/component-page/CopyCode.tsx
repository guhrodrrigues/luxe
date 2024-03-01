"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { CheckIcon, CopyIcon } from "lucide-react";

type CopyCode = {
  code: string;
};

export function CopyCode({ code }: CopyCode) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  const key = copied ? "copied" : "default";

  return (
    <button
      key={key}
      onClick={handleCopy}
      className="rounded-lg bg-neutral-900 p-2 border-border"
    >
      <AnimatePresence>
        <motion.span
          initial={{ opacity: 0, scale: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.4 }}
        >
          {copied ? (
            <CheckIcon size={14} className="text-emerald-500" />
          ) : (
            <CopyIcon size={14} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
