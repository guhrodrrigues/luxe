import { Switch } from "@/app/_components/ui/switch";

export function SwitchExample() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm text-black dark:text-white select-none"
      >
        Airplane Mode
      </label>
    </div>
  );
}
