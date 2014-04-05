var LIVERELOAD_PORT = true;

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        compass: {
            options: {
                basePath: './sass/'
            },
            dev: {
                options: {
                    environment: 'development'
                }
            },
            prod: {
                options: {
                    environment: 'production',
                    force: true
                }
            }
        },
        watch: {
            sass: {
                files: ['./sass/*.scss'],
                tasks: ['compass:dev']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: ['javascripts/*.js', 'stylesheets/*.css']
            }
        }
    });

    grunt.registerTask('build', [
        'compass:prod'
    ]);

    grunt.registerTask('debug', [
        'compass:dev',
        'watch'
    ]);

    grunt.registerTask('default', ['build']);
};