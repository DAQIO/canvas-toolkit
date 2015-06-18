var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');


gulp.task('watch', function(){
  function build(){
    browserify('src/index.js', {debug:true})
        .transform(babelify)
        .bundle()
        .on('error', gutil.log)
        .pipe(fs.createWriteStream('./build/bundle.js'));

    watch('src/**/*.html')
        .pipe(gulp.dest('./build'))
        .on('error', gutil.log);
  }
  build();
  watch('src/**/*.js', build);
  gulp.src('./build/')
      .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: true
      }));

});
