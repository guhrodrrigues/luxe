"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type Heading = { id: string; text: string; level: string };

const PAGE_TITLE_ID = "page-title";
const MAX_RETRIES = 20;
const RETRY_DELAY = 100;

export function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(
    new Set(),
  );
  const [showPageTitle, setShowPageTitle] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const pathname = usePathname();
  const pageTitleObserverRef = useRef<IntersectionObserver | null>(null);
  const manualClickRef = useRef<string | null>(null);
  const manualClickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const retryCountRef = useRef(0);

  const getHeadings = useCallback(() => {
    return Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter(
        (el) =>
          el.id && !el.closest('[role="dialog"]') && el.id !== PAGE_TITLE_ID,
      )
      .map((el) => ({
        id: el.id,
        text: el.textContent?.trim() ?? "",
        level: el.tagName.toLowerCase(),
      }));
  }, []);

  useEffect(() => {
    retryCountRef.current = 0;

    let headingObserver: IntersectionObserver | null = null;

    function setupHeadingObserver(collectedHeadings: Heading[]) {
      headingObserver?.disconnect();

      const manualId = () => manualClickRef.current;
      const lastId = collectedHeadings[collectedHeadings.length - 1]?.id;

      headingObserver = new IntersectionObserver(
        (entries) => {
          setVisibleHeadings((prev) => {
            const next = new Set(prev);

            for (const entry of entries) {
              const id = entry.target.id;

              if (entry.isIntersecting) next.add(id);
              else if (id !== manualId()) next.delete(id);
            }

            if (next.size === 0 && lastId) next.add(lastId);

            return next;
          });
        },
        { root: null, threshold: 0 },
      );

      for (const h of collectedHeadings) {
        const el = document.getElementById(h.id);

        if (el) headingObserver!.observe(el);
      }
    }

    function run() {
      const titleEl = document.getElementById(PAGE_TITLE_ID);
      const collected = getHeadings();

      setHeadings(collected);
      setupHeadingObserver(collected);

      if (!titleEl) {
        if (retryCountRef.current < MAX_RETRIES) {
          retryCountRef.current += 1;
          retryTimeoutRef.current = setTimeout(run, RETRY_DELAY);
        } else {
          setPageTitle("");
        }

        return;
      }

      setPageTitle(titleEl.textContent?.trim() ?? "");

      pageTitleObserverRef.current?.disconnect();
      pageTitleObserverRef.current = new IntersectionObserver(
        (entries) => {
          for (const e of entries) setShowPageTitle(!e.isIntersecting);
        },
        { threshold: 0 },
      );
      pageTitleObserverRef.current.observe(titleEl);
    }

    retryTimeoutRef.current = setTimeout(run, RETRY_DELAY);

    return () => {
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);

      pageTitleObserverRef.current?.disconnect();
      pageTitleObserverRef.current = null;
      headingObserver?.disconnect();
    };
  }, [getHeadings, pathname]);

  function handleScroll(id: string) {
    manualClickTimeoutRef.current &&
      clearTimeout(manualClickTimeoutRef.current);
    manualClickRef.current = id;

    setVisibleHeadings((prev) => new Set(prev).add(id));

    const el = document.getElementById(id);

    if (el) {
      document
        .querySelectorAll("h1, h2, h3")
        .forEach((h) => h.setAttribute("data-highlight", "false"));
      el.setAttribute("data-highlight", "true");

      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });

      setTimeout(() => el.setAttribute("data-highlight", "false"), 2000);
    }

    manualClickTimeoutRef.current = setTimeout(() => {
      manualClickRef.current = null;
      manualClickTimeoutRef.current = null;
    }, 1000);
  }

  return (
    headings.length > 0 && (
      <motion.aside
        className="sticky top-20 hidden h-fit space-y-3 pt-3 xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex flex-col">
          {pageTitle && (
            <motion.button
              type="button"
              className={cn(
                "mb-2 text-left font-medium text-sm transition-colors duration-200",
                "text-foreground hover:text-primary dark:hover:text-primary",
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: showPageTitle ? 1 : 0 }}
              transition={{ ease: "easeOut", duration: 0.15 }}
              style={{ pointerEvents: showPageTitle ? "auto" : "none" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {pageTitle}
            </motion.button>
          )}
          {headings.map(({ id, text, level }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleScroll(id)}
              data-active={visibleHeadings.has(id) ? "true" : "false"}
              className={cn(
                "mt-0 py-1 text-left font-medium text-foreground text-sm",
                visibleHeadings.has(id)
                  ? "text-primary"
                  : "duration-300 ease-in-out hover:text-primary",
                level === "h3" && "pl-3",
              )}
            >
              {text}
            </button>
          ))}
        </div>
      </motion.aside>
    )
  );
}
