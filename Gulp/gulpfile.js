var gulp = require('gulp');
var sass = require('gulp-sass');
var globSass = require('gulp-sass-globbing');
gulp.task('sass', function () {
    return gulp.src(['app/sass/**/*.scss','!app/sass/**/_*']);
    .pipe(sass());
    .pipe(gulp.dest('app/CSS'))
});
