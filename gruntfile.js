module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['style.scss'],
          dest: 'src/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'src/js/*.js',
            'src/css/style.css',
            'src/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: 'src/'
        }
      }
    }
  })

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-browser-sync')

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch'])
}
