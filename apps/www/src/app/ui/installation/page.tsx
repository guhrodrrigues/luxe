import type { Metadata } from "next";

import { Breadcrumbs } from "../_components/Breadcrumbs";
import { Pagination } from "../_components/Pagination";
import { Card } from "./_components/Card";
import { INSTALLATION } from "./_data/installation";

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install dependencies and structure your application",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-installation.png",
        alt: "Luxe's website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe — Installation",
    description: "How to install dependencies and structure your application",
    type: "website",
    url: "https://luxeui.com/ui/installation",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-installation.png",
        alt: "Luxe's website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe — Installation",
    description: "How to install dependencies and structure your application",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

export default function InstallationPage() {
  return (
    <main className="my-2 space-y-10">
      <div className="space-y-4">
        <Breadcrumbs groupName="Get Started" currentPage="Installation" />
        <div className="space-y-3.5">
          <h1 className="text-3xl font-bold -tracking-wide text-primary">
            Installation
          </h1>
          <p className="text-[16px] font-normal leading-relaxed text-black/80 dark:text-white/90">
            How to install dependencies and structure your application.
          </p>
        </div>
      </div>
      <div className="grid place-items-start gap-10 lg:grid-cols-2 lg:gap-4">
        {INSTALLATION.map(({ slug, icon, name }) => (
          <Card key={name} slug={slug} icon={icon} name={name} />
        ))}
      </div>
      <Pagination
        next={{
          href: "/ui/cli",
          title: "CLI",
        }}
      />
    </main>
  );
}
