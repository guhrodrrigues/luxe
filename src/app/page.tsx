import { HeroSection } from "@/components/sections/HeroSection";
import { ComponentsSection } from "@/components/sections/ComponentsSection";

export default function Home() {
  return (
    <main className="my-20">
      <HeroSection />
      <ComponentsSection />
    </main>
  );
}
