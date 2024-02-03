/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/hero-pattern.svg')",
      },
      opacity: {
        '10': '0.1',
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'general': ['General Sans', 'sans-serif'],
      },
      colors: {
        color: {
          base: 'var(--theme-color)',
        },
        'gray1': '#868686',
        'gray2': '#DFDFDF',
      },
      fontWeight: {
        'medium': '500',
      },
      boxShadow: {
        'search': '0px 4px 0px rgba(0, 0, 0, 0.05)',
      },
    },
    
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}

