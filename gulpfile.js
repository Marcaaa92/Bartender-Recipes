// Main config file
const config = require('./gulpfile.config.js');

// Global
const gulp = require('gulp');

// CSS
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const minifycss = require('gulp-uglifycss');
const mmq = require('gulp-merge-media-queries');
const sass = require('gulp-sass')(require('sass'));
// END CSS

//js
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
//js
// UTILITY
const beep = require('beepbeep');
const browserSync = require('browser-sync').create();
const filter = require('gulp-filter');
const lineec = require('gulp-line-ending-corrector');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const remember = require("gulp-remember");
// END UTILITY


// ERROR Handler
const errorHandler = r => {
	notify.onError( '❌ ERROR:\n\n<%= error.message %>\n' )( r );
	beep();
};

// BROWSER SYNC : aggiornamento automatico del browser quando modifichiamo i file
const livereload = done => {
	browserSync.init({
        server: {
            baseDir: 'dist',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
		open: config.browserAutoOpen,
		injectChanges: config.injectChanges,
		watchEvents: [
            'change',
            'add',
            'unlink',
            'addDir',
            'unlinkDir'
        ]
	});
	done();
};

// Helper function to allow browser reload with Gulp 4.
// const reload = done => {
// 	browserSync.reload();
// 	done();
// };

/**
 * Task: `html`
 */
gulp.task('html', () => {
    return gulp
        .src(
            config.htmlSRC, {
                allowEmpty: true
            }
        )
        .pipe( plumber( errorHandler ) )
        .pipe(
            gulp.dest( config.htmlDST )
        )
        .pipe( browserSync.stream() )
});

/**
 * Task: `styles`.
 */
gulp.task('styles', () => {
    return gulp
        .src(config.styleSRC, {
            allowEmpty: true
        })
        .pipe(plumber(errorHandler))
        .pipe(
			sass({
				errLogToConsole: config.errLogToConsole,
				outputStyle: config.outputStyle,
				precision: config.precision
			})
		)
        .on( 'error', sass.logError )
        .pipe(
            autoprefixer( config.BROWSERS_LIST )
        )
        .pipe( lineec() )
        .pipe( gulp.dest( config.styleDST ) )
        .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
        .pipe( mmq() )
        .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
        .pipe( rename({
                suffix: '.min'
            })
        )
		.pipe( minifycss() )
		.pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
		.pipe( gulp.dest( config.styleDST ) )
		.pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
		.pipe( browserSync.stream() ) // Reloads style.min.css if that is enqueued.
});
gulp.task("scripts", ()=>{
    return gulp
    .src(config.scriptsSRC, {
        since: gulp.lastRun("scripts")
    })
    .pipe(plumber(errorHandler))
    .pipe(remember(config.scriptsSRC))
    .pipe(uglify())
    .pipe(lineec())
    .pipe(gulp.dest(config.scriptsDST))
    .pipe(browserSync.stream())
});
gulp.task(
    'default',
    gulp.parallel(
        'html',
        'styles',
        'scripts',
        livereload, () => {
            gulp.watch( config.htmlWATCH, gulp.parallel('html') );
            gulp.watch( config.styleWATCH, gulp.parallel('styles') );
            gulp.watch( config.scriptsWATCH, gulp.parallel('scripts') );
        }
    )
);
