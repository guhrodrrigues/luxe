import { Link } from 'next-view-transitions'

import { ChevronRightIcon } from 'lucide-react'

import { TextAnimateEnter } from '@/app/_components/TextAnimateEnter'
import { AnimateEnter } from '../AnimateEnter'
import { ComponentsExample } from './ComponentsExample'

export function ComponentsSection() {
  return (
    <section className="mt-56 flex flex-col items-center justify-center gap-20">
      <AnimateEnter className="space-y-6 text-center">
        <h1 className="text-gradient mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          Elevate your web apps with sophisticated components
        </h1>
        <p className="mx-auto max-w-lg text-neutral-600 dark:text-neutral-300">
          Simply click on a component, copy the code and paste it into your
          project. This will give your application an extra shine.
        </p>
      </AnimateEnter>
      <ComponentsExample />
      <AnimateEnter delay={0.3}>
        <Button />
      </AnimateEnter>
    </section>
  )
}

function Button() {
  return (
    <Link
      href="/ui"
      className="group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-black/80 px-4 py-2.5 text-sm font-semibold text-white duration-300 hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white"
    >
      <span>Explore All Components</span>
      <ChevronIconGlitch />
      <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
        <div className="relative h-full w-8 bg-white/20 blur dark:bg-white/40" />
      </div>
    </Link>
  )
}

function ChevronIconGlitch() {
  return (
    <div className="relative overflow-hidden font-medium">
      <span className="invisible">
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 text-white transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-full dark:text-black">
        <ChevronRightIcon size={14} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full text-white transition-transform duration-300 ease-in-out hover:duration-150 group-hover:translate-x-0 dark:text-black">
        <ChevronRightIcon size={14} />
      </span>
    </div>
  )
}
