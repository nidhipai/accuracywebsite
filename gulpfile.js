var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleancss =require("gulp-clean-css");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", () => {
    return gulp.src("sass/*")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat("style.css"))
        .pipe(cleancss())
        .pipe(sourcemaps.write())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest('./public/stylesheets/'))
})

gulp.task("watch", () => {
    gulp.watch("sass/*", ["sass"])
})