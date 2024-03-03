export function TextGlitch() {
  return (
    <div className="relative overflow-hidden group">
      <span className="invisible">Text Glitch</span>
      <span className="text-neutral-400 absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
        Text Glitch
      </span>
      <span className="text-neutral-400 absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
        Text Glitch
      </span>
    </div>
  );
}
