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
        notwhite: '#E0DED3',
        notblack: '#181C1F',
        notblue: '#22CBFF',
        notred: '#CB3C45',
      },
    },
  },
  plugins: [],
}
