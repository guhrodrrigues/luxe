import { AnimateEnter } from "../AnimateEnter";
import { TextAnimateEnter } from "@/app/_components/TextAnimateEnter";

export function ComponentsDescription() {
  return (
    <AnimateEnter className="space-y-5 text-center">
      <h1 className="text-gradient mx-auto max-w-2xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Elevate your project with sophisticated components
      </h1>
      <TextAnimateEnter
        text={`Simply click on a component, copy the code and paste it into your project. This will give your application an extra shine.`}
        containerClassName="max-w-lg mx-auto"
        initialDelay={0.1}
        duration={0.6}
      />
    </AnimateEnter>
  );
}
