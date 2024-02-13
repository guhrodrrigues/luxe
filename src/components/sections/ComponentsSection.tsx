import Link from "next/link";

import { MoveRightIcon } from "lucide-react";

import { COMPONENTS } from "@/data/components";

import { cn } from "@/utils/cn";

export function ComponentsSection() {
  return (
    <section className="mt-12">
      <div className="grid md:grid-cols-3 gap-6">
        {COMPONENTS.map(({ name, slug, component, colSpan }) => (
          <div
            key={name}
            className={cn(
              "relative flex justify-center items-center border border-border rounded-xl shadow-sm px-8 py-32",
              colSpan && `md:col-[span_3_/_span_3]`
            )}
          >
            <div className="absolute top-4 left-5">
              <Link
                href={`/${slug}`}
                className="flex select-none items-center gap-1 duration-300 hover:gap-2 hover:text-primary"
              >
                {name} <MoveRightIcon size={12} />
              </Link>
            </div>

            {component}
          </div>
        ))}
      </div>
    </section>
  );
}
