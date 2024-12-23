"use client";

import { cn } from "@/utils/cn";

import Code from "./Code";
import { CopyCode } from "./CopyCode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { useMemo, useState } from "react";

type CodeBlockCommandProps = {
  pnpmCommand: string;
  yarnCommand: string;
  npmCommand: string;
  bunCommand: string;
} & React.ComponentProps<"div">;

export function CodeBlockCommand({
  pnpmCommand,
  yarnCommand,
  npmCommand,
  bunCommand,
  className,
}: CodeBlockCommandProps) {
  const tabs = useMemo(() => {
    return {
      pnpm: pnpmCommand,
      yarn: yarnCommand,
      npm: npmCommand,
      bun: bunCommand,
    };
  }, [pnpmCommand, yarnCommand, npmCommand, bunCommand]);

  const [activeValue, setActiveValue] = useState<
    "pnpm" | "yarn" | "npm" | "bun"
  >("pnpm");

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-800/60 bg-neutral-900/40",
        className,
      )}
    >
      <Tabs
        defaultValue={activeValue}
        onValueChange={(value) =>
          setActiveValue(value as "pnpm" | "yarn" | "npm" | "bun")
        }
      >
        <div className="flex h-10 items-center justify-between border-b border-neutral-800/60 bg-neutral-900/30 px-4">
          <TabsList>
            {Object.entries(tabs).map(([key, value]) => (
              <TabsTrigger key={key} value={value}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
          <CopyCode code={tabs[activeValue] || ""} />
        </div>
        <div className="relative overflow-x-auto p-4">
          {Object.entries(tabs).map(([key, value]) => (
            <TabsContent key={key} value={value}>
              <pre>
                <code
                  className="relative font-mono text-sm leading-none"
                  data-language="shellscript"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
