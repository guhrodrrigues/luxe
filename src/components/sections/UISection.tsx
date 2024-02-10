import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { ui } from "@/data/ui";
import { cn } from "@/utils/cn";

export function UISection() {
  return (
    <section className="mt-12">
      <div className="grid md:grid-cols-3 gap-6">
        {ui.map(({ name, component, colSpan }) => (
          <div
            key={name}
            className={cn(
              "relative flex justify-center items-center border border-border rounded-xl shadow-sm px-8 py-32",
              colSpan && `md:col-[span_3_/_span_3]`
            )}
          >
            <div>
              <Link
                href="/"
                className="absolute top-4 left-5 duration-300 hover:text-secondary"
              >
                <span>{name}</span>
              </Link>
              <Link
                href="/"
                className="absolute top-4 right-5 duration-300 hover:text-secondary"
              >
                <ArrowRight size={16} />
              </Link>
            </div>

            {component}
          </div>
        ))}
      </div>
    </section>
  );
}
