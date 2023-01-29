"use strict"
const dotenv = require("dotenv")
dotenv.config()

/**
 * Set Environment function.
 *
 * @param {import("./index").Option} [props] - Overwrite Options.
 * @returns {import("esbuild").Plugin}
 */
module.exports = function (props) {
  return {
    name: "Env",
    setup: (build) => {
      const options = build.initialOptions
      const define = options.define ?? {}
      const isProd = props?.isProd ?? options.minify

      for (const k in process.env) {
        if (k.startsWith(`${props?.env ?? "ESB"}_`))
          define[`process.env.${k}`] = JSON.stringify(process.env[k])
      }

      options.define = {
        "process.env.NODE_ENV": isProd ? "production" : "development",
        "process.env.PROD": Boolean(isProd),
        "process.env.DEV": Boolean(!isProd),
        ...define,
      }
    },
  }
}
