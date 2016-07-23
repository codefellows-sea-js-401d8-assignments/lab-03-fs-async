const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const testFiles = ['./test/test.js'];
const appFiles = ['./lib/readFiles.js', './bin/readFilesCLI.js'];

gulp.tast('default', ['eslint', 'mocha'], () => {
  console.log('default for eslint and mocha');
});

gulp.task('eslint', () => {
  gulp.src(appFiles)
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
      envs: [
        'es6',
        'node',
        'browser'
      ],
      globals: [
        'describe',
        'it',
        'beforeEach',
        'afterEach',
        'before',
        'after'
      ],
      ecmaFeatures: {
        'modules': true,
        'experimentalObjectRestSpread': true,
        'impliedStrict': true
      },
      extends: 'eslint:recommended'
    }))
        .pipe(eslint.format());
});

gulp.task('mocha', () => {
  gulp.src(testFiles)
    .pipe(mocha());
});

gulp.watch('./*', ['eslint', 'mocha']);
