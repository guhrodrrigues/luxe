import { Grid } from "@/app/_components/Grid";
import { HeroContent } from "./HeroContent";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[600px]">
      <Grid />
      {/* @ts-expect-error Async Server Component */}
      <HeroContent />
    </section>
  );
}
