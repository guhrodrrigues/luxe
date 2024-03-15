import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";

import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  authors: [{ name: "Gustavo Rodrigues", url: "https://guhrodrigues.com" }],
  category: "developer",
  creator: "Gustavo Rodrigues",
  title: {
    default: "Luxe",
    template: "%s · Luxe",
  },
  description:
    "Library of dark mode components to illuminate your applications with elegance and sophistication.",
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "luxe.guhrodrigues.com",
    "UI Design",
    "UI Library",
    "Design Engineer",
    "Front-end Developer",
    "FullStack Developer",
    "Component library",
    "Frontend",
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
  ],
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://i.imgur.com/HoTPtcM.jpeg",
        alt: "Luxe website cover",
      },
    ],
    locale: "en",
    title: "Luxe",
    siteName: "Luxe",
    description:
      "Library of dark mode components to illuminate your applications with elegance and sophistication.",
    type: "website",
    url: "https://luxe.guhrodrigues.com",
  },
  publisher: "Gustavo Rodrigues",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://i.imgur.com/HoTPtcM.jpeg",
        alt: "Luxe website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe",
    description:
      "Library of dark mode components to illuminate your applications with elegance and sophistication.",
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
          "font-sans antialiased outline-none bg-background text-foreground overflow-x-hidden",
          GeistSans.variable
        )}
      >
        <div className="mx-auto max-w-[1400px] w-full px-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
