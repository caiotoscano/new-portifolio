/** @type {import('tailwindcss').Config} */
// 1. Importamos a 'fontFamily' do tema padrão do Tailwind.
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Code Pro"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}