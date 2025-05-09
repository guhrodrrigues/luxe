import { StaticImageData } from "next/image";

import luxev2 from "@/assets/updates/luxe-v2.webp";

type Update = {
  href: string;
  title: string;
  description: string;
  author: string;
  banner: StaticImageData;
  author_image: string;
  date: string;
};

export const UPDATES: Update[] = [
  {
    href: "v2.0",
    title: "Introducing Luxe 2.0",
    description:
      "One of the biggest Luxe launches yet is here. This new version introduces powerful new components, a new CLI, and a complete redesign of everything.",
    author: "Gustavo Rodrigues",
    banner: luxev2,
    author_image: "https://github.com/guhrodrrigues.png",
    date: "May 19, 2025",
  },
];
