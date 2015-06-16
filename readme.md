FFC6 Pre-Registration Page
==================================

## Directory Layout

- `fonts`: Webfont files.
- `css`: Folder of all the css related files.
- `css/dev`: Folder of all the css related development files, these are the files you're supposed to be editing.
- `js`: Folder of all the JavaScript related files.
- `js/dev`: Folder of all the JavaScript related development files, these are the files you're supposed to be editing.
- `img`: Image files needed for the website.

## How to watch and compile css and js files

Make sure npm is already installed in your computer, then install all the dependencies with:
    
    npm install

Once the installations are done, you can go ahead and have Grunt watch for changes in the Sass and js files with this Grunt command:

    grunt

After you made any changes to any scss or js files, just wait for Grunt to notify you. All the compressed/compiled file will be generated outside `dev` folder.