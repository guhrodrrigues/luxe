import Link from "next/link";

import { MoveRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "./_components/component-page/ComponentView";
import { Breadcrumbs } from "./_components/Breadcrumbs";

export default function UiPage() {
  return (
    <main className="my-2 xl:mb-24 space-y-16">
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
      <div className="grid md:grid-cols-2 gap-x-9 gap-y-12">
        {COMPONENTS.map(({ name, component, slug, colSpan }) => (
          <div
            key={name}
            className={cn("space-y-4", colSpan && `md:col-[span_2_/_span_2]`)}
          >
            <Link
              href={`/ui/${slug}`}
              className="group w-fit select-none flex items-center gap-1 text-neutral-300 hover:text-primary duration-200 hover:gap-2"
            >
              <span>{name}</span>
              <MoveRightIcon
                size={12}
                className="scale-0 duration-200 group-hover:scale-100"
              />
            </Link>
            <ComponentView>{component}</ComponentView>
          </div>
        ))}
      </div>
    </main>
  );
}
