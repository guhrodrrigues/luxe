"use client";

import { useState } from "react";

import { TextMorph } from "@/app/_components/TextMorph";

type CopyCode = {
  id?: string;
  code: string;
};

export function CopyCode({ id, code }: CopyCode) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      id={id}
      onClick={handleCopy}
      className="flex items-center gap-0.5 text-xs font-medium"
    >
      <TextMorph>{copied ? "Copied" : "Copy"}</TextMorph> Code
    </button>
  );
}
