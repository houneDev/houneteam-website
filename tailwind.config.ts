import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#060b18',
        surface: '#0c1526',
        card: '#0f1a2e',
        text: '#eef2ff',
        muted: '#8896b8',
        accent: '#7cc7ff',
        purple: '#a78bfa',
        green: '#4ade80',
        gold: '#fbbf24',
        border: 'rgba(124,199,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'emil-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'emil-inout': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      keyframes: {
        'float-a': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-b': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-0.8deg)', transformOrigin: 'bottom center' },
          '50%': { transform: 'rotate(0.8deg)', transformOrigin: 'bottom center' },
        },
      },
      animation: {
        'float-a': 'float-a 3.6s ease-in-out infinite',
        'float-b': 'float-b 4.2s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
