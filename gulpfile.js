var gulp = require('gulp');
var shell = require('gulp-shell');


gulp.task('serve', shell.task([
  'ionic serve'
]));

gulp.task('emulate-ios', shell.task([
  'ionic emulate ios'
]));

gulp.task('emulate-android', shell.task([
  'ionic emulate android'
]));

gulp.task('run-android', shell.task([
  'ionic run android'
]));

gulp.task('copy-img', function () {
  return gulp.src(['app/img/**/*'])
    .pipe(gulp.dest('www/img'));
});

gulp.task('copy-index', function () {
  return gulp.src(['index.html'])
    .pipe(gulp.dest('www'));
});

gulp.task('copy', ['copy-img', 'copy-index']);

gulp.task('default', ['copy', 'serve']);
