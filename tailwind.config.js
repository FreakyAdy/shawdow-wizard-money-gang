/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swmg: {
          bg: '#05010a',
          card: '#0f051c',
          dark: '#0a0314',
          border: '#2e1065',
          neon: '#00ff66',
          'neon-dim': '#00cc52',
          slime: '#39ff14',
          purple: '#9333ea',
          violet: '#a855f7',
          gold: '#ffd700',
          cash: '#10b981',
          danger: '#ff0055',
        }
      },
      fontFamily: {
        medieval: ['"MedievalSharp"', 'cursive'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        pixel: ['"VT323"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow 2.5s infinite ease-in-out',
        'float-slow': 'float 6s infinite ease-in-out',
        'float-reverse': 'floatRev 7s infinite ease-in-out',
        'glitch': 'glitch 1s infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(0, 255, 102, 0.6))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 45px rgba(0, 255, 102, 0.4))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      }
    },
  },
  plugins: [],
}
