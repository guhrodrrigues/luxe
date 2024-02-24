import type { Highlighter } from "shiki";
import { getHighlighter } from "shiki";

let highlighter: Highlighter;

export async function highlight(code: string, theme: string, lang: string) {
  if (!highlighter) {
    highlighter = await getHighlighter({
      langs: [lang],
      themes: [theme],
    });
  }

  const html = highlighter.codeToHtml(code, {
    lang: lang,
    theme: theme,
  });

  return html;
}
