/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        honeyglow : '#EAB543',
        whitepepper : '#F8EFBA',
        peach : '#FD7272',
        sasquatch : '#FC427B'
      },
    },
  },
  plugins: [],
}