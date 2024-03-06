import { HeroContent } from "./HeroContent";
import { Spotlight } from "./Spotlight";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative min-h-[300px] [@media(min-height:793px)]:min-h-[600px]">
      <Spotlight />
      <TopBlur />
      {/* @ts-expect-error Async Server Component */}
      <HeroContent />
    </section>
  );
}

function TopBlur() {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-[1] w-full backdrop-blur-[1px] will-change-transform h-[60px]"
      style={{
        background: "linear-gradient(to top,transparent,rgb(10,10,10))",
        maskImage: "linear-gradient(to bottom,rgb(10,10,10) 25%,transparent)",
      }}
    />
  );
}
