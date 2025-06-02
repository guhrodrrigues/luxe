import fs from "fs";
import path from "path";

export function getFileContent(dir: string, fileName: string) {
  const filePath = path.join(process.cwd(), "src", dir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return fileContent;
}
