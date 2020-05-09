const { series, watch, src, dest, parallel  } = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

function css() {
  return src('./app/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
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
