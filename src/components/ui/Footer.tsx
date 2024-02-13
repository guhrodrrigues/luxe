import Image from "next/image";

import author from "@/assets/author.jpg";

export function Footer() {
  return (
    <footer className="xl:pl-[150px] flex justify-center items-center gap-3 py-8">
      <div>
        <Image src={author} alt="Gustavo" width={30} className="rounded-full" />
      </div>
      <div>
        <span className="text-sm">
          Made by{" "}
          <a
            href="https://github.com/guhrodriguess"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary duration-300 hover:text-primary"
          >
            Gustavo.
          </a>
        </span>
      </div>
    </footer>
  );
}
