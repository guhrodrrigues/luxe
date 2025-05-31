import Link from "next/link";
import { Metadata } from "next";

import { AnimateEnter } from "../(home)/_components/AnimateEnter";
import { BlurImage } from "../_components/BlurImage";
import { Divider } from "../_components/Divider";

import { UPDATES } from "@/data/updates";

export const metadata: Metadata = {
  title: "Updates",
  description: "Discover the latest updates from Luxe.",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-website.png",
        alt: "Luxe's website cover",
      },
    ],
    locale: "en",
    siteName: "Gustavo Rodrigues",
    title: "Luxe — Updates",
    description: "Discover the latest updates from Luxe.",
    type: "website",
    url: "https://luxeui.com/updates",
  },
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://luxeui.com/open-graphs/og-website.png",
        alt: "Luxe's website cover",
      },
    ],
    card: "summary_large_image",
    title: "Luxe — Updates",
    description: "Discover the latest updates from Luxe.",
    site: "@guhrodrrigues",
    creator: "Gustavo Rodrigues",
  },
};

export default function UpdatesPage() {
  return (
    <main className="flex flex-col gap-24 w-full max-w-7xl mx-auto px-6 pt-24 sm:pt-32 pb-24">
      {UPDATES.slice(0, 1).map(
        ({ title, author, author_image, banner, date, description, href }) => (
          <Link key={title} href={`/updates/${href}`}>
            <AnimateEnter
              delay={0.1}
              className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-12 xl:gap-x-20"
            >
              <div className="lg:col-span-2 lg:w-[650px] xl:w-full">
                <div className="overflow-hidden border border-transparent dark:border-neutral-900 rounded-2xl">
                  <BlurImage src={banner} alt="Luxe 2.0" />
                </div>
              </div>
              <div className="flex flex-col gap-6 py-3 max-lg:justify-center max-lg:items-center">
                <div className="group w-fit relative block rounded-full py-1 px-2.5 bg-[#eeeeee] dark:bg-[#161616] dark:shadow-inner dark:shadow-neutral-800/80 border border-neutral-400/20 dark:border-neutral-700/70">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-medium text-gradient tracking-tight text-sm">
                      Latest
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-6 lg:gap-9 max-lg:items-center max-lg:justify-center max-lg:text-center">
                  <h1 className="font-normal text-4xl sm:text-5xl text-gradient tracking-tight md:text-6xl">
                    {title}
                  </h1>
                  <span className="text-foreground max-lg:max-w-lg max-lg:w-full max-lg:mx-auto lg:w-[320px]">
                    {description}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-full overflow-hidden">
                      <BlurImage
                        src={author_image}
                        alt={`${author.split(" ")[0]}'s profile picture`}
                        className="rounded-full"
                        width={32}
                        height={32}
                      />
                    </div>
                    <span className="text-gradient text-sm font-[460]">
                      {author}
                    </span>
                  </div>
                  <Divider />
                  <span className="text-gradient text-sm font-[460]">
                    {date}
                  </span>
                </div>
              </div>
            </AnimateEnter>
          </Link>
        ),
      )}
      <div className="space-y-7">
        <AnimateEnter delay={0.2}>
          <h1 className="font-normal text-gradient tracking-tight text-2xl">
            All Updates
          </h1>
        </AnimateEnter>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {UPDATES.map(
            (
              { title, author, author_image, banner, date, description, href },
              index,
            ) => (
              <Link key={title} href={`/updates/${href}`}>
                <AnimateEnter
                  delay={0.3 + index * 0.05}
                  className="flex flex-col gap-4"
                >
                  <div className="overflow-hidden border border-transparent dark:border-neutral-900 rounded-xl">
                    <BlurImage src={banner} alt="Luxe 2.0" />
                  </div>
                  <div className="flex flex-col gap-6 py-3">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-normal text-gradient tracking-tight text-2xl">
                        {title}
                      </h1>
                      <span className="text-foreground text-[16px]">
                        {description}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-full overflow-hidden">
                          <BlurImage
                            src={author_image}
                            alt={`${author.split(" ")[0]}'s profile picture`}
                            className="rounded-full"
                            width={32}
                            height={32}
                          />
                        </div>
                        <span className="text-gradient text-sm font-[460]">
                          {author}
                        </span>
                      </div>
                      <Divider />
                      <span className="text-gradient text-sm font-[460]">
                        {date}
                      </span>
                    </div>
                  </div>
                </AnimateEnter>
              </Link>
            ),
          )}
        </div>
      </div>
    </main>
  );
}
