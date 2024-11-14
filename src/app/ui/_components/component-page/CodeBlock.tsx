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
        "relative overflow-hidden rounded-lg border border-neutral-800/60 bg-neutral-900/40",
        className,
      )}
    >
      {!fileName && !copyCode ? null : (
        <div className="flex h-10 items-center justify-between border-b border-neutral-800/60 bg-neutral-900/40 px-4">
          <div className="flex items-center gap-1.5">
            {fileName === "Terminal" ? <TerminalIcon /> : <FileIcon />}
            <span className="text-sm text-foreground">{fileName}</span>
          </div>
          <CopyCode code={code} />
        </div>
      )}
      <div className={cn("relative overflow-x-auto p-4")}>
        <Code code={code} lang={lang} />
      </div>
    </div>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-neutral-600"
    >
      <path
        d="M12 2H6.75C5.23122 2 4 3.23122 4 4.75V19.25C4 20.7688 5.23122 22 6.75 22H17.25C18.7688 22 20 20.7688 20 19.25V10H14.75C13.2312 10 12 8.76878 12 7.25V2Z"
        fill="currentColor"
      />
      <path
        d="M19.5566 8.5C19.5343 8.475 19.5112 8.45058 19.4874 8.42678L13.5732 2.51256C13.5494 2.48876 13.525 2.46571 13.5 2.44343V7.25C13.5 7.94036 14.0596 8.5 14.75 8.5H19.5566Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-600"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.83333C2 2.82081 2.82081 2 3.83333 2H12.1667C13.1792 2 14 2.82081 14 3.83333V12.1667C14 13.1792 13.1792 14 12.1667 14H3.83333C2.82081 14 2 13.1792 2 12.1667V3.83333ZM4.47978 4.81311C4.67504 4.61785 4.99163 4.61785 5.18689 4.81311L6.35355 5.97978C6.54881 6.17504 6.54881 6.49163 6.35355 6.68687L5.18689 7.85353C4.99163 8.0488 4.67504 8.0488 4.47978 7.85353C4.28452 7.65827 4.28452 7.34173 4.47978 7.14647L5.29289 6.33333L4.47978 5.52022C4.28452 5.32496 4.28452 5.00837 4.47978 4.81311ZM7.16667 7C6.89053 7 6.66667 7.22387 6.66667 7.5C6.66667 7.77613 6.89053 8 7.16667 8H8.5C8.77613 8 9 7.77613 9 7.5C9 7.22387 8.77613 7 8.5 7H7.16667Z"
        fill="currentColor"
      />
    </svg>
  );
}
