import { HeroContent } from "./HeroContent";
import { Spotlight } from "./Spotlight";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90dvh] sm:min-h-[100dvh] flex-col items-center justify-center">
      <Spotlight />
      <HeroContent />
    </section>
  );
}
