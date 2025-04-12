"use client";

import { useCallback, useEffect, useState } from "react";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

type Heading = {
  id: string;
  text: string;
  level: string;
};

export function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(
    new Set(),
  );

  const getHeadings = useCallback(() => {
    const headingElement = document.querySelectorAll("h1, h2, h3");

    return Array.from(headingElement)
      .filter((heading) => heading.id)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase(),
        top: (heading as HTMLElement).offsetTop,
      }));
  }, []);

  useEffect(() => {
    const collectedHeadings = getHeadings();

    setHeadings(collectedHeadings);

    const observerOptions = {
      root: null,
      threshold: 0,
    };

    function handleIntersection(entries: IntersectionObserverEntry[]) {
      const visibleSet = new Set(visibleHeadings);

      for (const entry of entries) {
        const headingId = entry.target.id;

        if (entry.isIntersecting) {
          visibleSet.add(headingId);
        } else {
          visibleSet.delete(headingId);
        }
      }

      setVisibleHeadings(new Set(visibleSet));
    }

    const observer = new IntersectionObserver(handleIntersection, {
      ...observerOptions,
    });

    for (const heading of collectedHeadings) {
      const el = document.getElementById(heading.id);

      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [getHeadings, visibleHeadings]);

  function handleScroll(id: string) {
    for (const heading of Array.from(document.querySelectorAll("h1,h2,h3"))) {
      heading.setAttribute("data-highlight", "false");
    }

    const element = document.getElementById(id);

    if (element) {
      const top = element.offsetTop - 100;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      element.setAttribute("data-highlight", "true");

      setTimeout(() => {
        element.setAttribute("data-highlight", "false");
      }, 2000);
    }
  }

  return (
    <motion.aside
      className="top-20 hidden xl:block sticky h-fit space-y-3 pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {headings.length > 0 && (
        <span className="block text-sm pb-1 text-neutral-500 dark:text-neutral-300 dark:text font-[460]">
          On This Page
        </span>
      )}
      <div className="flex flex-col">
        {headings.map(({ id, text, level }) => (
          <div key={id}>
            <button
              onClick={() => handleScroll(id)}
              className={cn(
                "mt-0 ml-2 font-medium text-sm border-l border-neutral-300 dark:border-neutral-800 py-1 text-left text-neutral-500",
                visibleHeadings.has(id)
                  ? "text-primary !border-primary"
                  : "duration-300 ease-in-out hover:text-primary",
                {
                  "pl-4": level === "h1",
                  "pl-6": level === "h2",
                  "pl-7": level === "h3",
                },
              )}
              data-active={visibleHeadings.has(id) ? "true" : "false"}
            >
              {text}
            </button>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
