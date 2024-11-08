"use clients";

import Link from "next/link";

export function ButtonGlitchBrightness({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-1 text-sm py-2 px-4 font-semibold bg-primary/80 text-black rounded-xl duration-300 overflow-hidden hover:bg-primary"
    >
      <TextGlitch text={text} />
      <div className="absolute inset-0 flex h-full w-full justify-center animate-brightness">
        <div className="relative h-full w-8 bg-white/40 blur" />
      </div>
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="font-semibold absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
      </span>
      <span className="font-semibold absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
      </span>
    </div>
  );
}
