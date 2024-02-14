import Image from "next/image";
import author from "@/assets/author.jpg";

export function CardComment() {
  return (
    <div className="flex flex-col gap-4 bg-neutral-950 w-[350px] rounded-xl px-5 py-5">
      <div className="flex flex-col gap-3 z-10 text-neutral-400">
        <p className="text-[15.5px] tracking-tight leading-6 select-none italic">
          Luxe is an interesting library, with its ease of copying and pasting
          complex components without the need to install any lib and leaves us
          with the power to control our own components, from tailwind configs to
          .tsx. Simply amazing{" "}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div>
          <Image
            src={author}
            alt="Avatar"
            width={42}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-md">Gustavo Rodrigues</p>
          <span className="text-sm text-gray-500">Design Engineer</span>
        </div>
      </div>
    </div>
  );
}
