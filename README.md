# ts-i18n webpack example [(try live)](https://domdomegg.github.io/ts-i18n-webpack-plugin-example/)

This is an example project that shows how to use ts-i18n with webpack, based on an ejected create-react-app.

Try out setting your browser language to French (fr) and reloading the page.

The steps to recreate this are effectively:

1. Initialize a project with create-react-app
2. Eject so we can add the webpack plugin
3. Add the webpack plugin to `config/webpack.config.js`
4. Create the input directory and add translation files, e.g. `en.json` (see `src/i18n` for an example)
5. For automatic browser usage, import the `browser.ts` file from the output directory (see `src/App.tsx` for an example), and call the translation methods
