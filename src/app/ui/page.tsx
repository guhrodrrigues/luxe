import Link from "next/link";

import { MoveRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "./_components/component-page/ComponentView";
import { Breadcrumbs } from "./_components/Breadcrumbs";

export default function UiPage() {
  return (
    <main className="my-2 space-y-16 xl:mb-24">
      <div className="space-y-6">
        <Breadcrumbs groupName="Get Started" currentPage="Browse Components" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-primary">
            Browse Components
          </h1>
          <p className="max-w-lg font-normal text-primary/80">
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
                className="group flex w-fit select-none items-center gap-1 text-neutral-300 duration-200 hover:gap-2 hover:text-primary"
              >
                <span>{name}</span>
                <MoveRightIcon
                  size={12}
                  className="scale-0 duration-200 group-hover:scale-100"
                />
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
    </main>
  );
}
