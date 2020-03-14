var gulp = require('gulp');
var tsProject = require('gulp-typescript');

function ts() {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./dist'))
}

function watch() {
    gulp.watch('src/**/*.ts', ts)
}

exports.ts = ts;
exports.watch = watch;
