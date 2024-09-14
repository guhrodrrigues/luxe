import { AnimateEnter } from "../AnimateEnter";

export function ComponentsDescription() {
  return (
    <AnimateEnter className="space-y-5 text-center">
      <h1 className="max-w-2xl mx-auto text-4xl md:text-5xl font-display leading-tight font-semibold text-gradient">
        Elevate your project with sophisticated components
      </h1>
      <p className="max-w-lg mx-auto font-normal text-primary/80 leading-relaxed">
        Simply click on a component, copy the code and paste it into your
        project. This will give your application an extra shine.
      </p>
    </AnimateEnter>
  );
}
