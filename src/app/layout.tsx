import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";

import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { CommandMenu } from "./_components/command-menu";
import { CommandMenuProvider } from "./_components/command-menu/_context/CommandMenuProvider";

export const metadata: Metadata = {
  authors: [{ name: "Gustavo Rodrigues", url: "https://guhrodrigues.com" }],
  category: "developer",
  creator: "Gustavo Rodrigues",
  title: {
    default:
      "Luxe – Library of components copy and paste to illuminate your applications with elegance and sophistication.",
    template: "%s · Luxe",
  },
  description:
    "Library of components copy and paste to illuminate your applications with elegance and sophistication.",
  icons: {
    apple: "/favicon.svg",
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  keywords: [
    "Gustavo Rodrigues",
    "guhrodrigues.com",
    "luxeui.com",
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
        url: "https://luxeui.com/open-graphs/og-luxe-website.png",
        alt: "Luxe website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe",
    description:
      "Library of components copy and paste to illuminate your applications with elegance and sophistication.",
    type: "website",
    url: "https://luxeui.com",
  },
  publisher: "Gustavo Rodrigues",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-luxe-website.png",
        alt: "Luxe website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe",
    description:
      "Library of components copy and paste to illuminate your applications with elegance and sophistication.",
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
        <CommandMenuProvider>
          <Header />
          {children}
          <Footer />
          <CommandMenu />
        </CommandMenuProvider>
      </body>
    </html>
  );
}
