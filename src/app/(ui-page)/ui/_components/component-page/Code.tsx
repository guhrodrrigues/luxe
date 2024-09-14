import { codeToHtml } from "shiki";

type CodeProps = {
  code: string;
  lang?: string;
};

async function Code({ code, lang = "tsx" }: CodeProps) {
  const component = await codeToHtml(code, {
    lang: lang,
    theme: "vesper",
  });

  return <div dangerouslySetInnerHTML={{ __html: component }} />;
}

export default Code as unknown as (props: CodeProps) => JSX.Element;
