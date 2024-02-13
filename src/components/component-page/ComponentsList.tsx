import { COMPONENTS } from "@/data/components";
import ComponentsListButton from "./ComponentsListButton";

export default function ComponentsList() {
  return (
    <nav className="fixed left-0 top-0 w-[250px] hidden md:block bg-components-list h-full px-5">
      <h1 className="text-4xl font-bold text-gradient py-10">Luxe</h1>
      <ul className="w-full flex flex-col gap-2 max-h-[800px] overflow-y-scroll">
        {COMPONENTS.map((component) => (
          <ComponentsListButton
            name={component.name}
            slug={component.slug}
            key={component.slug}
          />
        ))}
      </ul>
    </nav>
  );
}
