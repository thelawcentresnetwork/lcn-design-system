# Law Centres Design System

A design system for Law Centre sites and apps utilising [Chakra](https://chakra-ui.com/), [FontAwesome](https://fontawesome.com/icons?d=gallery) and [Google Fonts](https://fonts.google.com/).

[View on Vercel](https://lcn-design-system.vercel.app/)

## Usage

`yarn add law-centres-design-system`

Then install peer dependancies.

## Documentation

We use [Styleguidist](https://react-styleguidist.js.org/) to create a hot-loading styleguide. Markdown files for each component can be created as examples, run:

`yarn styleguidist server`

Currently this is deployed to Vercel, using `npx styleguidist build` with the output directory of `styleguide`.

## Using local version

If developing and using in another local project, use [`yalc`](https://www.npmjs.com/package/yalc) to publish to a local store

- `yalc publish`

or to publish and push to all current dependant local projects, use

- `yalc push`

... and in your dependant project, use the local store with

- `yalc add law-centres-design-system`

## Publishing to NPM

To compile your code, run

- `npm run build`.

To publish your package to npm, make sure you're logged in the correct account by running

- `npm login`.

Update the package version accordingly by using

- [`npm version [patch | minor | major]`](https://docs.npmjs.com/about-semantic-versioning)

Then publish your package by running

- `npm publish`
