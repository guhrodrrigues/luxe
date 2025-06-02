import { BlurBackground } from "./_components/BlurBackground";
import { ComponentsSection } from "./_components/components-section";
import { FeedbacksSection } from "./_components/feedbacks-section/FeedbacksSection";
import { HeroSection } from "./_components/hero-section";
import { SloganSection } from "./_components/slogan-section";
import { Footer } from "../_components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mt-20 relative">
        <div className="mx-auto w-full max-w-7xl px-4">
          <HeroSection />
          <ComponentsSection />
          <FeedbacksSection />
          <SloganSection />
        </div>
        <Footer />
      </div>
      <BlurBackground />
    </main>
  );
}
