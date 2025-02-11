import { Footer } from '../_components/Footer'
import { FloatToggleTheme } from './_components/FloatToggleTheme'
import { ComponentsSection } from './_components/components-section'
import { FeedbacksSection } from './_components/feedbacks-section/FeedbacksSection'
import { HeroSection } from './_components/hero-section'
import { SloganSection } from './_components/slogan-section'
import { TechsSection } from './_components/techs-section'

export default function Home() {
  return (
    <main className="mt-20">
      <FloatToggleTheme />
      <div className="mx-auto w-full max-w-7xl px-4">
        <HeroSection />
        <TechsSection />
        <ComponentsSection />
        <FeedbacksSection />
        <SloganSection />
      </div>
      <Footer />
    </main>
  )
}
