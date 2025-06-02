"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

type CardProps = {
  slug: string;
  icon: JSX.Element;
  name: string;
};

export function Card({ slug, icon, name }: CardProps) {
  return (
    <Link
      href={`/ui/installation/${slug}`}
      className="group relative min-h-[200px] w-full max-w-[500px] rounded-xl border border-black/10 bg-background px-7 pb-7 pt-10 duration-200 hover:bg-neutral-200 dark:border-white/10 dark:hover:bg-neutral-900"
    >
      <div
        aria-hidden
        className="absolute overflow-hidden inset-0 -top-1.5 -z-[1] mx-auto h-full w-[97%] rounded-[inherit] border border-black/10 bg-background duration-200 group-hover:bg-neutral-200 dark:border-white/10 dark:group-hover:bg-neutral-900"
      />
      <div
        aria-hidden
        className="absolute overflow-hidden inset-0 -top-3 -z-[2] mx-auto h-full w-[90%] rounded-[inherit] border border-black/10 bg-background duration-200 group-hover:bg-neutral-200 dark:border-white/10 dark:group-hover:bg-neutral-900"
      />
      <div className="relative space-y-4">
        <div className="relative flex items-center justify-center">
          <Illustration icon={icon} />
        </div>
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold -tracking-wide text-primary">
            {name}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export const Illustration = ({ icon }: { icon: JSX.Element }) => {
  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const stars = 108;
  const columns = 18;

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars),
      );

      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative grid h-44 w-full gap-px p-1"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      <div className="absolute inset-0 z-40 flex h-full w-full items-center justify-center">
        {icon}
      </div>
      {[...Array(stars)].map((_, index) => {
        const isGlowing = glowingStars.includes(index);
        const startDelay = index * 0.01;
        const glowDelay = (index % 10) * 0.1;

        return (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            <Star isGlowing={isGlowing} delay={startDelay} />
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={glowDelay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

type StarProps = {
  isGlowing: boolean;
  delay: number;
};

function Star({ isGlowing, delay }: StarProps) {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "var(--primary)" : "#777",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className="relative z-20 h-[1px] w-[1px] rounded-full bg-[#777]"
    />
  );
}

type GlowProps = {
  delay: number;
};

function Glow({ delay }: GlowProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-white/50 shadow-2xl shadow-white/10 blur-[1px]"
    />
  );
}
