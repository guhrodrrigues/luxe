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
        "components-list": "#080808",
      },
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        shine: "shine 2s linear infinite",
        "border-width": "border-width 3s infinite alternate",
        "text-gradient": "text-gradient 1.5s linear infinite",
        "text-shake": "text-shake 1s ease 1",
        "text-glitch-to": "text-glitch-to 0.6s ease-in-out infinite",
        "text-glitch-from": "text-glitch-from 0.6s ease-in-out infinite",
        "text-scale": "text-scale 1s linear infinite forwards",
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
        "text-shake": {
          "15%": { transform: "translateX(5px)" },
          "30%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(3px)" },
          "80%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(0)" },
        },
        "text-glitch-to": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
        "text-glitch-from": {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "text-scale": {
          "0%": {
            transform: "scaleX(0)",
            transformOrigin: "bottom left",
          },
          "25%": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
          "75%": {
            transform: "scaleX(1)",
            transformOrigin: "bottom right",
          },
          "100%": {
            transform: "scaleX(0)",
            transformOrigin: "bottom right",
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
