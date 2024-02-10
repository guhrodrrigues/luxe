import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colors.neutral[950],
        primary: colors.white,
        secondary: "#c2c2c2",
        foreground: "#b5b3ad",
        muted: colors.neutral[500],
        border: "#262626",
      },
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        shine: "shine 2s linear infinite",
        "border-width": "border-width 3s infinite alternate",
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        shine: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "border-width": {
          from: {
            width: "10px",
            opacity: "0",
          },
          to: {
            width: "100px",
            opacity: "1",
          },
        },
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
      },
    },
    fontFamily: {
      sans: "var(--font-geist-sans)",
    },
  },
  plugins: [],
};
export default config;
