module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#00003F',
      'white': '#ffffff',
      'black': '#323232',
      'gray': '#E5E5E5',
      'lightGray': '#F8F8F8',
      'border': '#979797',
      'darkblue': '#185A83',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [],
}