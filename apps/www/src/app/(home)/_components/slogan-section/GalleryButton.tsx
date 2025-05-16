import { Link } from "next-view-transitions";

export function GalleryButton() {
  return (
    <Link
      href="/ui/accordion"
      className="group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-black/80 px-4 py-[12.6px] text-sm font-semibold text-white duration-300 hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white"
    >
      <TextGlitch text="Explore Gallery" />
      <Brightness />
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute dark:[text-shadow:0_0.5px_0_rgb(255,255,255,.48)] left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute dark:[text-shadow:0_0.5px_0_rgb(255,255,255,.48)] left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}

function Brightness() {
  return (
    <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
      <div className="relative h-full w-8 bg-white/20 blur dark:bg-white/40" />
    </div>
  );
}
