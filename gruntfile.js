module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js//dest/script.main.js'
            }
        },
        uglify: {
            dist: {
                src: ['js/dest/script.main.js'],
                dest: 'js/dest/script.main.min.js'
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat','uglify']);

};