const { series, watch, src, dest, parallel  } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const webserver = require('gulp-webserver');

function css() {
  return src('./app/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({ overrideBrowserslist: ['last 1 version', 'IE 10'] })
    ]))
    .pipe(dest('./app/css'));
}

function devServer() {
  return src('./app')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
}

exports.dev = () => {
  devServer();
  css();
  watch('./app/scss/**/*.scss', series(css));
};
