module.exports = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx,html}',
    './components/**/*.{ts,tsx,js,jsx,html}',
    './src/**/*.{ts,tsx,js,jsx,html}',
    './src/app/**/*.{ts,tsx,js,jsx,html}',
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./src/app/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false,
  theme: {
      extend: {}
    },
    variants: {
      extend: {}
    },
    plugins: [],
  };