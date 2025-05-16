import type { Docs } from "@/@types/docs";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

function readFile(filePath: string): Docs | null {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Docs;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

function getFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export function getDocs(directory?: string): Docs[] {
  const files = getFiles(
    path.join(
      process.cwd(),
      "src/app",
      "_docs",
      ...(directory ? [directory] : []),
    ),
  );

  return files
    .map((file) =>
      readFile(
        path.join(
          process.cwd(),
          "src/app",
          "_docs",
          ...(directory ? [directory] : []),
          file,
        ),
      ),
    )
    .filter((docs): docs is Docs => docs !== null);
}
