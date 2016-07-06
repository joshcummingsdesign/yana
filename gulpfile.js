var gulp           = require('gulp');
var exec           = require('child_process').exec;
var path           = require('path');
var fs             = require('fs');
var del            = require('del');
var runSequence    = require('run-sequence');
var watch          = require('gulp-watch');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;
var nodemon        = require('gulp-nodemon');
var webpack        = require('webpack-stream');
var concat         = require('gulp-concat');
var uglify         = require('gulp-uglify');
var sass           = require('gulp-sass');
var cssnano        = require('gulp-cssnano');
var sourcemaps     = require('gulp-sourcemaps');
var autoprefixer   = require('gulp-autoprefixer');
var imagemin       = require('gulp-imagemin');
var mainBowerFiles = require('main-bower-files');
var rename         = require('gulp-rename');


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
    .pipe(gulp.dest('public/scripts'));
});


gulp.task('webpack-watch', ['webpack'], reload);


gulp.task('clear-bower', function () {
  return del(['src/assets/scripts/vendor', 'src/assets/styles/vendor']);
});


gulp.task('build-bower-js', function() {
  return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(gulp.dest('src/assets/scripts/vendor'));
});


gulp.task('concat-bower-js', function() {
  return gulp.src('src/assets/scripts/vendor/*.js')
    .pipe(uglify())
    .pipe(concat('vendor.bundle.js'))
    .pipe(gulp.dest('public/scripts'));
});


var importRule = '@import ';


gulp.task('build-bower-sass', function() {
  return gulp.src(mainBowerFiles('**/*.{css,scss}'))
    .pipe(rename(function(path) {
      importRule += "'" + path.basename + "', ";
      path.basename = '_' + path.basename;
      path.extname = ".scss";
    }))
    .pipe(gulp.dest('src/assets/styles/vendor'));
});


gulp.task('bower-sass-manifest', function() {
  importRule = importRule.replace(/,\s*$/, '');
  importRule += ';';
  return fs.writeFile('src/assets/styles/vendor/_vendor.scss', importRule, function(err) {
    if(err) {
      return console.log(err);
    }
  });
});


gulp.task('bower', function() {
  runSequence('clear-bower', 'build-bower-js', 'concat-bower-js', 'build-bower-sass', 'bower-sass-manifest', 'sass');
});


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
    .pipe(gulp.dest('public/styles'))
    .pipe(browserSync.stream());
});


gulp.task('clear-images', function () {
  return del(['public/images']);
});


gulp.task('build-images', function() {
  gulp.src('src/assets/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('public/images'));
});


gulp.task('images', function() {
  runSequence('clear-images', 'build-images');
});


var build = ['webpack', 'bower', 'images'];


gulp.task('watch', function(){
  runSequence(
    build,
    'nodemon',
    'browser-sync'
  );
  gulp.watch('public/**/*.html').on('change', reload);
  gulp.watch(['src/**/*.js', '!src/assets/**/*.js'], ['webpack-watch']);
  gulp.watch('src/assets/styles/**/*.scss', ['sass']);
  watch('src/assets/images/*', function() {
    gulp.start('images');
  });
});


gulp.task('default', function() {
  runSequence(build);
});
