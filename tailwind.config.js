/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#534AB7',
          light: '#EEEDFE',
          dark: '#3F3791',
        },
        accent: '#4ec9b0',
        bg: {
          dark: '#1e1e1e',
          panel: '#252526',
        },
        border: '#3c3c3c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        myan: ['Padauk', 'Myanmar Text', 'Noto Sans Myanmar', 'sans-serif'],
        mono: ['Padauk', 'Myanmar Text', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(83,74,183,0.18), 0 12px 40px -12px rgba(83,74,183,0.45)',
        'glow-accent': '0 0 0 1px rgba(78,201,176,0.18), 0 12px 40px -12px rgba(78,201,176,0.45)',
        card: '0 1px 2px rgba(16,16,32,0.04), 0 8px 24px -12px rgba(16,16,32,0.18)',
        'card-hover': '0 8px 30px -10px rgba(83,74,183,0.30)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(110deg, #534AB7 0%, #8b82e8 45%, #4ec9b0 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        'gradient-pan': 'gradientPan 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
