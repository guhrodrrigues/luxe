export function TextAnimatedDecoration() {
  return (
    <div className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
      <span className="font-medium text-neutral-500 dark:text-neutral-400">
        Hover Me
      </span>
    </div>
  )
}
