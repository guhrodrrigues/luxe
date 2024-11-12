import { cn } from "@/utils/cn";

import Code from "./Code";
import { CopyCode } from "./CopyCode";

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
        "relative rounded-lg border border-neutral-800/60 bg-neutral-900/40 p-4",
        className,
      )}
    >
      {fileName && (
        <div className="absolute left-4 top-3">
          <span className="text-sm text-foreground">{fileName}</span>
        </div>
      )}
      {copyCode && (
        <div className="absolute right-4 top-3 z-10">
          <CopyCode code={code} />
        </div>
      )}
      <div className={cn("relative overflow-x-auto", fileName && "pt-10")}>
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
}
