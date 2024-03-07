import { ExampleCode } from "./ExampleCode";
import { ComponentsDescription } from "./ComponentsDescription";

export function ComponentsSection() {
  return (
    <section className="mt-56 flex flex-col items-center justify-center gap-16">
      <ComponentsDescription />
      {/* @ts-expect-error Async Server Component */}
      <ExampleCode />
    </section>
  );
}
