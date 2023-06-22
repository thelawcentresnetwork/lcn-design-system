# Law Centres Design System

A design system for Law Centre sites and apps utilising [Chakra](https://chakra-ui.com/), [FontAwesome](https://fontawesome.com/icons?d=gallery) and [Google Fonts](https://fonts.google.com/).

[View Documentation](http://design-system.lawcentres.org.uk/)

## Usage

`yarn add law-centres-design-system`

Then install peer dependancies.

## Documentation

We use [Styleguidist](https://react-styleguidist.js.org/) to create a hot-loading styleguide. Markdown files for each component can be created as examples, run:

`yarn styleguidist server`

Currently this is automatically deployed to Vercel on push to Github, using `npx styleguidist build` with the output directory of `styleguide`.

## Using local version

If developing and using in another local project, use [`yalc`](https://www.npmjs.com/package/yalc) to publish to a local store


1. Install yalc globally

If you are using yarn: 

`yarn add global yalc`

If you are using npm:

`npm i -g yalc`

2. Publish the law-centres-design-system package locally 

Run `npm run build` followed by `yalc publish` in the law-centres-design-system project

3. Adding the law-centres-design-system package to desired project

In the project you want to add this package run : 

`yalc add law-centres-design-system`

Note that adding the version number is not necessary but will still work e.g.

`yalc add law-centres-design-system@2.6.6`

IMPORTANT: If you would like to run a local instance of law-centres-design-system in  another project, you need to add the peer dependencies from your law-centres-design-system project to the dependency list of your project's package.json. 

4. Update node_modules 

Run `yarn` to update your yarn.lock 

5. Updating the package after changes 

In your local instance of  law-centres-design-system run:

`yalc push`  

6. Remove the local package

 To remove the local package run `yalc remove law-centres-design-system ` in the dependent project

## Publishing to NPM

To compile your code, run

- `npm run build`.

To publish your package to npm, make sure you're logged in the correct account by running

- `npm login`.

Update the package version accordingly by using

- [`npm version [patch | minor | major]`](https://docs.npmjs.com/about-semantic-versioning)

Then publish your package by running

- `npm publish`
