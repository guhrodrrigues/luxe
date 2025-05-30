"use client";

import { useCallback, useEffect, useState } from "react";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  const getHeadings = useCallback(() => {
    const headingElement = document.querySelectorAll("h1, h2, h3");

    return Array.from(headingElement)
      .filter((heading) => {
        const isInDialog = heading.closest('[role="dialog"]');
				
        return heading.id && !isInDialog;
      })
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
  }, [getHeadings, visibleHeadings, pathname]);

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
      className="top-20 hidden xl:block sticky h-fit space-y-3 pt-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-col">
        {headings.map(({ id, text, level }) => {
          const isActive = visibleHeadings.has(id);

          return (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              data-active={isActive ? "true" : "false"}
              className={cn(
                "mt-0 ml-2 font-medium text-sm border-l border-neutral-300 dark:border-neutral-800 py-1 text-left text-neutral-500",
                isActive
                  ? "text-primary !border-primary"
                  : "duration-300 ease-in-out hover:text-primary",
                level === "h2" && "pl-4",
                level === "h3" && "pl-6",
              )}
            >
              {text}
            </button>
          );
        })}
      </div>
    </motion.aside>
  );
}
