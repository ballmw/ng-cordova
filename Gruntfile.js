module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        clean: {
            temp: {
                src: [
                    'dist'
                ]
            }
        },
        ngmin: {
            js: {
                src: 'src/*.js',
                dest: 'dist/*.js'
            }
        },
        uglify: {
            js: {
                src: 'dist/*.js',
                dest: 'dist.js'
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
                files: ['src/*.js', 'test/*.js'],
                tasks: ['karma:unit:run']
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


    grunt.registerTask("watcher", ["test"]);
    grunt.registerTask("default", ["ngmin", "uglify"]);

};