const { watch, series, task, src, dest } = require('gulp');
const sass                               = require('gulp-sass');
const autoprefixer                       = require('gulp-autoprefixer');
const plumber                            = require('gulp-plumber');

const convertToCss = () =>
  src('./src/**/*.scss')
      .pipe(plumber())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer())
      .pipe(dest('./public/'));

const watchSass = () =>
  watch('./src/**/*', convertToCss);

exports.default = watchSass;