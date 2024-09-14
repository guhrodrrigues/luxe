import { highlight } from "@/utils/shiki";

type CodeProps = {
  code: string;
  lang?: string;
};

async function Code({ code, lang = "tsx" }: CodeProps) {
  const component = await highlight(code, "vesper", lang);

  return <div dangerouslySetInnerHTML={{ __html: component }}></div>;
}

export default Code as unknown as (props: CodeProps) => JSX.Element;
