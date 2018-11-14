var autoprefixer = require('autoprefixer');
var concat       = require('gulp-concat');
var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

// Process sass files and output prefixed css
function styles() {
    return (gulp
            .src('./src/Styles/main.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('main.css'))
            .pipe(sourcemaps.init())
            .pipe(postcss([autoprefixer() ]))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./src/'))
            );
};


// // Tell gulp to execute 'styles' every time a sass file changes
function watch() {
    styles();
    gulp.watch('**/*.{sass,scss}', styles);
};

gulp.task('default', function() {
    watch();
})
