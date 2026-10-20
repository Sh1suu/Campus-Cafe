import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cafe: {
          bg: '#F8F5FF',
          l100: '#F1ECFC',
          l200: '#E4DAF8',
          l300: '#CDBBF0',
          primary: '#8B6FD6',
          dark: '#6A4FB8',
          text: '#2E2347',
          muted: '#7D7396',
          line: '#E9E2F7',
          pink: '#F6EAF8',
          blue: '#E9EEFB',
          lilac: '#EFE9FB',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
