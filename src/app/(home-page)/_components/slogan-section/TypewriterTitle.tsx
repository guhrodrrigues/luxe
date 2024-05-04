"use client";

import { useEffect } from "react";

import { motion, stagger, useAnimate, useInView } from "framer-motion";

const words = [
  {
    text: "Illuminate",
  },
  {
    text: "your",
  },
  {
    text: "applications.",
  },
];

export function TypewriterTitle() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  function renderWords() {
    return (
      <>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span key={`char-${index}`} className="text-neutral-300">
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div className="flex gap-x-1">
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
        viewport={{ once: true }}
      >
        <div className="max-[400px]:text-xl text-2xl lg:text-5xl font-bold whitespace-nowrap">
          {renderWords()}
        </div>
      </motion.div>
      <Cursor />
    </div>
  );
}

function Cursor() {
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="block rounded-sm w-[4px] h-8 lg:h-12 bg-neutral-500"
    />
  );
}
