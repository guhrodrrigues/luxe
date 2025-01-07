import Link from "next/link";

import { cn } from "@/utils/cn";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "./_components/ComponentView";
import { Breadcrumbs } from "./_components/Breadcrumbs";
import { Pagination } from "./_components/Pagination";

export default function UiPage() {
  return (
    <main className="my-2 space-y-10 xl:mb-24">
      <div className="space-y-4">
        <Breadcrumbs groupName="Get Started" currentPage="Browse Components" />
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            Browse Components
          </h1>
          <p className="text-[16px] font-normal leading-relaxed text-primary/80">
            Navigate to all the components that will make your application
            sophisticated and luxurious.
          </p>
        </div>
      </div>
      <div className="grid gap-x-9 gap-y-12 md:grid-cols-2">
        {COMPONENTS.map(
          ({
            name,
            component,
            slug,
            colSpan,
            isReloadAnimation,
            className,
          }) => (
            <div
              key={name}
              className={cn(
                "flex min-w-0 flex-grow flex-col gap-4",
                colSpan && "md:col-span-2",
              )}
            >
              <Link
                href={`/ui/${slug}`}
                className="flex w-fit select-none items-center gap-1 text-neutral-300 duration-200 hover:text-primary"
              >
                {name}
              </Link>
              <ComponentView
                isReloadAnimation={isReloadAnimation}
                className={cn(className)}
              >
                {component}
              </ComponentView>
            </div>
          ),
        )}
      </div>
      <Pagination back={{ href: "/ui/add-utilities", name: "Add Utilities" }} />
    </main>
  );
}
