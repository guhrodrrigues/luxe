import { highlight } from "@/utils/shiki";

type CodeProps = {
  code: string;
};

async function Code({ code }: CodeProps) {
  const component = await highlight(code, "min-dark", "tsx");

  return <div dangerouslySetInnerHTML={{ __html: component }}></div>;
}

export default Code as unknown as (props: CodeProps) => JSX.Element;
