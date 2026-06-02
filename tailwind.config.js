/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", 'sans-serif'],
        body: ["'DM Sans'", 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      colors: {
        night: '#060612',
        void: '#0a0a1a',
        surface: '#0f0f23',
        'surface-2': '#161630',
        accent: {
          violet: '#7c3aed',
          purple: '#9333ea',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.15), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(124,58,237,0.8)' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(124,58,237,0.3)',
        'glow-blue': '0 0 30px rgba(59,130,246,0.3)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.3)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
