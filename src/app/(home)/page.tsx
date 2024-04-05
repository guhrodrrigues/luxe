import { HeroSection } from "./_components/hero-section";
import { TechsSection } from "./_components/techs-section";
import { ComponentsSection } from "./_components/components-section";
import { FeedbacksSection } from "./_components/feedbacks-section/FeedbacksSection";
import { SloganSection } from "./_components/slogan-section";

export default function Home() {
  return (
    <main className="mt-20 mb-10 md:mb-40">
      <HeroSection />
      <TechsSection />
      <ComponentsSection />
      <FeedbacksSection />
      <SloganSection />
    </main>
  );
}
