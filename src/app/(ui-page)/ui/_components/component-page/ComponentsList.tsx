import { GET_STARTED } from "@/data/get-started";
import { COMPONENTS } from "@/data/components";

import { ComponentsListButton } from "./ComponentsListButton";

export function ComponentsList() {
  const componentsOrdered = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <aside className="max-lg:hidden lg:sticky top-14 bottom-0 flex-1 lg:h-[calc(100vh_-_3rem)] max-lg:pt-12">
      <nav
        className="overflow-y-auto h-full pt-8 max-lg:hidden"
        style={{
          maskImage:
            "linear-gradient(#0d0d0d,#0d0d0d,transparent 0,#0d0d0d 40px,#0d0d0d calc(100% - 60px),transparent)",
        }}
      >
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-primary font-medium text-sm px-6">
            Get Started
          </span>
          <div className="flex flex-col px-3">
            {GET_STARTED.map((component) => (
              <ComponentsListButton
                key={component.slug}
                name={component.name}
                slug={component.slug}
                isNew={component.isNew}
              />
            ))}
          </div>
        </div>
        <ul className="flex flex-col">
          <span className="relative z-[1] px-6 text-primary font-medium text-sm mb-3">
            Components
          </span>
          <div className="flex flex-col pb-12 px-3">
            {componentsOrdered.map((component) => (
              <ComponentsListButton
                key={component.name}
                name={component.name}
                slug={`/ui/${component.slug}`}
              />
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
}
