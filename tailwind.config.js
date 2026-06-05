/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './types.ts',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './views/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'arial-nova': ['"Arial Nova"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        paper: '#F2F4F5',
        charcoal: '#2A2A2A',
        'academic-red': '#9A1E04',
        gold: {
          400: '#EBCB8B',
          500: '#C5A059',
          600: '#B08D55',
        },
        stone: {
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.0s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
