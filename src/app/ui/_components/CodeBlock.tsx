import { cn } from "@/utils/cn";

import Code from "./Code";
import { CopyCode } from "./CopyCode";
import { CodeIcon, TerminalIcon } from "lucide-react";

type CodeBlockProps = {
  code: string;
  fileName?: string;
  lang?: string;
  copyCode?: boolean;
} & React.ComponentProps<"div">;

export function CodeBlock({
  code,
  fileName,
  className,
  lang,
  copyCode = true,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-800/60 bg-neutral-900/40",
        className,
      )}
    >
      {fileName && copyCode && (
        <div className="flex h-10 items-center justify-between border-b border-neutral-800/60 bg-neutral-900/30 px-4">
          <div className="flex items-center gap-1.5">
            {fileName === "Terminal" ? (
              <TerminalIcon size={14} className="text-neutral-600" />
            ) : (
              <CodeIcon size={14} className="text-neutral-600" />
            )}
            <span className="text-[13px] font-medium leading-none text-neutral-500">
              {fileName}
            </span>
          </div>
          <CopyCode code={code} />
        </div>
      )}
      <div className="relative overflow-x-auto p-4">
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
}
