/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    {
      pattern: /(bg|text)-.+/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

