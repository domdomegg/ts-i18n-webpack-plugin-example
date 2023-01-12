# ts-i18n webpack example [(try live)](https://adamjones.me/ts-i18n-webpack-plugin-example/)

This is an example project that shows how to use ts-i18n with webpack, based on an ejected create-react-app.

Try out setting your browser language to French (fr) and reloading the page.

The steps to recreate this are effectively:

1. Initialize a project with create-react-app
2. Eject so we can add the webpack plugin
3. Add the webpack plugin to `config/webpack.config.js`
4. Create the input directory and add translation files, e.g. [`en.json`](./src/i18n/en.json) and [`fr.json`](./src/i18n/fr.json)
5. For automatic browser usage, start webpack to generate it and then import the [`browser.ts`](./src/i18n/browser.ts) file from the output directory. [`App.tsx`](./src/App.tsx) has an example of importing it and and calling the translation methods, and is tested by [`App.test.tsx`](./src/App.test.tsx).

Steps 3-5 are shown in this example commit: https://github.com/domdomegg/ts-i18n-webpack-plugin-example/commit/80607b00523e2a61ea2feaac193d17fe4f436919
