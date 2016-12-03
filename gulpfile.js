var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

//Watch task
gulp.task('watch', ['sass'], function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
    // Other watchers
})