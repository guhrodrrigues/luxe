import Image from "next/image";

export function CardIcon() {
  return (
    <div className="w-[350px]">
      <div className="group relative grid overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
        <span className="backdrop absolute inset-px rounded-[12px] bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
        <div className="flex flex-col gap-3 z-10 text-neutral-400">
          <div>
            <Image
              src="https://illustrations.popsy.co/white/rich.svg"
              alt="Icon"
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-xl font-semibold tracking-tight select-none">
            Card Title
          </h3>
          <p className="text-sm tracking-tight leading-6 select-none">
            Sunt cumque qui aut totam iure est sed sit dicta. Quia numquam
            accusantium quia reiciendis adipisci aliquam sit sint.
          </p>
        </div>
      </div>
    </div>
  );
}
