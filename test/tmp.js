var gulp = require('gulp');
const filter = require('gulp-filter');
const print = require('gulp-print').default;
var styleFilter = filter(['**/*.scss', '**/*.css']);
var mainNPMFiles = require('npmfiles');
var npmFiles = mainNPMFiles({
  showWarnings: true,
    overrides: {
      'animate.css': {
            'main': '**/animate.css'
        },
      'toastr': {
        'main': 'toastr.scss'
      }
    }
});
gulp.src(npmFiles).pipe(styleFilter).pipe(print());
