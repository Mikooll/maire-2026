/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales du site - Facilement modifiables
        primary: {
          50: '#fdf6f1',
          100: '#fbeadd',
          200: '#f6d4ba',
          300: '#f0b88e',
          400: '#e09461',
          500: '#C06736', // Couleur principale - Terracotta
          600: '#a8552b',
          700: '#8d4524',
          800: '#733921',
          900: '#5f301f',
        },
        secondary: {
          50: '#f8f6f3',
          100: '#efe9e3',
          200: '#ded3c6',
          300: '#c8b5a1',
          400: '#a98b6f',
          500: '#7A5F44', // Couleur secondaire - Marron
          600: '#6a5139',
          700: '#574230',
          800: '#49372a',
          900: '#3d2f24',
        },
        accent: {
          50: '#fdf6f1',
          100: '#fbeadd',
          200: '#f6d4ba',
          300: '#f0b88e',
          400: '#e09461',
          500: '#C06736', // Couleur d'accent
          600: '#a8552b',
          700: '#8d4524',
          800: '#733921',
          900: '#5f301f',
        },
      },
    },
  },
  plugins: [],
}

