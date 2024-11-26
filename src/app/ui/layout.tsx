import { Metadata } from "next";

import { ComponentsList } from "./_components/component-page/ComponentsList";
import { AnimateEnter } from "@/app/(home)/_components/AnimateEnter";
import { Header } from "@/app/ui/_components/Header";
import { CommandMenu } from "@/app/_components/command-menu";
import { CommandMenuProvider } from "@/app/_components/command-menu/_context/CommandMenuProvider";

export const metadata: Metadata = {
  title: {
    default: "Browse Components",
    template: "%s · Luxe",
  },
  description:
    "Navigate to all the components that will make your application sophisticated and luxurious.",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-browse-components.png",
        alt: "Luxe's website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe — Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and luxurious.",
    type: "website",
    url: "https://luxeui.com/ui",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-browse-components.png",
        alt: "Luxe's website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe — Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and luxurious.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

type ComponentPageLayout = {
  children: React.ReactNode;
};

export default function ComponentPageLayout({ children }: ComponentPageLayout) {
  return (
    <CommandMenuProvider>
      <Header />
      <div className="mx-auto flex w-full max-w-[1400px] border-dashed max-lg:mb-14 max-lg:flex-col max-lg:gap-12 xl:border-x xl:border-neutral-800/40">
        <AnimateEnter
          delay={0.2}
          duration={0.3}
          className="flex-shrink-0 lg:w-[270px]"
        >
          <ComponentsList />
        </AnimateEnter>
        <AnimateEnter
          delay={0.2}
          duration={0.3}
          className="min-w-0 flex-grow px-6 lg:mt-6 lg:px-20"
        >
          {children}
        </AnimateEnter>
      </div>
      <CommandMenu />
    </CommandMenuProvider>
  );
}
