const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var testFiles = ['lab-vien/test/*.js'];
var appFiles = ['lab-vien/lib/**/*.js', 'lab-vien/bin/**'];

gulp.task('lint:app', () => {
  return gulp.src(appFiles)
  .pipe(eslint({
    rules: {
      'no-console': 0,
      'indent': [
        2,
        2
      ],
      'quotes': [
        2,
        'single'
      ],
      'linebreak-style': [
        2,
        'unix'
      ],
      'semi': [
        2,
        'always'
      ]
    },
    env: {
      'es6': true,
      'node': true,
      'browser': true
    },
    global: {
      'describe': false,
      'it': false,
      'beforeEach': false,
      'afterEach': false,
      'before': false,
      'after': false
    },
    ecmaFeatures: {
      'modules': true,
      'experimentalObjectRestSpread': true,
      'impliedStrict': true
    },
    extends: 'eslint:recommended'
  }))
  .pipe(eslint.format());
});

gulp.task('files:watch',function() {
  gulp.watch('./lab-vien/**/**/**',['default']);
});

gulp.task('default', ['lint:app'], () => {
  return gulp.src(testFiles)
  .pipe(mocha({reporter: 'nyan'}));
});
