const  gulp = require( 'gulp' );
const  sass = require( 'gulp-sass' );
const  autoprefixer = require('gulp-autoprefixer');
const  cleanCSS = require('gulp-clean-css');
const  browserSync = require( 'browser-sync' ).create();
//const  concat = require('gulp-concat');
//const  uglify = require('gulp-uglify');
//const zip = require('gulp-zip');
//const htmllint = require('gulp-htmllint'),

    function liveReload () {
      browserSync.init({
        server: './app'
      });
      gulp.watch('app/sass/*.scss' , styles);
      gulp.watch('app/*.html').on('change' , browserSync.reload)
    }


function styles() {
       return gulp.src('./app/sass/*.scss')
       .pipe( sass())
       .pipe(autoprefixer(['last 4 versions']))
       .pipe(cleanCSS())
       .pipe( gulp.dest( './app/css' ) )
       .pipe( browserSync.stream())
   }
//function script() {
 // return gulp.src('./app/js/main.js , {allowEmpry: true}')
 // .pipe(gulp.dest('.app/js'))
//}  
function buildCSS()  {
  return gulp.src('./app/css/styles.css')
  .pipe(gulp.dest('.build/css'))
}  
function buildHTML()  {
  return gulp.src('./app/*.html')
  .pipe(gulp.dest('.build'))
}  
function build()  {
  return gulp.parallel(
  buildCSS,
  buildHTML,
  //buildJS
  )
}  
 exports.default = liveReload;

 exports.build = build();

 