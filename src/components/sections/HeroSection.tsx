import { HeroGrid } from "./components/HeroGrid";
import { HeroContent } from "./components/HeroContent";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[500px]">
      <HeroGrid />
      {/* @ts-expect-error Async Server Component */}
      <HeroContent />
    </section>
  );
}
