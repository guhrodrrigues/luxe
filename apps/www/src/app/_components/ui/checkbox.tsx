"use client"; // @NOTE: Add in case you are using Next.js

import * as RadixCheckbox from "@radix-ui/react-checkbox";

import { AnimatePresence, motion } from "motion/react";

type CheckboxProps = React.CustomComponentPropsWithRef<
  typeof RadixCheckbox.Root
>;

export function Checkbox(props: CheckboxProps) {
  const { checked } = props;

  return (
    <RadixCheckbox.Root
      {...props}
      className='relative inset-ring-1 inset-ring-border inline-block size-5 appearance-none rounded bg-main-muted'
    >
      <AnimatePresence mode="popLayout">
        <RadixCheckbox.Indicator
          className='absolute inset-0 flex items-center justify-center rounded-[inherit] bg-primary'
          asChild
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: [0.175, 0.885, 0.32, 1.1],
            }}
          >
            <CheckIcon checkedState={checked} />
          </motion.div>
        </RadixCheckbox.Indicator>
      </AnimatePresence>
    </RadixCheckbox.Root>
  );
}

type CheckIconProps = {
  checkedState: CheckboxProps["checked"];
};

function CheckIcon({ checkedState }: CheckIconProps) {
  const CHECK_PATH = "M5 13 L10 18 L20 6";
  const INDETERMINATE_PATH = "M6 12 H18";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='shrink-0 scale-65 stroke-4 stroke-primary-invert'
    >
      <title>Check</title>

      <motion.path
        d={checkedState === "indeterminate" ? INDETERMINATE_PATH : CHECK_PATH}
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.645, 0.045, 0.355, 1],
        }}
      />
    </svg>
  );
}
