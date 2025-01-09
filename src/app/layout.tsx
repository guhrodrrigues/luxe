import type { Metadata } from "next";
import { fontSans, fontMono } from "@/utils/fonts";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  authors: [{ name: "Gustavo Rodrigues", url: "https://guhrodrigues.com" }],
  category: "developer",
  creator: "Gustavo Rodrigues",
  title: {
    default: "Luxe",
    template: "%s · Luxe",
  },
  description:
    "Library of components copy and paste to illuminate your applications with elegance and sophistication.",
  icons: ["/favicon.svg"],
  keywords: [
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "luxeui.com",
    "luxe.guhrodrigues.com",
    "Motion",
    "UI Design",
    "Luxe",
    "UI Library",
    "Design Engineer",
    "Front-end Developer",
    "FullStack Developer",
    "Component library",
    "Frontend",
    "Copy and Paste",
    "CLI",
    "Command Line Interface",
    "UX Design",
    "FullStack",
    "Developer",
    "Software",
    "Design",
    "Brazil",
    "Vercel",
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Server Components",
  ],
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-website.png",
        alt: "Luxe website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe",
    description:
      "Copy & Paste components. Illuminate your apps. Fast and Easy.",
    type: "website",
    url: "https://luxeui.com",
  },
  publisher: "Gustavo Rodrigues",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-website.png",
        alt: "Luxe website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe",
    description:
      "Copy & Paste components. Illuminate your apps. Fast and Easy.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-x-hidden bg-background font-sans text-foreground antialiased outline-none",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
