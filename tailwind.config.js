/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textSecondary: "#eee0ff",
        error: "#DC2626",
        bgPrimary: "#322A58",
        rgbFrom: "#384fde",
        rgbTo: "#985cf0",
        success: "#059669",
      }
    },
  },
  plugins: [],
}