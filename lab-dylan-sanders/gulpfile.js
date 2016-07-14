const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var testFiles = ['test/**/*.js'];
var appFile = ['lib/**/*.js'];

gulp.task('lint:all', () => {
  gulp.src(appFile)
    .pipe(eslint())
    .pipe(eslint.format());
  gulp.src(appFile)
    .pipe(eslint())
    .pipe(eslint.format());
  gulp.src(appFile)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha:app', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.task('default', ['lint:all', 'mocha:app']);
