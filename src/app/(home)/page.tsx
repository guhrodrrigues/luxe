import { HeroSection } from "./_components/hero-section";
import { ComponentsSection } from "./_components/components-section";
import { TechsSection } from "./_components/techs-section";
import { SloganSection } from "./_components/slogan-section";

export default function Home() {
  return (
    <main className="mt-20 mb-10 md:mb-40">
      <HeroSection />
      <TechsSection />
      <ComponentsSection />
      <SloganSection />
    </main>
  );
}
