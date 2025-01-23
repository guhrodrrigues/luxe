import { Metadata } from "next";

import { Sidebar } from "@/app/ui/_components/sidebar/Sidebar";
import { Header } from "@/app/ui/_components/Header";

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
    <>
      <Header />
      <div className="flex max-lg:mb-14 max-lg:flex-col max-lg:gap-12">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="mx-auto w-full max-w-[900px] flex-grow px-6 lg:mt-20 [@media(min-width:1024px)_and_(max-width:1500px)]:pl-52">
          {children}
        </div>
      </div>
    </>
  );
}
