import { Link } from "next-view-transitions";

import { GET_STARTED } from "@/data/get-started";
import { COMPONENTS } from "@/data/components";

import { SidebarButton } from "./SidebarButton";
import { Icons } from "@/app/_components/Icons";
import { ToggleTheme } from "./ToggleTheme";

export function Sidebar() {
  const orderedComponents = COMPONENTS.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <aside className="right-dotted fixed bottom-0 left-0 top-0 h-screen w-[250px] flex-1 bg-main pt-7 max-lg:hidden">
      <div className="-mx-0.5 flex items-center justify-between px-6 pb-[14px]">
        <Link href="/">
          <Icons.logo className="w-16" />
        </Link>
        <div className="flex items-center gap-2.5">
          <ToggleTheme />
          <a
            href="https://github.com/guhrodrrigues/luxe"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Icons.github className="h-3.5 w-3.5 text-neutral-400 duration-150 group-hover:text-primary dark:text-neutral-600" />
          </a>
        </div>
      </div>
      <nav
        className="h-full overflow-y-auto px-6 pb-10 pt-[20px] [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage:
            "linear-gradient(#0c0c0c,#0c0c0c,transparent 0,#0c0c0c 24px,#0c0c0c calc(100% - 60px),transparent)",
        }}
      >
        <div className="flex flex-col gap-1">
          <span className="-ml-0.5 text-xs font-medium text-foreground">
            Get Started
          </span>
          <div className="flex flex-col">
            {GET_STARTED.map((component) => (
              <SidebarButton
                key={component.slug}
                name={component.name}
                slug={component.slug}
              />
            ))}
          </div>
        </div>
        <div aria-hidden className="top-dotted mx-1 mb-6 mt-4 h-px" />
        <div className="flex flex-col gap-1">
          <span className="relative z-[1] -ml-0.5 text-xs font-medium text-foreground">
            Components
          </span>
          <div className="flex flex-col pb-8">
            {orderedComponents.map((component) => (
              <SidebarButton
                key={component.name}
                name={component.name}
                slug={`/ui/${component.slug}`}
                isNew={component.isNew}
                isUpdated={component.isUpdated}
              />
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
