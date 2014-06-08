// Generated on 2014-06-07 using generator-ionic 0.3.5
'use strict';

var _ = require('lodash');
var path = require('path');
var cordova = require('cordova');
var spawn = require('child_process').spawn;

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: 'www',
      scripts: 'scripts',
      styles: 'styles',
      images: 'images'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.app %>/<%= yeoman.scripts %>/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['<%= yeoman.app %>/<%= yeoman.styles %>/**/*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '<%= yeoman.app %>/templates/**/*.html',
          '.tmp/<%= yeoman.styles %>/**/*.css',
          '<%= yeoman.app %>/<%= yeoman.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729,
        middleware: function (connect, options) {
          var optBase = (typeof options.base === 'string') ? [options.base] : options.base;
          return [require('connect-modrewrite')([
            '^/API/(.*)$ http://163.29.191.132/API/$1 [P]'
            // http://163.29.191.132/API/poi.ashx?Type=title&Category_ID=&lang_id=1
            // http://163.29.191.132/API/news.ashx?type=title&news_class=1
            ])].concat(
            optBase.map(function(path){ return connect.static(path); }));
        }
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      coverage: {
        options: {
          port: 9002,
          open: true,
          base: ['coverage']
        }
      }
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },

  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      // 'clean:server',
      'bower-install',
      // 'concurrent:server',
      // 'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });
};
