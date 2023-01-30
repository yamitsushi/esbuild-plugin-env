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
    name: "env",
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
        ...define,
      }
    },
  }
}
