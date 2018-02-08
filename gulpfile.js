'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var change = require('gulp-change');

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./public",
        serveStatic: ['.', './public'],
    });

    gulp.watch("./src/scss/**/*.scss", ['sass']);
    gulp.watch("./public/**/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/main.scss', {
        trace: true,
        verbose: true
    })
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);