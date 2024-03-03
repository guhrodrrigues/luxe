import fs from "fs";
import path from "path";
import { promisify } from "util";

import { AnimatedTabs } from "@/app/_components/ui/tabs";
import { CodeBlock } from "@/app/(ui)/ui/_components/component-page/CodeBlock";
import { CardBackgroundShine } from "@/app/_components/ui/cards";
import {
  BadgeAnimatedBorder,
  BadgeBackgroundShine,
  BadgeRotateBorder,
} from "@/app/_components/ui/badges";
import {
  ButtonAnimatedBorder,
  ButtonBackgroundShine,
  ButtonRotateBorder,
} from "@/app/_components/ui/buttons";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}

export async function ExampleCode() {
  const tabsFilePath = "./src/app/_components/ui/tabs/AnimatedTabs.tsx";
  const tabsExampleCode = await readFilePath(tabsFilePath);

  const cardBackgroundShine =
    "./src/app/_components/ui/cards/CardBackgroundShine.tsx";
  const cardBackgroundShineExampleCode = await readFilePath(
    cardBackgroundShine
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="flex justify-center h-[300px] items-center border border-border rounded-xl shadow-sm px-8 py-32">
        <AnimatedTabs />
      </div>
      <CodeBlock
        code={tabsExampleCode}
        fileName="AnimatedTabs.tsx"
        className="overflow-y-auto h-[300px]"
      />
      <div className="flex justify-center h-[300px] items-center border border-border rounded-xl shadow-sm px-8 py-32">
        <CardBackgroundShine />
      </div>
      <CodeBlock
        code={cardBackgroundShineExampleCode}
        fileName="CardBackgroundShine.tsx"
        className="overflow-y-auto h-[300px]"
      />
      <div className="md:col-span-2 flex flex-col justify-center gap-5 h-[300px] items-center border border-border rounded-xl shadow-sm px-8 py-32">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <BadgeAnimatedBorder />
          <BadgeBackgroundShine />
          <BadgeRotateBorder />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <ButtonAnimatedBorder />
          <ButtonBackgroundShine />
          <ButtonRotateBorder />
        </div>
      </div>
    </div>
  );
}
