module.exports = {
  plugins: [
    require('autoprefixer')({
      // Use browserslist from package.json; no explicit config needed
      cascade: true
    })
  ]
};
