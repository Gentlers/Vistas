//Gruntfile.js
module.exports = function (grunt) {
  grunt.initConfig({

    // Watch task config con Sass
    watch: {
      sass: {
        files: "sass/*.sass",
        tasks: ['sass']
      }
    },
    // Sass task config
    sass: {
        dev: {
            files: {
                // fichero destino  // fichero .scss
                "css/inicio.css" : "sass/inicio.sass",
                "css/registro.css" : "sass/registro.sass",
                "css/explorar.css" : "sass/explorar.sass",
                "css/generales.css" : "sass/generales.sass",
                "css/pronto.css" : "sass/pronto.sass",
                "css/comprar.css" : "sass/comprar.sass",
                "css/perfil.css" : "sass/perfil.sass"
            }
        }
    }

    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

 //Tarea por defecto
 grunt.registerTask('default', ['watch']);
};
