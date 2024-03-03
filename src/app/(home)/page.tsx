import { HeroSection } from "./_components/hero-section";
import { ComponentsSection } from "./_components/components-section";
import { TechsSection } from "./_components/techs-section";

export default function Home() {
  return (
    <main className="mt-20 mb-40">
      <HeroSection />
      <TechsSection />
      <ComponentsSection />
    </main>
  );
}
