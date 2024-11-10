export function ButtonLoading() {
  return (
    <button
      disabled
      className="mx-auto flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black duration-300 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <Spinner />
      <TextShine />
    </button>
  );
}

function Spinner() {
  const bars = Array(12).fill(0);

  return (
    <div className="h-[18px] w-[18px]">
      <div className="relative left-1/2 top-1/2 h-[inherit] w-[inherit]">
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${i}`}
            aria-label={`spinner-bar-${i + 1}`}
            className={`absolute -left-[10%] -top-[3.9%] h-[8%] w-[24%] animate-spinner rounded-md bg-black bar:nth-child(${
              i + 1
            })`}
            style={{
              animationDelay: `-${1.3 - i * 0.1}s`,
              transform: `rotate(${30 * i}deg) translate(146%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TextShine() {
  return (
    <span className="inline-flex animate-shine bg-[linear-gradient(110deg,#000,45%,#a3a3a3,55%,#000)] bg-[length:200%_100%] bg-clip-text text-transparent">
      Loading...
    </span>
  );
}
