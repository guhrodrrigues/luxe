import type { Metadata } from "next";
import { fontSans, fontMono } from "@/utils/fonts";

import "@/styles/globals.css";

import { cn } from "@/utils/cn";
import { ThemeProvider } from "./theme-provider";

import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  authors: [{ name: "Gustavo Rodrigues", url: "https://guhrodrigues.com" }],
  category: "developer",
  creator: "Gustavo Rodrigues",
  title: {
    default: "Luxe: Illuminate your apps.",
    template: "Luxe: %s",
  },
  description:
    "Library of copy and paste components to illuminate your apps with elegance and sophistication.",
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
    "Frontend Developer",
    "Component library",
    "Frontend",
    "Copy and Paste",
    "CLI",
    "Command Line Interface",
    "Dark Mode",
    "Light Mode",
    "UX Design",
    "Developer",
    "Software",
    "Copy and paste components ready to use. Practical. Customizable.",
    "Design",
    "Vercel",
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Server Components",
    "Client Components",
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
      "Copy and paste components ready to use. Practical. Customizable.",
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
      "Copy and paste components ready to use. Practical. Customizable.",
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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "overflow-x-hidden bg-background font-sans text-foreground antialiased outline-none",
            fontSans.variable,
            fontMono.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
