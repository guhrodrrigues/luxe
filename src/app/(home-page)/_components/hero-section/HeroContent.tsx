import Link from "next/link";
import Image from "next/image";

import { AnimateEnter } from "../AnimateEnter";

import slogan from "@/assets/slogan.png";
import { Icons } from "@/app/_components/Icons";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

async function getRepoStarCount() {
  const res = await fetch("https://api.github.com/repos/guhrodrrigues/luxe");
  const data = await res.json();
  const starCount = data.stargazers_count;

  if (starCount > 999) {
    return (starCount / 1000).toFixed(1) + "K";
  }

  return starCount;
}

export async function HeroContent() {
  const starCount = await getRepoStarCount();

  return (
    <div className="z-[3] flex flex-col items-center gap-5 text-center">
      <AnimateEnter>
        <Image src={slogan} alt="Luxe's slogan" width={100} height={100} />
      </AnimateEnter>
      <AnimateEnter delay={0.1}>
        <p className="font-normal text-primary/80 max-w-md mx-auto">
          Library of components copy and paste to illuminate your applications
          with elegance and sophistication.
        </p>
      </AnimateEnter>
      <AnimateEnter
        className="flex flex-wrap items-center justify-center gap-2"
        delay={0.2}
      >
        <GetStartedButton />
        <a
          href="https://github.com/guhrodrrigues/luxe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold bg-background border border-border text-secondary text-sm rounded-xl px-4 py-2 duration-300 hover:bg-neutral-900"
        >
          <Icons.github className="h-3.5 w-3.5" />
          <AnimatedNumber value={starCount} />
        </a>
      </AnimateEnter>
    </div>
  );
}

function GetStartedButton() {
  return (
    <Link
      href="/ui/installation"
      className="group relative inline-flex items-center gap-1 text-sm py-2 px-4 font-semibold bg-primary/80 text-black rounded-xl duration-300 overflow-hidden"
    >
      <TextGlitch text="Get Started" />
      <div className="absolute inset-0 flex h-full w-full justify-center animate-brightness">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible font-mono">{text}</span>
      <span className="font-semibold font-mono absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
      </span>
      <span className="font-semibold font-mono absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
      </span>
    </div>
  );
}
