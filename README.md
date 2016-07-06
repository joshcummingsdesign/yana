# Yana
Yana - Yet another notes app. Built with AngularFire.

## Dependencies
* node 5.11.1
* npm 3.8.6
* bower 1.7.9

## Getting Started
1. Run `npm install`
2. Run `bower install`
3. Run `gulp watch`

## Included directives
* [chosen](https://github.com/leocaseiro/angular-chosen)
* [icheck](https://github.com/fronteed/icheck)

## Convention
* Most work will be done in the `src` folder
* The only time you'll work in the `public` folder is when creating templates and views or modifying `index.html`
* Server-side js is written using express in `server.js`

## Database
* Paste your Firebase config into `src/database.js`

## Images
* All images should be saved in `src/assets/images`
* Gulp compiles all images to `public/images`

## AngularJS
* All AngularJS gets compiled by webpack using `require` statements in `src/app.js`
* Gulp comiples all webpack js to `public/styles/app.bundle.js`

## Bower
* After installing a dependency with bower, add the files you need to overrides in bower.json
* Run `gulp bower` to compile vendor assets automatically
* All js files in overrides in bower.json get compiled to `src/assets/scripts/vendor`
* Gulp compiles all bower js to `public/styles/vendor.bundle.js`
* All css and sass files in overrides in bower.json get compiled to `src/assets/styles/vendor`

## Sass
* All styles should be written as sass (.scss) in `src/assets/styles`
* Nothing should be written in `src/assets/styles/vendor`, use bower
* Gulp compiles all sass to `public/styles/main.css`

## Sass Sourcemaps
1. Open Chrome Dev Tools
2. Click the three dots and go to **Settings**
3. Click **Workspace** on the left
4. Click **Add Folder** and choose the root of your project directory
5. Click **Allow** at the top and then close the Settings pane
6. Now any sass files you edit in the sources section of Chrome Dev tools will be saved in your project locally
