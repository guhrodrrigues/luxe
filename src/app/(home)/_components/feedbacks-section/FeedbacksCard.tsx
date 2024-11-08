import Image from "next/image";

export function FeedbacksCard() {
  return (
    <div className="relative flex flex-col gap-8 w-full max-w-lg">
      <p className="text-base font-medium text-center leading-[1.5] text-neutral-300">
        “Luxe is an ultra-aesthetic user interface library. I think it's
        promising when built as an abstract layer on top of your existing design
        system.”
      </p>
      <div className="flex items-center justify-center gap-3">
        <Image
          src="https://github.com/guilhermerodz.png"
          alt="Rodz's profile image"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <a
            href="https://x.com/guilherme_rodz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-neutral-300 leading-none duration-300"
          >
            Guilherme Rodz
          </a>
          <span className="text-neutral-400">Design Engineer, Unkey</span>
        </div>
      </div>
    </div>
  );
}
