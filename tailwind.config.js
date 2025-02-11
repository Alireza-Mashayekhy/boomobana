module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#EA5A25',
          2: '#126736'
        },
        secondary: {
          1: '#000',
          2: '#0D0D0D',
          3: '#1A1A1A',
          4: '#262626',
          5: '#333333',
          6: '#404040',
          7: '#4D4D4D',
          8: '#595959',
          9: '#666666',
          10: '#737373',
          11: '#808080',
          12: '#8C8C8C',
          13: '#999999',
          14: '#A6A6A6',
          15: '#B3B3B3',
          16: '#BFBFBF',
          17: '#CCCCCC',
          19: '#D9D9D9',
          20: '#E6E6E6',
          21: '#F2F2F2',
          22: '#fff'
        }
      }
    }
  },
  plugins: []
};
