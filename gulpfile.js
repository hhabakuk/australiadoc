var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var concatCss = require('gulp-concat-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var es = require('event-stream');

gulp.task('server', function(){
  connect.server({
    livereload: true
  }); 
})

// gulp.task('browserify', function (){
//   return browserify('./src/scripts/app.js')
//   .bundle()
//   .pipe(source('*.js'))
//   .pipe(gulp.dest('./build/scripts/'))
//   .pipe(connect.reload());
// });

// gulp.task('minifyjs', function (){
//   gulp.src('./src/scripts/*.js')
//   .pipe(uglify())
//   .pipe(gulp.dest('./build/scripts/'));
// });
 
gulp.task('html', function(){
  gulp.src('./*.html')
  .pipe(connect.reload());
});

// gulp.task('imagemin', function () {
//   var imgSrc = './scr/images/**/*',
//       imgDst = './build/images/**/*';
//   gulp.src(imgSrc)
//   .pipe(changed(imgDst))
//   .pipe(imagemin())
//   .pipe(gulp.dest(imgDst));
// })

gulp.task('style', function() {
  gulp.src('./src/styles/*.scss')
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(concatCss("style.css"))
  .pipe(gulp.dest('./build/styles/'))
  .pipe(connect.reload());
});

// gulp.task('globify', function(done){
//   glob('./src/*.js', function(err, files){
//     if (err) done(err);

//     var tasks = files.map(function(entry){
//       return browserify({ entries: [entry]})
//         .bundle()
//         .pipe(source(entry))
//         .pipe(gulp.dest('./build/scripts'))
        

//     });
//     es.merge(tasks).on('end', done);
//   })
// });







gulp.task('watch', function(){
  gulp.watch('./src/styles/*.scss', ['style']);
  // gulp.watch('./src/scripts/*.js', ['browserify']);
  gulp.watch(['./*.html'],['html']); 
});



gulp.task('default', ["server", "watch"]);


// npm install gulp gulp-autoprefixer gulp-autoprefixer gulp-changed gulp-connect gulp-imagemin gulp-plumber gulp-sass vinyl-source-stream gulp-uglify browserify --save-dev
// npm install jquery underscore --save