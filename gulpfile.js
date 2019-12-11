const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss into css
function style() {
  return gulp
    .src("./scss/**/*.scss") // 1. scss file location
    .pipe(sass().on("error", sass.logError)) // 2. pass file through sass compiler, Show Error message in the console if something is wrong
    .pipe(gulp.dest("./css")) // 3. where I save the compiled CSS
    .pipe(browserSync.stream()); // 4. stream changes to all browser
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
