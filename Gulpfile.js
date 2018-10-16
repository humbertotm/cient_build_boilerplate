var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('default', (done) => {
  runSequence('clean', 'buildStaticFiles', () => {
    done();
  })
});

gulp.task('buildStaticFiles', [ 'buildStyles', 'copyIndexHtml' ]);

gulp.task('clean', () => {
  return gulp.src('dist/', { read: false })
    .pipe(clean())
});

gulp.task('buildStyles', () => {
  return gulp.src('./styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
});

gulp.task('copyIndexHtml', () => {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('dist/'))
});