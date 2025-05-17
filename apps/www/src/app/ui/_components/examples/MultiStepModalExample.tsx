import {
  MultiStepModal,
  MultiStepModalContent,
  MultiStepModalTrigger,
} from "@/app/_components/ui/multi-step-modal";

import { Button } from "@/app/_components/ui/button";

export function MultiStepModalExample() {
  const steps = [
    {
      title: "Luxe",
      description:
        "A library of components ready for you to copy and paste, designed to illuminate your apps with elegance, sophistication and a unique touch of style.",
    },
    {
      title: "How to use?",
      description:
        "Simply click on a component, copy the code and paste it into your project.",
    },
    {
      title: "Results",
      description:
        "Luxe will add extra shine to your application, with smooth components.",
    },
    {
      title: "Copy now",
      description:
        "Elevate your project with sophisticated, ready to use components. Illuminate up your app quickly, easily and effortlessly!",
    },
  ];

  return (
    <MultiStepModal>
      <MultiStepModalTrigger asChild>
        <Button variant="outline">Open</Button>
      </MultiStepModalTrigger>
      <MultiStepModalContent steps={steps} />
    </MultiStepModal>
  );
}
