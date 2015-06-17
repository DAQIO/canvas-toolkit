var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');

gulp.task('watch', function(){
  gulp.src('src/**/*.js')
      .pipe(watch('src/**/*.js'))
      .pipe(babel({
        stage: 0,
        optional:['runtime']
      }).on('error', gutil.log))
      .pipe(gulp.dest('./build/'))
  gulp.src('src/**/*.html')
      .pipe(watch('src/**/*.html'))
      .pipe(gulp.dest('./build'))
      .on('error', gutil.log);

  gulp.src('./build/')
      .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: true
      }));
});
