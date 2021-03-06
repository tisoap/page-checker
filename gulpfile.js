// Node modules
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/**
 * Build extension for all browsers.
 */
gulp.task('default', ['copy-firefox', 'copy-chrome'], () => {
  return;
});

/**
 * Copy firefox specific files.
 */
gulp.task('copy-firefox', ['copy-browser'], () => {
  return gulp.src(['vendor/firefox/**/*'])
    .pipe(gulp.dest('build/firefox/'));
});

/**
 * Copy chrome specific files.
 */
gulp.task('copy-chrome', ['copy-browser'], () => {
  return gulp.src(['vendor/chrome/**/*'])
    .pipe(gulp.dest('build/chrome/'));
});

/**
 * Copy common build files to browser specific folders.
 */
gulp.task('copy-browser', ['copy-common', 'compile-sass', 'pack-tidy'], () => {
  return gulp.src(['build/common/**/*'])
    .pipe(gulp.dest('build/firefox/'))
    .pipe(gulp.dest('build/chrome/'));
});

/**
 * Compiles Sass into CSS.
 */
gulp.task('compile-sass', ['build-clean'], () => {
  return gulp.src('styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/common/styles/'));
});

/**
 * Packs the HTML5 Tidy library into a single, web worker ready file.
 */
gulp.task('pack-tidy', ['build-clean'], () => {
  return gulp.src([
    'node_modules/tidy-html5/tidy.js',
    'libraries/tidy-worker.js'])
    .pipe(concat('tidy-worker.js'))
    .pipe(gulp.dest('build/common/libraries/'));
});

/**
 * Builds all files folders that are common to all browsers.
 */
gulp.task('copy-common', [
  'copy-source',
  'copy-images',
  'copy-pages',
  'copy-fonts',
], () => {
  return;
});

/**
 * Copy fonts folder to build folder, but skip Markdown files.
 */
gulp.task('copy-fonts', ['build-clean'], () => {
  return gulp.src(['fonts/**/*', '!fonts/**/*.md'])
    .pipe(gulp.dest('build/common/fonts/'));
});

/**
 * Copy HTML pages folder to build folder, but skip Markdown files.
 */
gulp.task('copy-pages', ['build-clean'], () => {
  return gulp.src(['pages/**/*', '!pages/**/*.md'])
    .pipe(gulp.dest('build/common/pages/'));
});

/**
 * Copy JS source folder to build folder, but skip Markdown files.
 */
gulp.task('copy-source', ['build-clean'], () => {
  return gulp.src(['source/**/*', '!source/**/*.md'])
    .pipe(gulp.dest('build/common/source/'));
});

/**
 * Copy images folder to build folder, but skip Markdown files.
 */
gulp.task('copy-images', ['build-clean'], () => {
  return gulp.src(['images/**/*', '!images/**/*.md'])
    .pipe(gulp.dest('build/common/images/'));
});

/**
 * Cleans build folder by deleting everything inside it,
 * but not the folder itself or any markdown files.
 */
gulp.task('build-clean', () => {
  return del(['build/**', '!build', '!build/*.md']);
});
