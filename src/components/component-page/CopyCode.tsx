"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

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

  return (
    <button
      onClick={handleCopy}
      className="rounded-lg bg-neutral-900 p-2 border-border"
    >
      {copied ? (
        <CheckIcon size={16} className="text-emerald-500" />
      ) : (
        <CopyIcon size={16} />
      )}
    </button>
  );
}
