/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F2EFE8',
        ink: '#161513',
        'ink-soft': '#3A3631',
        stone: '#8A857D',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
