export function CardComment() {
  return (
    <div className="relative flex w-full max-w-lg flex-col gap-8 rounded-xl border border-black/10 bg-neutral-100 p-10 dark:border-white/10 dark:bg-neutral-950">
      <div className="absolute -top-px right-5 hidden h-px w-80 bg-gradient-to-l from-transparent via-black/10 via-10% to-transparent dark:block dark:via-white/30" />
      <p className="text-center text-base leading-[1.5] text-neutral-500 dark:text-neutral-300">
        “Luxe is an interesting library, with its ease of copying and pasting
        complex components without the need to install any lib and leaves us
        with the power to control our own components.”
      </p>
      <div className="flex items-center justify-center gap-3">
        <img
          src="https://github.com/guhrodrrigues.png"
          alt="Gustavo's profile image"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <a
            href="https://x.com/guhrodrrigues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium leading-none text-neutral-600 duration-300 dark:text-neutral-300"
          >
            Gustavo Rodrigues
          </a>
          <span className="text-neutral-500 dark:text-neutral-400">
            Creator of Luxe
          </span>
        </div>
      </div>
    </div>
  );
}
