module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
      build: {
        files: {
          'css/dev/main.css': 'css/dev/main.scss'
        }
      }
    },

    autoprefixer: {
      build: {
        options: {
          browsers: ['last 3 versions']
        },
        src: 'css/dev/main.css',
        dest: 'css/dev/main-prefixed.css'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.css': 'css/dev/main-prefixed.css'
        }
      }
    },

    uglify: {
      options: {
        preserveComments: 'some',
        mangle: {
          except: [
            'js/dev/plugins.js'
          ]
        }
      },
      build: {
        files: {
          'js/main.min.js': ['js/dev/plugins.js', 'js/dev/main.js']
        }
      }
    },

    watch: {
      sasscss: {
        files: ['css/dev/*.scss'],
        tasks: ['sass:build', 'autoprefixer', 'cssmin', 'notify:sass'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['js/dev/main.js','js/dev/plugins.js'],
        tasks: ['uglify', 'notify:js'],
        options: {
          spawn: false
        }
      }
    },

    notify: {
      sass: {
        options: {
          title: 'Stylesheets are ready!',
          message: 'Your sass files are successfully compiled.'
        }
      },
      js: {
        options: {
          title: 'Scripts are now very ugly!',
          message: 'Your js files are successfully uglified.'
        }
      },
      imagemin: {
        options: {
          title: 'Images are ready!',
          message: 'Your images are successfully compressed.'
        }
      }
    }

  }); 

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);

};