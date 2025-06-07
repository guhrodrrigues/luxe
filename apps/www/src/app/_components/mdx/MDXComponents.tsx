import Link from "next/link";
import Image from "next/image";

import type { MDXComponents } from "mdx/types";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import type { PluggableList } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

import { cn } from "@/utils/cn";

import { ComponentView } from "../../ui/_components/ComponentView";
import { CommandBlock } from "../../ui/_components/CommandBlock";
import { CopyCode } from "../../ui/_components/CopyCode";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/ui/_components/Tabs";
import { AnimatedTabs } from "@/app/_components/ui/animated-tabs";
import { Button } from "@/app/_components/ui/button";
import { CodeBlock } from "../../ui/_components/CodeBlock";
import { Card } from "@/app/_components/ui/card";
import { DialogExample } from "../../ui/_components/examples/DialogExample";
import { AccordionExample } from "../../ui/_components/examples/AccordionExample";
import { TooltipExample } from "../../ui/_components/examples/TooltipExample";
import { CheckboxExample } from "../../ui/_components/examples/CheckboxExample";
import { Badge } from "@/app/_components/ui/badge";
import { Text } from "@/app/_components/ui/text";
import { Spinner } from "@/app/_components/ui/spinner";
import { DropdownMenuExample } from "../../ui/_components/examples/DropdownMenuExample";
import { SwitchExample } from "../../ui/_components/examples/SwitchExample";
import { Input } from "../ui/input";
import { BlurImage } from "../BlurImage";
import { MultiStepModalExample } from "../../ui/_components/examples/MultiStepModalExample";
import { NavigationMenuExample } from "@/app/ui/_components/examples/NavigationMenuExample";

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
  p: ({ children, ...props }) => (
    <p
      className="font-normal leading-relaxed text-black/80 dark:text-white/90"
      {...props}
    >
      {children}
    </p>
  ),
  h1: ({ children, ...props }) => (
    <h1 className="text-3xl font-bold -tracking-wide text-primary" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-xl font-bold -tracking-wide text-primary" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-xl font-bold -tracking-wide text-primary" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="font-medium text-primary tracking-tight text-lg" {...props}>
      {children}
    </h4>
  ),
  CommandBlock: ({
    children,
    npmCommand,
    yarnCommand,
    pnpmCommand,
    bunCommand,
    ...props
  }) => (
    <CommandBlock
      npmCommand={npmCommand}
      yarnCommand={yarnCommand}
      pnpmCommand={pnpmCommand}
      bunCommand={bunCommand}
      className={cn(props.className)}
      {...props}
    />
  ),
  CodeBlock: ({
    fileName,
    contentClassName,
    copyCode = true,
    customFilePath,
    ...props
  }) => (
    <CodeBlock
      fileName={fileName}
      copyCode={copyCode}
      className={cn(props.className)}
      contentClassName={contentClassName}
      customFilePath={customFilePath}
      {...props}
    />
  ),
  Link: ({ children, className, isExternal = false, ...props }) => {
    if (isExternal) {
      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "underline underline-offset-[2.5px] decoration-neutral-300 dark:decoration-neutral-500 duration-200 hover:decoration-neutral-500 dark:hover:decoration-neutral-300 hover:text-black dark:hover:text-white",
            props.className,
          )}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        {...props}
        className={cn(
          "underline underline-offset-[2.5px] decoration-neutral-300 dark:decoration-neutral-500 duration-200 hover:decoration-neutral-500 dark:hover:decoration-neutral-300 hover:text-black dark:hover:text-white",
          props.className,
        )}
      >
        {children}
      </Link>
    );
  },
  CodeHighlight: ({ children, ...props }) => (
    <span
      className="rounded-md bg-neutral-300/70 px-1 py-0.5 font-mono text-sm text-foreground dark:bg-neutral-800/70"
      {...props}
    >
      {children}
    </span>
  ),
  BlurImage: ({ src, alt, ...props }) => (
    <BlurImage src={src} alt={alt} {...props} />
  ),
  Image: ({ src, alt, ...props }) => (
    <Image src={src} alt={alt} width={1280} height={960} {...props} />
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
  CopyCode: ({ code, mode, example, ...props }) => (
    <CopyCode mode={mode} code={code} example={example} {...props} />
  ),
  AnimatedTabs: () => (
    <AnimatedTabs tabs={["All Posts", "Interactions", "Resources", "Docs"]} />
  ),
  Button: ({ children, variant, ...props }) => (
    <Button variant={variant} className={cn(props.className)} {...props}>
      {children}
    </Button>
  ),
  Badge: ({ children, variant, ...props }) => (
    <Badge variant={variant} className={cn(props.className)} {...props}>
      {children}
    </Badge>
  ),
  Card: ({ children, variant, ...props }) => (
    <Card variant={variant} className={cn(props.className)} {...props}>
      {children}
    </Card>
  ),
  DialogExample: () => <DialogExample />,
  AccordionExample: () => <AccordionExample />,
  TooltipExample: () => <TooltipExample />,
  CheckboxExample: () => <CheckboxExample />,
  Text: ({ children, variant, ...props }) => (
    <Text variant={variant} className={cn(props.className)} {...props}>
      {children}
    </Text>
  ),
  Spinner: ({ size, ...props }) => (
    <Spinner size={size} className={cn(props.className)} {...props} />
  ),
  DropdownMenuExample: () => <DropdownMenuExample />,
  SwitchExample: () => <SwitchExample />,
  Input: ({ ...props }) => <Input {...props} />,
  MultiStepModalExample: () => <MultiStepModalExample />,
  NavigationMenuExample: () => <NavigationMenuExample />,
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
