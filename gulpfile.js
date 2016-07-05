var gulp        = require('gulp');
var exec        = require('child_process').exec;
var runSequence = require('run-sequence');
var nodemon     = require('gulp-nodemon');
var webpack     = require('webpack-stream');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    port: 8080
  });
});

gulp.task('nodemon', function(cb) {
  var started = false;
  return nodemon({
    script: 'server.js'
  }).on('start', function() {
    // avoid starting nodemon multiple times
    if (!started) {
      cb();
      started = true;
    }
  });
});

// TODO: This gets nodemon and browsersync running
// TODO: at the same time, need to trigger
// TODO: Browsersync reloads on html changes
// TODO: And webpack builds on js changes

gulp.task('webpack', function() {
  return gulp.src('src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/scripts/'));
});

gulp.task('watch', ['browser-sync'], function() {});
