var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');

//TODO
//ngmin
//test
//uglify
//dist
//bower
var paths = {
    specs: 'test/**/*.js',
    scripts:'src/cordova-mock-services.js'
};

gulp.task('scripts', function () {
    return gulp.src(paths.scripts);
});

gulp.task('test', function () {
    return gulp.src([paths.specs])
        .pipe(jasmine());
});

gulp.task('default', ['scripts','test']);