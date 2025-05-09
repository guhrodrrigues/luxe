import { Metadata } from "next";

import { Sidebar } from "@/app/ui/_components/sidebar/Sidebar";
import { OnThisPage } from "./_components/OnThisPage";

export const metadata: Metadata = {
  title: {
    default: "Browse Components",
    template: "Luxe: %s",
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
    <div className="max-w-7xl mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 horizontal-dotted">
      <Sidebar />
      <div className="relative xl:grid xl:grid-cols-[1fr_190px]">
        <div className="mx-auto w-full min-w-0 max-w-[640px] mt-6 max-md:px-6 mb-16 sm:mb-20">
          {children}
        </div>
        <OnThisPage />
      </div>
    </div>
  );
}
