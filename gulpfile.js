// Node modules
const gulp = require('gulp');
const del = require('del');

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
  return gulp.src(['vendor/firefox/manifest.json'])
    .pipe(gulp.dest('build/firefox/'));
});

/**
 * Copy chrome specific files.
 */
gulp.task('copy-chrome', ['copy-browser'], () => {
  return gulp.src(['vendor/chrome/manifest.json'])
    .pipe(gulp.dest('build/chrome/'));
});

/**
 * Copy common build files to browser specific folders.
 */
gulp.task('copy-browser', ['copy-common'], () => {
  return gulp.src(['build/common/**/*'])
    .pipe(gulp.dest('build/firefox/'))
    .pipe(gulp.dest('build/chrome/'));
});

/**
 * Builds all files folders that are common to all browsers.
 */
gulp.task('copy-common', [
  'copy-source',
  'copy-styles',
  'copy-images',
  'copy-pages',
], () => {
  return;
});

/**
 * Copy CSS styles folder to build folder, but skip Markdown files.
 */
gulp.task('copy-styles', ['build-clean'], () => {
  return gulp.src(['styles/**/*', '!styles/**/*.md'])
    .pipe(gulp.dest('build/common/styles/'));
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
