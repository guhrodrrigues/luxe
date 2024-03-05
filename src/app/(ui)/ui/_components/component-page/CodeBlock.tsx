import Link from "next/link";

import { CopyIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { GradientLine } from "@/app/_components/GradientLine";

import Code from "./Code";
import { CopyCode } from "./CopyCode";

type CodeBlockProps = {
  code: string;
  fileName?: string;
  isVerticalHidden?: boolean;
  slug?: string;
} & React.ComponentProps<"div">;

export function CodeBlock({
  code,
  fileName,
  className,
  isVerticalHidden,
  slug,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "p-4 relative rounded-xl bg-background border border-border",
        isVerticalHidden ? "overflow-y-hidden h-[300px]" : undefined,
        className
      )}
    >
      <GradientLine />
      {fileName && (
        <div className="absolute left-4 top-4">
          <span className="text-sm text-foreground">{fileName}</span>
        </div>
      )}
      {!isVerticalHidden && (
        <div className="absolute right-4 top-4 z-10">
          <CopyCode code={code} />
        </div>
      )}
      <div className="relative overflow-x-auto pt-10">
        <Code code={code} />
      </div>
      {isVerticalHidden && (
        <>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent w-full h-[80%]" />
          <div className="absolute left-0 bottom-4 mx-4">
            <Link
              href={`/ui/${slug}`}
              className="group flex items-center gap-2"
            >
              <CopyIcon
                size={13}
                className="text-secondary duration-300 group-hover:text-primary"
              />
              <span className="text-xs font-medium text-secondary duration-300 group-hover:text-primary">
                View full code
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
