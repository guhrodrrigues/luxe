import Link from "next/link";

import { MoveRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "./_components/component-page/ComponentView";
import { RequestComponentButton } from "@/app/_components/RequestComponentButton";

export default function UiPage() {
  return (
    <main className="my-2 xl:my-24 space-y-16">
      <section className="flex flex-col gap-6">
        <RequestComponentButton />
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-primary">
            Browse Components
          </h1>
          <p className="max-w-lg font-normal text-primary opacity-70">
            Navigate to all the components that will make your application
            sophisticated and luxurious.
          </p>
        </div>
      </section>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
        {COMPONENTS.map(({ name, component, slug, colSpan }) => (
          <div
            key={name}
            className={cn("space-y-3", colSpan && `md:col-[span_3_/_span_3]`)}
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
