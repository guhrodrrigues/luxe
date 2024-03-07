import { Grid } from "@/app/_components/Grid";
import { AnimateEnter } from "../AnimateEnter";

import { TypewriterTitle } from "./TypewriterTitle";
import { Button } from "./Button";

export function SloganSection() {
  return (
    <section className="flex items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[500px] mt-6 md:mt-44">
      <Grid />
      <AnimateEnter className="flex flex-col gap-4 items-center" delay={0.4}>
        <TypewriterTitle />
        <Button />
      </AnimateEnter>
    </section>
  );
}
