import { cn } from "@/utils/cn";
import Code from "./Code";
import { CopyCode } from "./CopyCode";

type CodeBlockProps = {
  code: string;
  fileName?: string;
} & React.ComponentProps<"div">;

export function CodeBlock({ code, fileName, className }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "p-4 relative rounded-lg bg-background border border-border",
        className
      )}
    >
      {fileName ? (
        <div className="absolute left-4 top-4">
          <span className="text-sm text-foreground">{fileName}</span>
        </div>
      ) : null}
      <div className="absolute right-4 top-4 z-10">
        <CopyCode code={code} />
      </div>
      <div className="relative overflow-x-auto pt-10">
        <Code code={code} />
      </div>
    </div>
  );
}
