import { TextAnimateEnter } from "@/app/_components/TextAnimateEnter";

export function TechsDescription() {
  return (
    <TextAnimateEnter
      text={`Various technologies used to build beautiful interfaces, fluid animations and easy access.`}
      className="text-neutral-300"
      containerClassName="text-center max-w-md mx-auto px-3 leading-relaxed"
      initialDelay={0.5}
      duration={0.6}
    />
  );
}
