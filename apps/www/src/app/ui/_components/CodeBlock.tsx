import { CodeIcon, TerminalIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import Code from "./Code";
import { CopyCode } from "./CopyCode";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { useMemo, useState } from "react";

type CodeBlockProps = {
  npmCommand: string;
  yarnCommand: string;
  pnpmCommand: string;
  bunCommand: string;
} & React.ComponentProps<"div">;

export function CodeBlock({
  npmCommand,
  yarnCommand,
  pnpmCommand,
  bunCommand,
  className,
}: CodeBlockProps) {
  const [currentPackageManager, setCurrentPackageManager] =
    useState(npmCommand);

  const tabs = useMemo(() => {
    return {
      pnpm: pnpmCommand,
      npm: npmCommand,
      yarn: yarnCommand,
      bun: bunCommand,
    };
  }, [npmCommand, pnpmCommand, yarnCommand, bunCommand]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-300/50 bg-neutral-200/30 dark:border-neutral-800/60 dark:bg-neutral-900/40",
        className,
      )}
    >
      <div className="flex h-10 items-center justify-between border-b border-neutral-300/50 bg-neutral-200/30 pl-4 pr-2.5 dark:border-neutral-800/60 dark:bg-neutral-900/30">
        <Tabs>
          <div className="flex items-center gap-2">
            <TabsList>
              {Object.entries(tabs).map(([key, _]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
                >
                  {key}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <CopyCode code={currentPackageManager} />
        </Tabs>
      </div>
      <div className="relative overflow-x-auto p-4">
        {Object.entries(tabs).map(([key, value]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <pre className="px-4 py-5">
              <code
                className="relative font-mono text-sm leading-none"
                data-language="bash"
              >
                {value}
              </code>
            </pre>
          </TabsContent>
        ))}
      </div>
    </div>
  );
}
