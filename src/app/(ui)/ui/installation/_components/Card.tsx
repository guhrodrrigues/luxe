"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

type CardProps = {
  slug: string;
  icon: JSX.Element;
  name: string;
  description: string;
};

export function Card({ slug, icon, name, description }: CardProps) {
  return (
    <Link
      href={`/ui/installation/${slug}`}
      className="group relative w-full border border-white/10 px-7 pt-10 pb-7 min-h-[300px] rounded-xl bg-neutral-950 duration-200 hover:bg-neutral-900"
    >
      <GradientLine />
      <div
        aria-hidden
        className="bg-neutral-950 border-white/10 border absolute h-full w-[97%] mx-auto inset-0 -top-1.5 rounded-[inherit] duration-200 -z-[1] group-hover:bg-neutral-900"
      >
        <GradientLine />
      </div>
      <div
        aria-hidden
        className="bg-neutral-950 border-white/10 border absolute h-full w-[94%] mx-auto inset-0 -top-3 rounded-[inherit] duration-200 -z-[2] group-hover:bg-neutral-900"
      >
        <GradientLine />
      </div>
      <div className="space-y-6">
        <div className="flex justify-center items-center">
          <Illustration icon={icon} />
        </div>
        <div className="space-y-1.5">
          <h1 className="text-3xl font-semibold text-primary">{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

function GradientLine() {
  return (
    <div className="absolute right-5 -top-px h-px w-80 bg-gradient-to-l from-transparent via-white/20 via-10% to-transparent" />
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
        Math.floor(Math.random() * stars)
      );

      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-48 p-1 w-full grid gap-px"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-40">
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
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className="bg-[#666] h-[1px] w-[1px] rounded-full relative z-20"
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
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-white/50 blur-[1px] shadow-2xl shadow-white/10"
    />
  );
}
