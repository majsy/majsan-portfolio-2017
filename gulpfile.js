var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-copy');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.babel');
var browserSync = require('browser-sync').create();

gulp.task('copy:static', function () {
    gulp.src(['**/*', '!**/*.scss'], {cwd: 'src'})
        .pipe(copy('dist'));
});

gulp.task('sass', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('babel', function() {
    return gulp.src('src/*/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('webpack', ['babel'], function(callback) {
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ];

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            colors: true,
            progress: true
        }));
        callback();
    });
});

// Watch task
gulp.task('watch', ['browserSync', 'webpack', 'sass'], function(){
    gulp.watch('src/**/*.html', ['copy:static']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', ['webpack']);
    // Other watchers
});