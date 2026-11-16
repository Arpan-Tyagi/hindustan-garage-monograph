/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        parchment: {
          DEFAULT: '#F5F2EB',
          light: '#FAF8F4',
          dark: '#EDE8DE',
          deep: '#E3DDD0',
        },
        ink: {
          DEFAULT: '#141413',
          muted: '#4A4844',
          faint: '#66635D',
          border: '#D6D1C4',
        },
        crimson: {
          DEFAULT: '#8C1813',
          dark: '#66110D',
          light: '#AB201A',
        },
        oxford: {
          DEFAULT: '#12355B',
          dark: '#0A1E33',
          light: '#1B4D82',
          surface: '#163E69',
        },
        brass: {
          DEFAULT: '#B4925A',
          light: '#D4B886',
          dark: '#8C6F3C',
        },
        rule: {
          DEFAULT: '#D6D1C4',
          dark: '#2A2926',
          light: '#E6E2D8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow: {
        'bezel': '0 2px 4px rgba(20, 20, 19, 0.04), 0 16px 36px -12px rgba(20, 20, 19, 0.08)',
        'bezel-dark': '0 4px 6px rgba(0, 0, 0, 0.25), 0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'inner-light': 'inset 0 1px 1px rgba(255, 255, 255, 0.65)',
        'inner-dark': 'inset 0 1px 1px rgba(255, 255, 255, 0.08)',
      },
      letterSpacing: {
        'archival': '0.22em',
        'ledger': '0.12em',
      },
    },
  },
  plugins: [],
};
