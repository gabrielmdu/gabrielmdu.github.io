module.exports = {
  purge: {
    content: [
      './src/*.js',
      './src/**/*.js',
      './public/index.html'
    ],
    whitelistPatterns: [/gs-/]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
