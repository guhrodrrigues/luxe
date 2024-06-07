import { Metadata } from "next";

import { ComponentsList } from "./_components/component-page/ComponentsList";
import { CommandMenu } from "./_components/command-menu";
import { CommandMenuProvider } from "./_context/CommandMenuProvider";

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
        url: "/open-graphs/og-luxe-website.png",
        alt: "Luxe's website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe — Browse Components",
    description:
      "Navigate to all the components that will make your application sophisticated and luxurious.",
    type: "website",
    url: "https://luxe.guhrodrigues.com/ui",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "/open-graphs/og-luxe-website.png",
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
      <div className="mx-auto flex max-xl:flex-col gap-12 xl:gap-24 max-w-[1600px] w-full px-4 max-xl:mb-14">
        <div className="flex-shrink-0 xl:w-[250px]">
          <ComponentsList />
        </div>
        <div className="flex-grow min-w-0">{children}</div>
        <CommandMenu />
      </div>
    </CommandMenuProvider>
  );
}
