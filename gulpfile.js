var gulp = require('gulp');
var gulpConnect = require('gulp-connect');

gulp.task('server', function() {
  gulpConnect.server({
    root: './',
    port: 8888,
    livereload: true
  });
});

gulp.task('js', function() {
  gulp.src(['src/*.js', 'src/scripts/app.js', 'src/scripts/**/*.js'])
    .pipe(gulpConnect.reload());
});

gulp.task('css', function() {
  gulp.src(['src/*.css', 'src/**/*.css'])
    .pipe(gulpConnect.reload());
});

gulp.task('html', function() {
  gulp.src(['index.html', 'src/**/*.html'])
    .pipe(gulpConnect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['src/*.js', 'src/scripts/app.js', 'src/scripts/**/*.js'], ['js']);
  gulp.watch(['src/*.css', 'src/**/*.css'], ['css']);
  gulp.watch(['index.html', 'src/**/*.html'], ['html']);
});

gulp.task('default', ['server', 'watch']);
