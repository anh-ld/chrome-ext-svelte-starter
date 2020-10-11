**This is a fork of [chrome-extension-svelte-boilerplate](https://github.com/d-lowl/chrome-extension-svelte-boilerplate) by [d-lowl](https://github.com/d-lowl/)**

# Chrome Extension Svelte Boilerplate

A boilerplate for Chrome Extensions using [Svelte](https://svelte.technology/) and [Webpack](https://webpack.github.io/) with [automatic refresh](https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh).

## Running

- Run `yarn`.
- Change the package's name and description on `package.json`.
- Change the name of your extension on `src/manifest.json`.
- Run `yarn dev`
- Load your extension on Chrome Development mode.

## Content Scripts

All entry points of the content scripts should be excluded from hot reloading.
Add it to `excludeEntriesToHotReload` in `webpack.dev.js`.

```js
excludeEntriesToHotReload: [myContentScript]
```

## Hot reload

Default Port: `4444`. Change it in `webpack.dev.js`.

## Packing

```
yarn build
```

## Secrets

Place all your secrets in `.env`.
Remember to add `.env` to `.gitignore` on your commit.
