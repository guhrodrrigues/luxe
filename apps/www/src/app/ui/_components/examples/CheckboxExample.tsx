import { Checkbox } from '@/app/_components/ui/checkbox'

export function CheckboxExample() {
  return (
    <form className="flex items-start gap-3">
      <Checkbox id="terms" className="shrink-0" />
      <div className="grid gap-1.5">
        <label
          htmlFor="terms"
          className="font-medium text-primary text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <span className="text-primary-muted text-sm">
          You agree to our Terms of Service and Privacy Policy.
        </span>
      </div>
    </form>
  )
}
