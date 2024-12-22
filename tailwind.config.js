/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Include Vite-supported file types
];
export const theme = {
  extend: {
    colors: {
      webOrg: "#DB4444", // Custom color for the project
    },
  },
};
export const plugins = [
  require('tailwind-scrollbar-hide'),
  require('autoprefixer'),
];

