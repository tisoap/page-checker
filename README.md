# Page Checker

A cross-browser WebExtension that checks web pages for errors and standards compliance.

## About

I first started this repository when I was working as a frontend developer for IBM. All pages from the company had to be error free, so developers used a multitude of tools for automated checking and a lot of manual checking to ensure that. I wanted to create a single extension that included the functionality of all automated tools we used, plus automating several other manual checks.

Unfortunately I never had the time to finish this extension, and now I never intend to. I'm preserving here my unfinished work to serve as research material, if I ever need to create a cross browser extension again.

## Build

After cloning this repository, run the following commands to have a working environment and build the extension:

```shell
$ sudo npm install -g gulp-cli
$ npm install
$ gulp
```

## Copyright and license

This application is licensed under MIT (see LICENSE file).

This application makes use of 3rd party libraries, each with their own license (see LICENSE-3RD-PARTY.txt file):

- [HTML Tidy](https://github.com/htacg/tidy-html5)
- [LESS SPACE](https://github.com/Eomerx/less-space)
- [Materialize](https://github.com/Dogfalo/materialize)

The [HTML Tidy](https://github.com/htacg/tidy-html5) library used by this application is an altered version, compiled to JavaScript using [emscripten](https://github.com/kripken/emscripten/).
