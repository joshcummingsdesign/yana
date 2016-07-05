var gulp        = require('gulp');
var exec        = require('child_process').exec;
var runSequence = require('run-sequence');
var nodemon     = require('gulp-nodemon');
var webpack     = require('webpack-stream');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'localhost:3000',
    port: 8000
  });
});

gulp.task('nodemon', function() {
  var started = false;
  nodemon({
    script: 'server.js',
    ignore: [
      'node_modules/**/*.js',
      'public/**/*.js',
      'src/**/*.js',
      'gulpfile.js',
      'package.json',
      'webpack.config.js'
    ]
  });
});

gulp.task('webpack', function() {
  return gulp.src('src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/scripts/'));
});

gulp.task('webpack-watch', ['webpack'], reload);

gulp.task('watch', function(){
  runSequence('nodemon', 'browser-sync');
  gulp.watch('public/**/*.html').on('change', reload);
  gulp.watch('src/**/*.js', ['webpack-watch']);
});
