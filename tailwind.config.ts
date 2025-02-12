import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const rootTailwindConfig: Omit<Config, 'content'> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          muted: '#0d0d0d',
        },
        main: 'var(--main)',
        primary: 'var(--primary)',
        secondary: '#c2c2c2',
        foreground: 'var(--foreground)',
        muted: colors.neutral[500],
        border: 'var(--border)',
      },
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
        shine: 'shine 6s linear infinite',
        'border-width': 'border-width 3s infinite alternate',
        'text-gradient': 'text-gradient 2s linear infinite',
        'text-shake': 'text-shake 1s ease 1',
        'text-glitch-to': 'text-glitch-to 0.6s ease-in-out infinite',
        'text-glitch-from': 'text-glitch-from 0.6s ease-in-out infinite',
        'text-scale': 'text-scale 1s linear infinite forwards',
        'infinite-slider': 'infinite-slider 40s linear infinite',
        spotlight: 'spotlight 2s ease 1 forwards',
        brightness: 'brightness 2.2s linear infinite',
        spinner: 'spinner 1.2s linear infinite',
      },
      backgroundImage: {
        'fade-gradient':
          'linear-gradient(90deg, #0a0a0a, transparent 20%, transparent 80%, #0a0a0a)',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
        shine: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-400% 0',
          },
        },
        'border-width': {
          from: {
            width: '10px',
            opacity: '0',
          },
          to: {
            width: '100px',
            opacity: '1',
          },
        },
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'text-shake': {
          '15%': { transform: 'translateX(5px)' },
          '30%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(3px)' },
          '80%': { transform: 'translateX(2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'text-glitch-to': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(-100%)',
          },
        },
        'text-glitch-from': {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        brightness: {
          '0%': {
            transform: 'skew(-13deg) translateX(-100%)',
          },
          '100%': {
            transform: 'skew(-13deg) translateX(100%)',
          },
        },
        spinner: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.15' },
        },
        'text-scale': {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'bottom left',
          },
          '25%': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left',
          },
          '75%': {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom right',
          },
          '100%': {
            transform: 'scaleX(0)',
            transformOrigin: 'bottom right',
          },
        },
        'infinite-slider': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
    },
    fontFamily: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
  },
  // plugins: [import('tailwindcss-animate')],
}

export default rootTailwindConfig
