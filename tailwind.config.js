/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graysBlack: '#000000',
        graysOne: '#636363',
        graysTwo: '#8E8E8E',
        graysThree: '#B3B3B3',
        graysFour: '#E1E1E1',
        graysFive: '#F5F5F5',
        graysWhite: '#FFFFFF',
        primaryDefault: '#074C4E',
        primaryLight: '#EAF6F6',
        secondaryDefault: '#F86F2D',
        secondaryLight: '#FAE6DD',
        successDefault: '#4ABC86',
        successLight: '#D8FFEC',
        errorDefault: '#D8FFEC',
        errorLight: '#FBECEC',
      },
      fontFamily: {
        satoshiBlack: 'Satoshi-Black',
        satoshiBold: 'Satoshi-Bold',
        satoshiLight: 'Satoshi-Light',
        satoshiMedium: 'Satoshi-Medium',
        satoshiRegular: 'Satoshi-Regular',
      },
    },
  },
  plugins: [],
};
