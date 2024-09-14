import Link from "next/link";

export function GalleryButton() {
  return (
    <Link
      href="/ui"
      className="group relative inline-flex items-center gap-1 text-sm py-2.5 px-4 font-semibold bg-primary/80 text-black rounded-xl duration-300 overflow-hidden"
    >
      <TextGlitch text="Explore Gallery" />
      <div className="absolute inset-0 flex h-full w-full justify-center animate-brightness">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible font-mono">{text}</span>
      <span className="font-semibold font-mono absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
      </span>
      <span className="font-semibold font-mono absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
        {text}
      </span>
    </div>
  );
}
