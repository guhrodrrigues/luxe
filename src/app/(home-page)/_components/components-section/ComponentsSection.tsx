import { ExampleCode } from "./ExampleCode";
import { ComponentsDescription } from "./ComponentsDescription";

export function ComponentsSection() {
  return (
    <section className="mt-56 flex flex-col gap-12">
      <ComponentsDescription />
      <ExampleCode />
    </section>
  );
}
