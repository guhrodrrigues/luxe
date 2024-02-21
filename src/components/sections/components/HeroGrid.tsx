export function HeroGrid() {
  const totalBoxes = Array.from({
    length: 15
  }, (_, index) => index + 1)

  return (
    <div className="absolute inset-0 z-[-1] grid h-full grid-cols-3 pointer-events-none before:content before:absolute before:inset-0 before:shadow-[inset_0_0_1000px_150px_rgb(10,10,10)] md:grid-cols-4">
      {totalBoxes.map((key) => (
        <span key={key} className="aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent"></span>
      ))}

      <span className="max-md:hidden aspect-w-1 aspect-h-1 relative z-[-2] block h-full w-full border border-border/60 bg-transparent duration-300"></span>
    </div>
  );
}
