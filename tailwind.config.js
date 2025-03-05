/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fpt-red': '#e30613',
        'fpt-blue': '#191e67',
        'fpt-orange': '#ff7800',
        'fpt-light-blue': '#f0f5ff',
        'fpt-gray': '#f5f5f5',
      },
    },
  },
  plugins: [],
}
