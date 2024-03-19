module.exports = function (grunt) {
  grunt.initConfig({
    // Configuración de las tareas
    sass: {
      // Configuración para la compilación de Sass
      dist: {
        options: {
          style: "expanded", // Opciones de compilación de Sass
        },
        files: {
          "dist/css/styles.css": "src/scss/styles.scss", // Archivo de origen y destino
        },
      },
    },
    concat: {
      // Configuración para la concatenación de archivos JavaScript
      dist: {
        src: ["src/js/*.js"], // Archivos de origen
        dest: "dist/js/script.js", // Archivo de destino
      },
    },
    uglify: {
      // Configuración para la minificación de archivos JavaScript
      dist: {
        files: {
          "dist/js/script.min.js": ["dist/js/script.js"], // Archivo de origen y destino
        },
      },
    },
    copy: {
      // Configuración para copiar archivos HTML
      dist: {
        files: [
          { expand: true, cwd: "src/", src: ["index.html"], dest: "dist/" }, // Archivo de origen y destino
        ],
      },
    },
  });

  // Carga de los plugins de Grunt necesarios
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Registro de las tareas
  grunt.registerTask("default", ["sass", "concat", "uglify", "copy"]);
};
