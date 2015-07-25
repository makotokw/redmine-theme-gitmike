/*jshint node: true */
'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

function compass(env) {
    gulp.src('./sass/*.scss')
        .pipe(plugins.compass({
            config_file: 'sass/config.rb',
            environment: env,
            comments: env === 'development',
            style: env === 'development' ? 'expanded' : 'compact',
            css: 'stylesheets',
            sass: 'sass',
            force: env !== 'development'
        }))
        .pipe(plugins.autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('stylesheets'))
        .pipe(reload({stream: true, once: true}));
}

gulp.task('compass', function () {
    compass('production');
});

gulp.task('compass:dev', function () {
    compass('development');
});

gulp.task('browser-sync', function () {
    browserSync({
        port: 3001,
        proxy: "127.0.0.1:3000"
    });
});

gulp.task('browser-sync:reload', function () {
    browserSync.reload();
});

gulp.task('debug', ['compass:dev', 'browser-sync'],
    function () {
        gulp.watch('sass/**/*.scss', ['compass:dev']);
    }
);

gulp.task('default', ['compass']);
