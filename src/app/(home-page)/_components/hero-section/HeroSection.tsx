import { HeroContent } from "./HeroContent";
import { Spotlight } from "./Spotlight";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative min-h-[500px] [@media(min-height:793px)]:min-h-[600px]">
      <Spotlight />
      {/* @ts-expect-error Async Server Component */}
      <HeroContent />
    </section>
  );
}
