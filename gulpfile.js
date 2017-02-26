// Node modules
const gulp = require('gulp');
const del = require('del');

/**
 * Runs all tasks;
 */
gulp.task('default', [
  'copy-source',
  'copy-styles',
  'copy-manifest',
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
    .pipe(gulp.dest('build/styles/'));
});

/**
 * Copy HTML pages folder to build folder, but skip Markdown files.
 */
gulp.task('copy-pages', ['build-clean'], () => {
  return gulp.src(['pages/**/*', '!pages/**/*.md'])
    .pipe(gulp.dest('build/pages/'));
});

/**
 * Copy JS source folder to build folder, but skip Markdown files.
 */
gulp.task('copy-source', ['build-clean'], () => {
  return gulp.src(['source/**/*', '!source/**/*.md'])
    .pipe(gulp.dest('build/source/'));
});

/**
 * Copy the manifest file.
 */
gulp.task('copy-manifest', ['build-clean'], () => {
  return gulp.src(['vendor/firefox/manifest.json'])
    .pipe(gulp.dest('build/'));
});

/**
 * Copy images folder to build folder, but skip Markdown files.
 */
gulp.task('copy-images', ['build-clean'], () => {
  return gulp.src(['images/**/*', '!images/**/*.md'])
    .pipe(gulp.dest('build/images/'));
});

/**
 * Cleans build folder by deleting everything inside it,
 * but not the folder itself or any markdown files.
 */
gulp.task('build-clean', () => {
  return del(['build/**', '!build', '!build/*.md']);
});
