var gulp = require('gulp');
var sass = require('gulp-sass');    //compile scss
var globSass = require('gulp-sass-globbing');   //regular express url
var browserSync = require('browser-sync').create(); //create Sever and auto refresh Browser
gulp.task('sass', function () {
    return gulp.src(['app/sass/**/*.scss','!app/sass/**/_*'])
    .pipe(sass())
    .pipe(gulp.dest('app/CSS'))
    .pipe(browserSync.reload({
        stream: true
    }))
});
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});
gulp.task('watch',['browserSync','sass'], function () {
    gulp.watch('app/sass/**/*.scss',['sass']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
