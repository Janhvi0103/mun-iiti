/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'grad': 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);',
        
      },
    },
  },
  plugins: [],
}

