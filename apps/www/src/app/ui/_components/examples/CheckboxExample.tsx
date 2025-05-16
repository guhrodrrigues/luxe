import { Checkbox } from "@/app/_components/ui/checkbox";

export function CheckboxExample() {
  return (
    <form className="flex items-start gap-3">
      <Checkbox />
      <div className="grid gap-1.5">
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
        >
          Accept terms and conditions
        </label>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          You agree to our Terms of Service and Privacy Policy.
        </span>
      </div>
    </form>
  );
}
