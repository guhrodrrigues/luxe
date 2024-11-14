"use client";

import { useState } from "react";

import { TextMorph } from "@/app/_components/TextMorph";

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

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-0.5 text-xs font-medium"
    >
      <TextMorph>{copied ? "Copied" : "Copy"}</TextMorph> Code
    </button>
  );
}
