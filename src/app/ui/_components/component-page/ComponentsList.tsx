import { GET_STARTED } from "@/data/get-started";
import { COMPONENTS } from "@/data/components";

import { ComponentsListButton } from "./ComponentsListButton";

export function ComponentsList() {
  const orderedComponents = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <aside className="bottom-0 top-14 h-[calc(100vh_-_3rem)] flex-1 border-r border-dashed border-neutral-800/40 max-lg:hidden max-lg:pt-12 lg:sticky">
      <nav
        className="h-full overflow-y-auto px-6 pt-8 [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(#0d0d0d,#0d0d0d,transparent 0,#0d0d0d 40px,#0d0d0d calc(100% - 60px),transparent)",
        }}
      >
        <div className="mb-8 flex flex-col gap-1.5">
          <span className="text-xs font-medium text-neutral-500">
            Get Started
          </span>
          <div className="flex flex-col">
            {GET_STARTED.map((component) => (
              <ComponentsListButton
                key={component.slug}
                name={component.name}
                slug={component.slug}
              />
            ))}
          </div>
        </div>
        <ul className="flex flex-col gap-1.5">
          <span className="relative z-[1] text-xs font-medium text-neutral-500">
            Components
          </span>
          <div className="flex flex-col pb-12">
            {orderedComponents.map((component) => (
              <ComponentsListButton
                key={component.name}
                name={component.name}
                slug={`/ui/${component.slug}`}
                isNew={component.isNew}
                isUpdated={component.isUpdated}
              />
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
}
