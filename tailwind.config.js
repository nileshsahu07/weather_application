/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/Media/bg.jpg')",
        "imagetwo":"url('/src/Media/right.jpg')"
      },
    },
  },
  plugins: [],
}

