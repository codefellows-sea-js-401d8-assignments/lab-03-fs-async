const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var testFiles = ['test/test.js'];
var appFiles = ['lib/*.js'];

gulp.task('default', ['lint:app', 'lint:test', 'mocha:test', 'watch' ], () => {
  console.log('Watch is running');
});

gulp.task('mocha:test', () => {
  return gulp.src(testFiles, {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint:app', () => {
  gulp.src(appFiles)
    .pipe(eslint({
  "rules": {
    "no-console": 0,
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
        ],
        "semi": [
          2,
          "always"
        ]
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "before": false,
    "after": false
  },
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
    "impliedStrict": true
  },
  "extends": "eslint:recommended"
}
))
    .pipe(eslint.format());
});

gulp.task('lint:test', () => {
  gulp.src(testFiles)
    .pipe(eslint({
  "rules": {
    "no-console": 0,
    "indent": [
      2,
      2
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
        ],
        "semi": [
          2,
          "always"
        ]
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "before": false,
    "after": false
  },
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
    "impliedStrict": true
  },
  "extends": "eslint:recommended"
}
));
});

gulp.task('watch', () => {
  console.log('Gulp is running');
  gulp.watch('./**/*.js', ['lint:app', 'lint:test', 'mocha:test']);
});
