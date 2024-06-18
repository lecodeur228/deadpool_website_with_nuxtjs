/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',  // Ajoute une taille de texte personnalisée
        '11xl': '12rem',  // Vous pouvez ajouter d'autres tailles
        '12xl': '14rem',
      },
  },
  plugins: [],
}
}
