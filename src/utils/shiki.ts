import { createHighlighter } from "shiki";

type CodeProps = {
  code: string;
  lang?: string;
};

export async function codeToHtml({ code, lang = "tsx" }: CodeProps) {
  const highlighter = await createHighlighter({
    themes: ["github-dark"],
    langs: [lang],
  });

  return highlighter.codeToHtml(code, {
    lang: lang,
    theme: "github-dark",
  });
}
