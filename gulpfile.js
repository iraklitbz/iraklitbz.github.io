var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

//tarea scss

gulp.task("sass", function() {
  return gulp
    .src("./css/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

/*Tarea que se ejecuta siempre*/
gulp.task("watch", function() {
  gulp.watch("./css/style.scss", ["sass"]);
});

gulp.task("default", ["watch", "sass"]);
