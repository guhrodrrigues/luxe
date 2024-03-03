import Image from "next/image";

import author from "@/assets/author.jpg";

export function CardComment() {
  return (
    <div className="relative flex flex-col gap-8 bg-neutral-950 border border-white/10 w-full max-w-lg rounded-xl p-10">
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <p className="text-base text-center leading-[1.5] text-neutral-300">
        “Luxe is an interesting library, with its ease of copying and pasting
        complex components without the need to install any lib and leaves us
        with the power to control our own components.”
      </p>
      <div className="flex items-center justify-center gap-3">
        <Image
          src={author}
          alt="Gustavo's profile image"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <a
            href="https://github.com/guhrodriguess"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-neutral-300 leading-none duration-300"
          >
            Gustavo Rodrigues
          </a>
          <span className="text-neutral-400">Creator of Luxe</span>
        </div>
      </div>
    </div>
  );
}
