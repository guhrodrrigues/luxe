import { ComponentsList } from "@/components/component-page/ComponentsList";

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <>
      <ComponentsList />
      <div className="xl:pl-[250px]">{children}</div>
    </>
  );
}
