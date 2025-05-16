import { cn } from "@/utils/cn";
import { SidebarButton } from "./SidebarButton";

import { GET_STARTED } from "@/data/get-started";
import { getComponents } from "@/utils/get-components";

export function Sidebar() {
  return (
    <aside className="sticky w-full block shrink-0 top-16 h-[calc(100vh-3.5rem)] max-md:hidden right-dotted">
      <nav className="flex flex-col h-full gap-6 overflow-y-auto py-8 px-6 no-scrollbar">
        <div className="flex flex-col gap-1">
          <span className="-ml-0.5 text-sm font-[460] text-foreground">
            Get Started
          </span>
          <div className="flex flex-col">
            {GET_STARTED.map((component) => (
              <SidebarButton
                key={component.slug}
                name={component.name}
                slug={component.slug}
                isNew={component.isNew}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="relative z-[1] -ml-0.5 text-sm font-[460] text-foreground">
              Components
            </span>
            <div
              className={cn(
                "w-[30px] h-4 font-medium bg-yellow-400/30 dark:bg-[#eaec8a]/16 rounded-full text-[10px]",
                "leading-[150%] text-center mr-2.5 text-yellow-600 dark:text-[#eaec8a] [text-shadow:0_1px_1.5px_rgb(0,0,0,0.16)]",
              )}
            >
              New
            </div>
          </div>
          <div className="flex flex-col pb-8">
            {getComponents.map((component) => (
              <SidebarButton
                key={component.title}
                name={component.title}
                slug={`/ui/${component.slug}`}
              />
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
