import { Metadata } from "next";
import { Card } from "./_components/Card";
import { Breadcrumbs } from "../_components/Breadcrumbs";
import { INSTALLATION } from "./_data/installation";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Pagination } from "../_components/Pagination";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "How to install dependencies and structure your application to use Luxe.",
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
    description:
      "How to install dependencies and structure your application to use Luxe.",
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
    description:
      "How to install dependencies and structure your application to use Luxe.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

export default function InstallationPage() {
  return (
    <main className="my-2 xl:mb-24 space-y-16">
      <div className="space-y-6">
        <Breadcrumbs groupName="Get Started" currentPage="Installation" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-primary">Installation</h1>
          <p className="max-w-lg font-normal text-primary/80">
            How to install dependencies and structure your application.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 place-items-center">
        {INSTALLATION.map(({ slug, icon, name, description }) => (
          <Card
            key={name}
            slug={slug}
            icon={icon}
            name={name}
            description={description}
          />
        ))}
      </div>

      <Pagination
        next={{
          href: "/ui/add-utilities",
          name: "Add Utilities",
        }}
      />
    </main>
  );
}
