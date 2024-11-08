import { HeroSection } from "./_components/hero-section";
import { TechsSection } from "./_components/techs-section";
import { ComponentsSection } from "./_components/components-section";
import { FeedbacksSection } from "./_components/feedbacks-section/FeedbacksSection";
import { SloganSection } from "./_components/slogan-section";
import { Footer } from "../_components/Footer";

export default function Home() {
  return (
    <main className="mt-20">
      <div className="px-4 mx-auto max-w-7xl w-full">
        <HeroSection />
        <TechsSection />
        <ComponentsSection />
        <FeedbacksSection />
        <SloganSection />
      </div>
      <Footer />
    </main>
  );
}
