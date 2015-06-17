var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');

gulp.task('build', function(){
  gulp.src('./src/**/*.js')
      .pipe(babel({
        stage:0,
        optional:['runtime']
      }).on('error', gutil.log));
});
