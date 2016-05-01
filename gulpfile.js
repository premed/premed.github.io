var gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-ruby-sass');

gulp.task('styles', function () {
  return sass('sass/*.sass')
    .on('error', sass.logError)
    .pipe(gulp.dest('css'));
});

gulp.task('scripts', function(){
   gulp.src('js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('minjs'));
});

gulp.task('watch', function(){
   gulp.watch('js/*.js', ['scripts']);
   gulp.watch('sass/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
