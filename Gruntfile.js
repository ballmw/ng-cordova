module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            temp: {
                src: [
                    '.temp'
                ]
            },
            dist: {
                src: [
                    'dist'
                ]
            }
        },
        concat:{
            mocks: {
                src: [
                    'src/cordova-service-module.js',
                    'src/mocks/*.js'
                ],
                dest: '.temp/dist-mocks.concat.js'
            },
            dist: {
                src: [
                    'src/*.js'
                ],
                dest: '.temp/dist.concat.js'
            }
        },
        ngmin: {
            mocks: {
                src: '.temp/dist-mocks.concat.js',
                dest: '.temp/cordova-services-mocks.js'
            },
            dist: {
                src: '.temp/dist.concat.js',
                dest: '.temp/cordova-services.js'
            }
        },
        uglify: {
            mocks: {
                src: '.temp/cordova-services-mocks.js',
                dest: 'dist/cordova-services-mocks.min.js'
            },
            dist: {
                src: '.temp/cordova-services.js',
                dest: 'dist/cordova-services.min.js'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.mocks.conf.js',
                background: false
            }
        },
        watch: {
            karma: {
                files: ['src/**/*.js', 'test/**/*.js'],
                tasks: ['karma:unit:run']
            }
        },
        replace: {
            version: {
                src: ['src/cordova-service-module.js'],
                overwrite: true,                 // overwrite matched source files
                replacements: [{
                    from: '_VERSION_',
                    to: '<%= pkg.version %>'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');;
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask("default", ["replace","karma", "clean:temp","clean:dist", "concat:mocks", "concat:dist", "ngmin:mocks", "ngmin:dist", "uglify:mocks", "uglify:dist"]);

};