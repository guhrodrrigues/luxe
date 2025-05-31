import { getDocs } from "@/lib/mdx";

export const getComponents = getDocs().sort((a, b) =>
  a.title.localeCompare(b.title),
);
