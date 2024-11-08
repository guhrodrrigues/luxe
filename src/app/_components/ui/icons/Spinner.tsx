export function Spinner() {
  const bars = Array(12).fill(0);

  return (
    <div className="h-[24px] w-[24px]">
      <div className="relative left-1/2 top-1/2 h-[inherit] w-[inherit]">
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${i}`}
            aria-label={`spinner-bar-${i + 1}`}
            className={`animate-spinner absolute -left-[10%] -top-[3.9%] h-[8%] w-[24%] rounded-md bg-neutral-400 bar:nth-child(${
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
