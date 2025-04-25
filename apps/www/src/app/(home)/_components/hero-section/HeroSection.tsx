import { HeroContent } from "./HeroContent";
import { Spotlight } from "./Spotlight";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center">
      <Spotlight />
      <HeroContent />
    </section>
  );
}
