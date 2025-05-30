export const PROCESS_CWD = process.cwd()
export const MANIFEST_FILE = 'luxe.json'

export const IS_DEV = process.env.NODE_ENV === 'development'

export const DEFAULT_CSS_PATH = './src/styles/globals.css'
export const DEFAULT_COMPONENTS_ALIAS = '@/components/ui'
export const DEFAULT_UTILS_ALIAS = '@/utils'

export const FS_ERROR_CODES = {
  PERMISSION_DENIED: 'EACCES',
  OPERATION_NOT_PERMITTED: 'EPERM',
  NO_SUCH_FILE_OR_DIRECTORY: 'ENOENT',
  IS_A_DIRECTORY: 'EISDIR',
}

export const REQUIRED_EXTERNAL_DEPENDENCIES = [
  'clsx',
  'tailwind-merge',
  'tailwind-variants',
  'tw-animate-css',
  'motion',
]

export const TAILWIND_PACKAGE = 'tailwindcss'

export const TAILWIND_V4_REGEX =
  /^\s*(?:\^|~|>=|<=|>|<|=)?\s*4(?:\.\d+){0,2}(?:-[0-9A-Za-z.-]+)?\s*$/

export const THEME_BASE_CSS = String.raw`@import "tailwindcss";
  @import "tw-animate-css";

  :root {
    --main: oklch(0.97 0 0);
    --main-secondary: oklch(97% 0 0);
    --main-foreground: oklch(0.925 0 0);
    --main-muted: oklch(0.96 0 0);
    --main-background: oklch(0.97 0 0);
    --main-invert: oklch(0.205 0 0);

    --primary: oklch(0 0 0);
    --primary-invert: oklch(1 0 0);
    --primary-foreground: oklch(37.1% 0 0);
    --primary-muted: oklch(0.556 0 0);

    --border: oklch(0.885 0 0);
  }

  .dark {
    --main: oklch(0.178 0 0);
    --main-secondary: oklch(0.205 0 0);
    --main-foreground: oklch(0.269 0 0);
    --main-muted: oklch(0.168 0 0);
    --main-background: oklch(0.145 0 0);
    --main-invert: oklch(0.8 0 0);

    --primary: oklch(1 0 0);
    --primary-invert: oklch(0 0 0);
    --primary-foreground: oklch(0.97 0 0);
    --primary-muted: oklch(0.708 0 0);

    --border: oklch(0.26 0 0);
  }

  @theme inline {
    --color-main: var(--main);
    --color-main-secondary: var(--main-secondary);
    --color-main-foreground: var(--main-foreground);
    --color-main-muted: var(--main-muted);
    --color-main-background: var(--main-background);
    --color-main-invert: var(--main-invert);

    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-primary-muted: var(--primary-muted);
    --color-primary-invert: var(--primary-invert);

    --color-border: var(--border);

    --animate-shine: shine 6s linear infinite;
    --animate-border-width: border-width 3s infinite alternate;
    --animate-text-gradient: text-gradient 2s linear infinite;
    --animate-text-shake: text-shake 1s ease 1;
    --animate-text-glitch-to: text-glitch-to 0.6s ease-in-out infinite;
    --animate-text-glitch-from: text-glitch-from 0.6s ease-in-out infinite;
    --animate-text-scale: text-scale 1s linear infinite forwards;
    --animate-brightness: brightness 2.2s linear infinite;
    --animate-spinner: spinner 1.2s linear infinite;
    --animate-accordion-open: accordion-open 0.2s ease-out;
    --animate-accordion-close: accordion-close 0.2s ease-out;

    @keyframes accordion-open {
      from {
        height: 0;
      }
      to {
        height: var(--radix-accordion-content-height);
      }
    }

    @keyframes accordion-close {
      from {
        height: var(--radix-accordion-content-height);
      }
      to {
        height: 0;
      }
    }

    @keyframes shine {
      from {
        background-position: 0 0;
      }
      to {
        background-position: -400% 0;
      }
    }

    @keyframes border-width {
      from {
        width: 10px;
        opacity: 0;
      }
      to {
        width: 100px;
        opacity: 1;
      }
    }

    @keyframes text-gradient {
      to {
        background-position: 200% center;
      }
    }

    @keyframes text-shake {
      15% {
        transform: translateX(5px);
      }
      30% {
        transform: translateX(-5px);
      }
      50% {
        transform: translateX(3px);
      }
      80% {
        transform: translateX(2px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes text-glitch-to {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-100%);
      }
    }

    @keyframes text-glitch-from {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes brightness {
      0% {
        transform: skew(-13deg) translateX(-100%);
      }
      100% {
        transform: skew(-13deg) translateX(100%);
      }
    }

    @keyframes spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.15;
      }
    }

    @keyframes text-scale {
      0% {
        transform: scaleX(0);
        transform-origin: bottom left;
      }
      25% {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      75% {
        transform: scaleX(1);
        transform-origin: bottom right;
      }
      100% {
        transform: scaleX(0);
        transform-origin: bottom right;
      }
    }
  }
`
