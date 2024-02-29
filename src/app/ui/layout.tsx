import { ComponentsList } from "@/components/component-page/ComponentsList";
import { CommandMenu } from "@/components/command-menu";
import { CommandMenuProvider } from "./_context/CommandMenuProvider";

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <CommandMenuProvider>
      <ComponentsList />
      <div className="xl:pl-[300px]">{children}</div>
      <CommandMenu />
    </CommandMenuProvider>
  );
}
