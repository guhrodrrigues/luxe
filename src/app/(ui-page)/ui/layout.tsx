import { Metadata } from "next";

import { ComponentsList } from "./_components/component-page/ComponentsList";
import { AnimateEnter } from "@/app/(home-page)/_components/AnimateEnter";

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
        url: "https://luxeui.com/open-graphs/og-luxe-website.png",
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
        url: "https://luxeui.com/open-graphs/og-luxe-website.png",
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
    <AnimateEnter
      duration={0.3}
      className="mx-auto flex max-lg:flex-col gap-12 lg:gap-12 max-w-[1400px] w-full px-4 max-lg:mb-14 mt-16"
    >
      <div className="flex-shrink-0 lg:w-[250px]">
        <ComponentsList />
      </div>
      <div className="flex-grow min-w-0 lg:mt-6">{children}</div>
    </AnimateEnter>
  );
}
