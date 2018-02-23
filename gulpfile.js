var autoprefixer = require('autoprefixer');
var concat       = require('gulp-concat');
var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

// Process sass files and output prefixed css
gulp.task('styles', function(done) {
    gulp.src('./src/Styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/'));

    done();
});

// Tell gulp to execute 'styles' every time a sass file changes
gulp.task('watch', function() {
    gulp.watch('**/*.{sass,scss}', ['styles']);
});

// Start django server and start watching sass files
gulp.task('default', ['watch']);
