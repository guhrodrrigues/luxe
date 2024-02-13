import ComponentsList from "@/components/component-page/ComponentsList";

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <div className="w-full">
      <ComponentsList />
      <div className="pl-0 md:pl-[250px]">{children}</div>
    </div>
  );
}
