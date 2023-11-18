# esbuild-plugin-env

ESBuild plugin that use dotenv to setup environment variables

## Installation

```bash
npm install esbuild-plugin-env --save-dev
pnpm install esbuild-plugin-env --save-dev
yarn add esbuild-plugin-env --save-dev
```

## Environment

- `process.env.NODE_ENV`: use minify to know whether the app will be set to production.
- `process.env.PROD`: {boolean} whether the app is running in production.
- `process.env.DEV`: {boolean} whether the app is running in development (always the opposite of import.meta.env.PROD)
- `process.env.ESB_*`: key format that will be fetch in environment variables

## Optional Parameters

- `isProd`: overwrite the NODE_ENV to set to production
- `startkey`: overwrite the starting key that the app will set, default is `ESB`

## Usage in script

```javascript
import esbuild from "esbuild"
import env from "esbuild-plugin-env"

// minify to true to make the NODE_ENV in production
esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  minify: true,
  outfile: "./dist/index.js",
  plugins: [env()],
})
```

## Using Custom Directory

```javascript
import esbuild from "esbuild"
import env from "esbuild-plugin-env"

esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  minify: true,
  outfile: "./dist/index.js",
  plugins: [
    env({
      isProd: true
      startKey: "ESB"
    }),
  ],
})
```
