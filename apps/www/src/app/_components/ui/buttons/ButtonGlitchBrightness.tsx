export function ButtonGlitchBrightness() {
  return (
    <button className="group relative inline-flex items-center gap-1 overflow-hidden rounded-xl bg-black/80 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white">
      <TextGlitch text="Hover Me" />
      <Brightness />
    </button>
  )
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 font-medium transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-medium transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  )
}

function Brightness() {
  return (
    <div className="absolute inset-0 flex h-full w-full animate-brightness justify-center">
      <div className="relative h-full w-8 bg-white/20 blur dark:bg-white/40" />
    </div>
  )
}
