module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
    extend: {
      colors: {
        'not-white': '#E0DED3',
        'not-black': '#181C1F',
        'not-blue': '#22cbff',
        'not-red': '#CB3C45',
        'not-green': '#48D597',
        'not-pink': '#E86886',
        'not-yellow': '#F5CF65',
        'almost-black': '#0B1418',
        twitter: '#1DA1F2',
      },
    },
  },
  plugins: [],
}
