export function CardBackgroundShine() {
  return (
    <div className="inline-flex w-full max-w-[350px] animate-shine items-center justify-center rounded-xl border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#303030,55%,#000103)] bg-[length:200%_100%] px-4 py-5 text-sm transition-colors">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-neutral-200">Luxe</h3>
        <p className="text-sm leading-[1.5] text-neutral-400">
          Explore the new website that simplifies the creation of sophisticated
          dark mode components.
        </p>
      </div>
    </div>
  );
}
