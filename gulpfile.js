'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');

function errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
}

/**
 * scss
 */
gulp.task('scss', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(plumber({errorHandler: errorAlert}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('assets/css'));
});

/**
 * default
 */
gulp.task('default', function () {
    gulp.watch('assets/scss/**/*.scss', ['scss']);
});