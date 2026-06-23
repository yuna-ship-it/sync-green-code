export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff41',
        'cyber-cyan': '#00ffff',
        'cyber-magenta': '#ff00ff',
        'cyber-yellow': '#ffff00'
      },
      animation: {
        'marquee': 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
