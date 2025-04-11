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

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/ui/_components/Tabs";
import { AnimatedTabs } from "@/app/_components/ui/tabs";
import { Button } from "@/app/_components/ui/buttons/Button";

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
    <h1 className="text-xl font-bold -tracking-wide text-primary" {...props}>
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
  CodeBlock: ({
    children,
    npmCommand,
    yarnCommand,
    pnpmCommand,
    bunCommand,
    ...props
  }) => (
    <CodeBlock
      npmCommand={npmCommand}
      yarnCommand={yarnCommand}
      pnpmCommand={pnpmCommand}
      bunCommand={bunCommand}
      className={cn(props.className)}
      {...props}
    />
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
  CopyCode: ({ code, ...props }) => <CopyCode code={code} {...props} />,
  kbd: ({ children, ...props }) => (
    <kbd
      className="rounded bg-neutral-300/80 px-1 py-1 font-mono text-sm text-foreground dark:bg-neutral-800/80"
      {...props}
    >
      {children}
    </kbd>
  ),
  AnimatedTabs: () => <AnimatedTabs />,
  Button: ({ children, variant, ...props }) => (
    <Button variant={variant} className={cn(props.className)} {...props}>
      {children}
    </Button>
  ),
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
