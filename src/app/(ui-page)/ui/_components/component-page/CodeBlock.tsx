import { cn } from "@/utils/cn";

import { GradientLine } from "@/app/_components/GradientLine";

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
        "p-4 relative rounded-lg bg-background border border-border",
        className
      )}
    >
      {copyCode && (
        <div className="absolute top-3 right-4 z-10">
          <CopyCode code={code} />
        </div>
      )}
      <GradientLine />
      {fileName && (
        <div className="absolute left-4 top-3">
          <span className="text-sm text-foreground">{fileName}</span>
        </div>
      )}
      <div className={cn("relative overflow-x-auto", fileName && "pt-10")}>
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
}
