module.exports = function (grunt) {

  grunt.initConfig({
    sprite:{
      md: {
        src: 'images/png-47/*.png',
        dest: 'images/sprites/flags-47.png',
        destCss: 'css/flags-47.css'
      },
      sm: {
        src: 'images/png-16/*.png',
        dest: 'images/sprites/flags-16.png',
        destCss: 'css/flags-16.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
};
