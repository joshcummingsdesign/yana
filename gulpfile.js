var gulp         = require('gulp');
var exec         = require('child_process').exec;
var runSequence  = require('run-sequence');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var nodemon      = require('gulp-nodemon');
var webpack      = require('webpack-stream');
var sass         = require('gulp-sass');
var cssnano      = require('gulp-cssnano');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'localhost:8080'
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


gulp.task('sass', function() {
  gulp.src('src/assets/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: [
        'last 2 versions',
        'ie 8',
        'ie 9',
        'android 2.3',
        'android 4',
        'opera 12'
      ]
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/styles/'))
    .pipe(browserSync.stream());
});


gulp.task('watch', function(){
  runSequence(
    ['webpack', 'sass'],
    'nodemon',
    'browser-sync'
  );
  gulp.watch('public/**/*.html').on('change', reload);
  gulp.watch('src/**/*.js', ['webpack-watch']);
  gulp.watch('src/assets/styles/**/*.scss', ['sass']);
});


gulp.task('default', function() {
  runSequence(
    ['webpack', 'sass']
  );
});
