/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#020408',
        surface: '#080e18',
        'surface-2': '#0d1526',
        border: 'rgba(99,102,241,0.15)',
        accent: {
          DEFAULT: '#6366f1',
          2: '#a855f7',
          glow: '#818cf8',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Cascadia Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
        'gradient-text': 'linear-gradient(90deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)',
        'gradient-radial-accent': 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(99,102,241,0.3)',
        'glow-md': '0 0 40px rgba(99,102,241,0.4), 0 0 80px rgba(168,85,247,0.2)',
        'glow-lg': '0 0 80px rgba(99,102,241,0.5), 0 0 160px rgba(168,85,247,0.3)',
        'glass':   '0 8px 32px 0 rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'float':      'float 4s ease-in-out infinite',
        'blink':      'blink-cursor 1s step-end infinite',
        'pulse-ring': 'pulse-ring 2s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99,102,241,0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(99,102,241,0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
