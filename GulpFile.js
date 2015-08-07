/* Gulp */
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

/* browserify */
var browserify = require('browserify');
var riotify = require('riotify');
var babelify = require('riotify');
var browserifyShim = require('browserify-shim');

/* vinyl */
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var config = {
    entry: './src/index.js', 
    output: {
      filename: 'riot-mdl.js',
      path: './'
    }
};

function wiredep () {
    return require('wiredep')({ });
}

function moduleNames () {

    var dep = wiredep();  

    var modules = [];

    for(var module in dep.packages) modules.push(module);

    return modules;
}

function compile() {
  
  var bundler = browserify(config.entry, { debug: true })
                  .transform(riotify, { type: 'es6' })
                  .transform(browserifyShim) ;

  moduleNames().forEach(function (moduleName) {
    console.log('External.: ' + moduleName);
    
    bundler.external(moduleName);
  });

  return bundler.bundle()
          .on('error', function(err) { console.error(err); this.emit('end'); })
          .pipe(source(config.output.filename))
          .pipe(buffer())
          .pipe(sourcemaps.init({ loadMaps: true }))
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest(config.output.path));
}

gulp.task('build', function() { 
    return compile(); 
});

gulp.task('default', ['build']);