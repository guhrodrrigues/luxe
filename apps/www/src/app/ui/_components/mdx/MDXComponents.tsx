import type { MDXComponents } from "mdx/types";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import { cn } from "@/utils/cn";
import { ComponentView } from "../ComponentView";
import { CodeBlock } from "../CodeBlock";
import { CopyCode } from "../CopyCode";
import { CodeIcon, TerminalIcon } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/ui/_components/Tabs";
import { AnimatedTabs } from "@/app/_components/ui/tabs";

const components: MDXComponents = {
  ComponentView: ({ children, isReloadAnimation, ...props }) => (
    <ComponentView
      isReloadAnimation={isReloadAnimation}
      className={cn(props.className)}
      {...props}
    >
      {children}
    </ComponentView>
  ),
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold -tracking-wide text-primary" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h1 className="text-2xl font-bold -tracking-wide text-primary" {...props}>
      {children}
    </h1>
  ),
  p: ({ children, ...props }) => (
    <p
      className="text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90"
      {...props}
    >
      {children}
    </p>
  ),
  CodeBlock: ({ children, fileName, copyCode, lang, ...props }) => (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-300/50 bg-neutral-200/30 dark:border-neutral-800/60 dark:bg-neutral-900/40",
        props.className,
      )}
    >
      {fileName && copyCode && (
        <div className="flex h-10 items-center justify-between border-b border-neutral-300/50 bg-neutral-200/30 pl-4 pr-2.5 dark:border-neutral-800/60 dark:bg-neutral-900/30">
          <div className="flex items-center gap-2">
            {fileName === "Terminal" ? (
              <TerminalIcon
                size={14}
                className="text-neutral-500 dark:text-neutral-600"
              />
            ) : (
              <CodeIcon
                size={14}
                className="text-neutral-500 dark:text-neutral-600"
              />
            )}
            <span className="text-[13px] font-medium leading-none text-neutral-500">
              {fileName}
            </span>
          </div>
          <CopyCode code={children} />
        </div>
      )}
      <div className="relative overflow-x-auto p-4">{children}</div>
    </div>
  ),
  CodeHighlight: ({ children, ...props }) => (
    <span
      className="rounded-[.375rem] border border-neutral-200 bg-neutral-100 px-1 py-px font-mono text-[13px] text-foreground dark:border-neutral-800 dark:bg-[#191918]"
      {...props}
    >
      {children}
    </span>
  ),
  Tabs: ({ ...props }) => (
    <Tabs className={cn("relative w-full", props.className)} {...props} />
  ),
  TabsList: ({ ...props }) => (
    <TabsList className={cn(props.className)} {...props} />
  ),
  TabsTrigger: ({ ...props }) => (
    <TabsTrigger className={cn(props.className)} {...props} />
  ),
  TabsContent: ({ className, ...props }) => (
    <TabsContent className={cn(props.className)} {...props} />
  ),
  AnimatedTabs: () => <AnimatedTabs />,
  CopyCode: ({ code, ...props }) => <CopyCode code={code} {...props} />,
};

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
  };
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
                keepBackground: false,
                defaultLang: "tsx",
              },
            ],
          ] as PluggableList,
        },
      }}
      {...props}
    />
  );
}
