var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint');

gulp.task('app', function() {
  return gulp.src('client/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'App task complete' }));
});

gulp.task('default', function(){
  gulp.start('app');
});
