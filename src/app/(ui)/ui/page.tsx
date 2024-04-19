import Link from "next/link";

import { MoveLeft, MoveRightIcon } from "lucide-react";

import { cn } from "@/utils/cn";

import { COMPONENTS } from "@/data/components";

import { ComponentView } from "./_components/component-page/ComponentView";

export default function UiPage() {
  return (
    <main className="my-2 xl:my-24 space-y-16">
      <section className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex select-none items-center text-sm gap-1 text-secondary w-fit"
        >
          <MoveLeft size={14} />
          Back to home
        </Link>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-neutral-300">
            Browse Components
          </h1>
          <p className="max-w-lg">
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
              className="w-fit select-none flex items-center gap-1 text-secondary duration-300 hover:gap-2 hover:text-primary"
            >
              <span>{name}</span>
              <MoveRightIcon size={12} />
            </Link>
            <ComponentView>{component}</ComponentView>
          </div>
        ))}
      </div>
    </main>
  );
}
