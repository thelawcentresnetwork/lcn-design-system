# Law Centres Design System

A design system for Law Centre sites and apps utilising [Chakra](https://chakra-ui.com/), [FontAwesome](https://fontawesome.com/icons?d=gallery) and [Google Fonts](https://fonts.google.com/).

[View Documentation](http://design-system.lawcentres.org.uk/)

## Usage

`yarn add law-centres-design-system`

Then install peer dependancies.

## Documentation

We use [Storybook](https://storybook.js.org/docs/react/get-started/install/) to create a styleguide. To run this locally use:

`npm run storybook`

Currently this is automatically deployed to Vercel on push to Github.

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

This project uses Github actions to publish to npm on a merge into the main branch. This process will also produce a changelog and all notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
